const Instrument = require("../models/instrument.model");

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
        const instruments = await Instrument.findAll();

        const formattedInstruments = [];

        instruments.forEach((instrument) => {
            formattedInstruments.push({ name: instrument.name, label: instrument.label, statusId: instrument.statusId })
        });
        return res.status(200).json({
            error: false,
            message: "Les instruments ont bien été récupérés",
            data: formattedInstruments
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

        const instrument = await Instrument.findOne({ where: { id: id } });

        if (!instrument) {
            return res.status(404).json({
                error: true,
                message: "L'instrument est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "L'instrument a été récupéré.",
            post: instrument
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