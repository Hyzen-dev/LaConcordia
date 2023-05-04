const Status = require("../models/status.model");

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
        const status = await Status.findAll();

        const formattedStatus = [];

        status.forEach((statusData) => {
            formattedStatus.push({ name: statusData.name, label: statusData.label, type: statusData.type })
        });

        return res.status(200).json({
            error: false,
            message: "Les statuts ont bien été récupérés",
            data: formattedStatus
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

        const status = await Status.findOne({ where: { id: id } });

        if (!status) {
            return res.status(404).json({
                error: true,
                message: "Le status est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "Le status a été récupéré.",
            post: status
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