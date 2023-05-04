const UserRole = require("../models/user-role.model");

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
        const userRoles = await UserRole.findAll();

        const formattedUserRole = [];

        userRoles.forEach((userRole) => {
            formattedUserRole.push({ userId: userRole.userId, roleId: userRole.roleId })
        });

        return res.status(200).json({
            error: false,
            message: "Les relations entre utilisateurs et roles ont bien été récupérées",
            data: formattedUserRole
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

        const userRole = await UserRole.findOne({ where: { id: id } });

        if (!userRole) {
            return res.status(404).json({
                error: true,
                message: "La relation entre utilisateur et role est introuvable."
            });
        }

        return res.status(200).json({
            error: false,
            message: "La relation entre utilisateur et role a été récupérée.",
            post: userRole
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