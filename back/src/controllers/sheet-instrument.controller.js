const SheetInstrument = require("../models/sheet-instrument.model");
const Sheet = require("../models/sheet.model");
const Instrument = require("../models/instrument.model");

exports.Create = async (req, res) => {
    try {
        const { sheetId, instrumentId } = req.body;

        if (!sheetId || isNaN(sheetId) || !instrumentId || isNaN(instrumentId)) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        const isSheetExist = await Sheet.findOne({ where: { id: sheetId } });

        const isInstrumentExist = await Instrument.findOne({ where: { id: instrumentId } });

        if (!isSheetExist || !isInstrumentExist) {
            return res.status(404).json({
                error: true,
                message: !isSheetExist && !isInstrumentExist ? "La partition et l'instrument sont introuvables." : !isSheetExist ? "La partition est introuvable." : "L'instrument est introuvable."
            });
        }

        await new SheetInstrument({
            sheetId: sheetId,
            instrumentId: instrumentId
        }).save();

        return res.status(201).json({
            error: false,
            message: "La relation entre partition et instrument a bien été créée."
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
        const sheetInstruments = await SheetInstrument.findAll();

        return res.status(200).json({
            error: false,
            message: "Les relations entre instruments et partitions ont bien été récupérées",
            data: sheetInstruments
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