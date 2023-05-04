const UserStatus = require("../models/user-status.model");

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
        const userStatus = await UserStatus.findAll();

        const formattedUserStatus = [];

        userStatus.forEach((userStatusData) => {
            formattedUserStatus.push({ userId: userStatusData.userId, statusId: userStatusData.statusId })
        });

        return res.status(200).json({
            error: false,
            message: "Les relations entre utilisateurs et status ont bien été récupérées",
            data: formattedUserStatus
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

        const userStatus = await UserStatus.findOne({ where: { id: id } });

        if (!userStatus) {
            return res.status(404).json({
                error: true,
                message: "La relation entre utilisateur et status est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "La relation entre utilisateur et status a été récupérée.",
            post: userStatus
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