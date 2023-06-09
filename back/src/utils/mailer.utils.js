const nodemailer = require('nodemailer');

const sendMail = async (type, args, email) => {
    try {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user
                pass: testAccount.pass, // generated ethereal password
            },
        });

        let info;

        if (type === "accountVerification") {
            const { code } = args;

            // send mail with defined transport object
            info = await transporter.sendMail({
                from: '"MyAPI 👻" <myapi@example.com>', // sender address
                to: email, // list of receivers
                subject: "Account verification ✔", // Subject line
                text: `Your account verification code is : ${code}.`, // plain text body
                html: `<b>Your account verification code is : ${code}.</b>`, // html body
            });

        } else if (type === "contact") {
            const { firstname, lastname, mail, phone, subject, content } = args;

            // send mail with defined transport object
            info = await transporter.sendMail({
                from: `"MyAPI 👻" <noreply@laconcordia.fr>`, // sender address
                to: `${email}`, // list of receivers
                subject: "Contact ✔", // Subject line
                text: `Nous avons bien reçu votre demande, nous vous répondrons dans les plus brefs délais - ${firstname} ${lastname} (${mail}) : ${content}.`, // plain text body
                html: `<b>Nous avons bien reçu votre demande, nous vous répondrons dans les plus brefs délais - ${firstname} ${lastname} (${mail}) : ${content}.</b>`, // html body
            });
        } else if (type === "resetPassword") {
            const { code } = args;

            // send mail with defined transport object
            info = await transporter.sendMail({
                from: `"MyAPI 👻" <noreply@laconcordia.fr>`,
                to: `${email}`,
                subject: "Reset password ✔",
                text: `Your reset password code is : ${code}.`,
                html: `<b>Your reset password code is : ${code}.</b>`,
            });
        } else if (type === "newNews") {
            // send mail with defined transport object
            info = await transporter.sendMail({
                from: `"MyAPI 👻" <noreply@laconcordia.fr>`,
                to: `${email}`,
                subject: "Nouvelle actualité ✔",
                text: `Une nouvelle actualité a été publiée sur le site, vous pouvez la consulter en vous rendant sur la page des actualités.`,
                html: `<b>Une nouvelle actualité a été publiée sur le site, vous pouvez la consulter en vous rendant sur la page des actualités.</b>`,
            });
        } else if (type === "newEvent") {
            // send mail with defined transport object
            info = await transporter.sendMail({
                from: `"MyAPI 👻" <noreply@laconcordia.fr>`,
                to: `${email}`,
                subject: "Nouvel événement ✔",
                text: `Un nouvel événement a été publié sur le site, vous pouvez le consulter en vous rendant sur la page des événements.`,
                html: `<b>Un nouvel événement a été publié sur le site, vous pouvez le consulter en vous rendant sur la page des événements.</b>`,
            });
        }

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    } catch (error) {
        return console.error(error);
    }
}

module.exports = {
    sendMail
}
