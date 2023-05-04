const Media = require("../models/media.model");

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
        const medias = await Media.findAll();

        const formattedMedias = [];

        medias.forEach((media) => {
            formattedMedias.push({ title: media.title, picture: media.picture, albumId: media.albumId })
        });
        return res.status(200).json({
            error: false,
            message: "Les médias ont bien été récupérés",
            data: formattedMedias
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

        const media = await Media.findOne({ where: { id: id } });

        if (!media) {
            return res.status(404).json({
                error: true,
                message: "Le médias est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "Le médias a été récupéré.",
            post: media
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