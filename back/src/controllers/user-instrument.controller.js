const UserInstrument = require("../models/user-instrument.model");

exports.Create = async (req, res) => {
    try {

    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.GetAll = async (req, res) => {
    try {
        const userInstruments = await UserInstrument.findAll();

        const formattedUserInstrument = [];

        userInstruments.forEach((userInstrument) => {
            formattedUserInstrument.push({ userId: userInstrument.userId, instrumentId: userInstrument.instrumentId })
        });

        return res.status(200).json({
            error: false,
            message: "Les relations entre utilisateurs et partitions ont bien été récupérées",
            data: formattedUserInstrument
        })
    } catch (error){
        console.log("error");
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

        const userInstrument = await UserInstrument.findOne({ where: { id: id } });

        if (!userInstrument) {
            return res.status(404).json({
                error: true,
                message: "La relation entre utilisateur et instrument est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "La relation entre utilisateur et instrument a été récupérée.",
            post: userInstrument
        });
    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Update = async (req, res) => {
    try {

    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Delete = async (req, res) => {
    try {

    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}