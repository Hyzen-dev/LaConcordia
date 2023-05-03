const { Op } = require("sequelize");
const User = require("../models/user.model");
const { sendMail } = require("../utils/mailer.utils");
const { encryptPassword, comparePassword } = require("../utils/passwordHandler.utils");
const jwt = require('jsonwebtoken');
const { phone } = require('phone');
const UserInstrument = require('./../models/user-instrument.model');
const Instrument = require('./../models/instrument.model');
const UserStatus = require('./../models/user-status.model');
const Status = require('./../models/status.model');
const UserRole = require('./../models/user-role.model');
const Role = require('./../models/role.model');

exports.SignUp = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        let { phoneNumber } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/i;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;

        if (!nameRegex.test(firstName) || !nameRegex.test(lastName)) {
            return res.status(400).json({
                error: true,
                message: "Le nom et le prénom doivent contenir au moins 2 caractères et ne doivent pas contenir de chiffres."
            });
        }

        if (!emailRegex.test(email)) {
            return res.status(400).json({
                error: true,
                message: "L'adresse email est invalide."
            });
        }

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                error: true,
                message: "Le mot de passe doit contenir au moins 8 caractères dont une majuscule, une minuscule, un chiffre et un caractère spécial."
            });
        }


        if (phoneNumber) {
            const phoneData = await phone(phoneNumber, { country: 'FR' })
            if (!phoneData.isValid) {
                return res.status(400).json({
                    error: true,
                    message: 'Le numéro de téléphone est incorrect.'
                })
            } else {
                phoneNumber = phoneData.phoneNumber
            }
        }

        const isExist = await User.findOne({ where: { email: email } });

        if (isExist) {
            return res.status(409).json({
                error: true,
                message: "L'utilisateur existe déjà."
            });
        }

        const encodedPassword = await encryptPassword(password);
        // Générer un code à 6 chiffres
        const code = Math.floor(100000 + Math.random() * 900000);

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phoneNumber || null,
            password: encodedPassword,
            emailVerificationCode: code,
            // Rajouter 15 minutes à la date actuelle
            emailVerificationCodeExpiration: new Date(Date.now() + 15 * 60 * 1000)
        }

        // Envoi de l'email de vérification
        await sendMail("accountVerification", { code: code }, email);

        await new User(userData).save();
        return res.status(201).json({
            error: false,
            message: "L'utilisateur a été créé avec succès."
        });

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}

exports.VerifyAccount = async (req, res) => {
    try {
        const { email, code } = req.body;

        if (!email || !code) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        const user = await User.findOne({ where: { email: email } });


        if (!user) {
            return res.status(401).json({
                error: true,
                message: "L'utilisateur n'existe pas et/ou le code est incorrect."
            });
        }

        if (code !== user.emailVerificationCode) {
            return res.status(401).json({
                error: true,
                message: "L'utilisateur n'existe pas et/ou le code est incorrect."
            });
        }

        const expirationDate = user.emailVerificationCodeExpiration;

        if (expirationDate < new Date()) {
            return res.status(401).json({
                error: true,
                message: "Le code a expiré."
            });
        }

        const userData = {
            emailVerificationCode: null,
            emailVerificationCodeExpiration: null,
            isActive: true
        }

        await user.update(userData);
        return res.status(200).json({
            error: false,
            message: "Le compte a été vérifié avec succès."
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}

exports.ResendVerification = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }



        const user = await User.findOne({ where: { email: email } });


        if (!user) {
            return res.status(401).json({
                error: true,
                message: "L'utilisateur n'existe pas et/ou le code est incorrect."
            });
        }
        // Vérifier si ça fait moins de 5 minutes
        // const expirationDate = user.emailVerificationCodeExpiration.setTime(user.emailVerificationCodeExpiration - ((5 * 60) * 1000));

        // if (expirationDate < new Date()) {
        //     return res.status(401).json({
        //         error: true,
        //         message: "Veuillez attendre 5 minutes avant d'envoyer un nouveau code."
        //     });
        // }


        // Générer un code à 6 chiffres
        const code = Math.floor(100000 + Math.random() * 900000);

        const userData = {
            emailVerificationCode: code,
            // Rajouter 15 minutes à la date actuelle
            emailVerificationCodeExpiration: new Date(Date.now() + 15 * 60 * 1000)
        }

        // Envoi de l'email de vérification
        await sendMail("accountVerification", { code: code }, user.email);

        await user.update(userData);
        return res.status(201).json({
            error: false,
            message: "Un nouveau code de vérification vient de vous être envoyé."
        });

    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}

exports.SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }


        const user = await User.findOne({ where: { email: email } });


        if (!user) {
            return res.status(401).json({
                error: true,
                message: "L'identifiant et/ou le mot de passe est incorrect."
            });
        }

        const isPasswordValid = await comparePassword(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                error: true,
                message: "L'identifiant et/ou le mot de passe est incorrect."
            });
        }

        if (!user.isActive) {
            return res.status(401).json({
                error: true,
                message: "Ce compte n'est pas activé."
            });
        }

        // Générer un token
        // Il va permettre de vérifier l'identité de l'utilisateur lors de ses requêtes vers l'API
        const token = jwt.sign({ id: user.id }, "LKKJSDFEFKONERLNERLNK", { expiresIn: "1h" });

        const userData = {
            accessToken: token,
        }

        await user.update(userData);

        return res.status(200).json({
            error: false,
            message: "Vous êtes connecté.",
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}

exports.GetProfile = async (req, res) => {
    try {
        const { email } = req.decoded;

        if (!email) {
            return res.status(401).json({
                error: true,
                message: "Accès interdit."
            });
        }

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(401).json({
                error: true,
                message: "Accès interdit."
            });
        }

        // Rôles 
        const roles = await UserRole.findAll({ where: { userId: user.id } });
        const rolesDetails = await Role.findAll();
        const userRoles = [];
        roles.forEach((role) => {
            rolesDetails.forEach((role2) => {
                if (role2.id === role.roleId) {
                    const userRoleData = {
                        name: role2.name,
                        label: role2.label
                    }
                    userRoles.push(userRoleData);
                }
            })
        });

        console.log(userRoles);
        // Instruments
        const instruments = await UserInstrument.findAll({ where: { userId: user.id } });

        const instrumentsDetails = await Instrument.findAll();
        const userInstruments = [];
        instruments.forEach((instrument) => {
            instrumentsDetails.forEach((instrument2) => {
                if (instrument2.id === instrument.instrumentId) {
                    const instrumentData = {
                        name: instrument2.name,
                        label: instrument2.label,
                    }
                    userInstruments.push(instrumentData);
                }
            })
        });
        // Status
        const status = await UserStatus.findAll({ where: { userId: user.id } });

        const statusDetails = await Status.findAll();
        const userStatus = [];
        status.forEach((data) => {
            statusDetails.forEach((status2) => {
                if (status2.id === data.statusId) {
                    const statusData = {
                        name: status2.name,
                        label: status2.label,
                        type: status2.type
                    }
                    userStatus.push(statusData);
                }
            })
        });

        return res.status(200).json({
            error: false,
            data: 
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                userInstruments,
                userStatus,
                userRoles
            }
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}