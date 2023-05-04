const Sheet = require("../models/sheet.model");

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
        const sheets = await Sheet.findAll();

        const formattedSheet = [];

        sheets.forEach((sheet) => {
            formattedSheet.push({ title: sheet.title, sheetFile: sheet.sheetFile, authorId: sheet.authorId })
        });

        return res.status(200).json({
            error: false,
            message: "Les partitions ont bien été récupérées",
            data: formattedSheet
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

        const sheet = await Sheet.findOne({ where: { id: id } });

        if (!sheet) {
            return res.status(404).json({
                error: true,
                message: "La partition est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "La partition a été récupérée.",
            post: sheet
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