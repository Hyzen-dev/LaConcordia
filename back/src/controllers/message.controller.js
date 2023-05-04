const Message = require("../models/message.model");

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
        const messages = await Message.findAll();

        const formattedMessage = [];

        messages.forEach((message) => {
            formattedMessage.push({ lastname: message.lastname, firstname: message.firstname, mail: message.mail, phone: message.phone, subject: message.subject, content: message.content })
        });
        return res.status(200).json({
            error: false,
            message: "Les messages ont bien été récupérés",
            data: formattedMessage
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