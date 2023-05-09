const Media = require("../models/media.model");
const Album = require("../models/album.model");

exports.Create = async (req, res) => {
    try {
        const { albumId } = req.body;
        const fileCount = req.files.length;
        const files = req.files;
        if (!albumId || isNaN(albumId) || fileCount === 0) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        const isAlbumExist = await Album.findOne({ where: { id: albumId } });

        if (!isAlbumExist) {
            return res.status(404).json({
                error: true,
                message: "L'album est introuvable."
            });
        }

        if (fileCount > 1) {
            files.forEach(async (file) => {
                await new Media({
                    albumId: albumId,
                    file: file.filename
                }).save();
            });
        } else {
            await new Media({
                albumId: albumId,
                file: files[0].filename
            }).save();
        }

        return res.status(201).json({
            error: false,
            message: "Le médias a bien été créé."
        });
    } catch (error) {
        console.log("error", error);
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.GetAll = async (req, res) => {
    try {
        const medias = await Media.findAll();

        return res.status(200).json({
            error: false,
            message: "Les médias ont bien été récupérés",
            data: medias
        })
    } catch (error) {
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
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Update = async (req, res) => {
    try {

    } catch (error) {
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Delete = async (req, res) => {
    try {

    } catch (error) {
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}