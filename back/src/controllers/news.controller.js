const News = require("../models/news.model");

exports.Create = async (req, res) => {
    try {
        const { title, description, content, authorId } = req.body;
        const thumbnail = req.file.filename;

        if (!title || !thumbnail || !description || !content || !authorId) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        await new News({
            title: title,
            thumbnail: thumbnail,
            description: description,
            content: content,
            authorId: authorId
        }).save();
        
        return res.status(201).json({
            error: false,
            message: "L'actualité a bien été créée."
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
        const news = await News.findAll();

        return res.status(200).json({
            error: false,
            message: "Les actualités ont bien été récupérés",
            data: news
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

        const news = await News.findOne({ where: { id: id } });

        if (!news) {
            return res.status(404).json({
                error: true,
                message: "L'actualité est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "L'actualité a été récupérée.",
            post: news
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