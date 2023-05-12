const Event = require("../models/event.model");

exports.Create = async (req, res) => {
    try {
        const { title, address, content, eventDate, authorId } = req.body;
        const thumbnail = req.file.filename;

        if (!title || !thumbnail || !address || !content || !eventDate || !authorId) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        // Join the user name from the authorId from user table
        await new Event({
            title: title,
            thumbnail: thumbnail,
            address: address,
            content: content,
            eventDate: eventDate,
            authorId: authorId
        }).save();

        return res.status(201).json({
            error: false,
            message: "L'évènement a bien été créé."
        });
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

        return res.status(200).json({
            error: false,
            message: "Les évènements ont bien été récupérés",
            data: events
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
        const { id } = req.body;

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
            data: event
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