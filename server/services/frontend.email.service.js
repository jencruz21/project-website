const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const { google } = require('googleapis');

const CustomerEmail = require("../model/w_customerEmail");
dotenv.config();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECTED_URI = process.env.REDIRECTED_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const userEmail = process.env.ACC_EMAIL;

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECTED_URI);
oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

exports.sendEmail = async (name, from, subject, text) => {
    try {
        const accessToken = await oauth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                type: "OAuth2",
                user: userEmail,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        let mailOptions = {
            sender: `Customer <${from}>`,
            from: from,
            to: userEmail,
            subject: name + " - " + subject,
            text: text
        };
    
        const customerEmail = new CustomerEmail({
            ce_name: name,
            ce_from: from,
            ce_to: userEmail,
            ce_subject: subject,
            ce_text: text
        })

        await customerEmail.save();

        const response = await transport.sendMail(mailOptions);

        return response;
    } catch (error) {
        console.error(error);
    }
}