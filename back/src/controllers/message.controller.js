const Message = require("../models/message.model");
const { phone } = require("phone");
const { sendMail } = require("../utils/mailer.utils");

exports.Create = async (req, res) => {
    try {
        const { lastname, firstname, mail, subject, content } = req.body;
        let { phone: phoneNumber } = req.body;

        if (!lastname || !firstname || !mail || !subject || !content) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        if (phoneNumber) {
            const phoneFormat = phone(phoneNumber, "FR", { validateMobilePrefix: false, strictDetection: false });
            console.log("phoneFormat", phoneFormat)
            if (!phoneFormat.isValid) {
                return res.status(400).json({
                    error: true,
                    message: "Le numéro de téléphone est invalide."
                });
            } else {
                phoneNumber = phoneFormat.phoneNumber;
            }
        }

        const sendedMail = await sendMail("contact", { lastname, firstname, mail, phoneNumber, subject, content }, mail);

        await new Message({
            firstname,
            lastname,
            mail,
            phone: phoneNumber || null,
            subject,
            content
        }).save();

        return res.status(201).json({
            error: false,
            message: "Votre message a bien été envoyé."
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.GetAll = async (req, res) => {
    try {
        const messages = await Message.findAll();

        return res.status(200).json({
            error: false,
            message: "Les messages ont bien été récupérés",
            data: messages
        })
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.GetById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id || isNaN(id)) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        const message = await Message.findOne({ where: { id: id } });

        if (!message) {
            return res.status(404).json({
                error: true,
                message: "Le message est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "Le message a été récupéré.",
            post: message
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Update = async (req, res) => {
    try {

    } catch (error) {
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Delete = async (req, res) => {
    try {

    } catch (error) {
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}