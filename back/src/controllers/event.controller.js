const Event = require("../models/event.model");

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
        const events = await Event.findAll();

        const formattedEvent = [];

        events.forEach((event) => {
            formattedEvent.push({ title: event.title, content: event.content, thumbnail: event.thumbnail, authorId: event.authorId, eventDate: event.eventDate })
        });
        return res.status(200).json({
            error: false,
            message: "Les évènements ont bien été récupérés",
            data: formattedEvent
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

        const event = await Event.findOne({ where: { id: id } });

        if (!event) {
            return res.status(404).json({
                error: true,
                message: "L'évènement est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "L'évènement a été récupéré.",
            post: event
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