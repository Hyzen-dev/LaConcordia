const SheetInstrument = require("../models/sheet-instrument.model");

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
        const sheetInstruments = await SheetInstrument.findAll();

        const formattedSheetInstrument = [];

        sheetInstruments.forEach((sheetInstrument) => {
            formattedSheetInstrument.push({ sheetId: sheetInstrument.sheetId, instrumentId: sheetInstrument.instrumentId })
        });

        return res.status(200).json({
            error: false,
            message: "Les relations entre instruments et partitions ont bien été récupérées",
            data: formattedSheetInstrument
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

        const sheetInstrument = await SheetInstrument.findOne({ where: { id: id } });

        if (!sheetInstrument) {
            return res.status(404).json({
                error: true,
                message: "La relation entre partition et instrument est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "La relation entre partition et instrument a été récupérée.",
            post: sheetInstrument
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