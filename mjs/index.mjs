// Use import statements for ES Modules
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { google } from "googleapis";
import serverless from "serverless-http";
import "dotenv/config"; // Use 'dotenv/config' for ES Modules to load environment variables

// The app and router setup remains the same, but the syntax for imports changes
const router = express.Router();

const app = express();
app.use(cors({ origin: "http://ecole-portfolio-2025.s3-website.us-east-2.amazonaws.com/" }));
app.use(express.json());
app.use("/", router);

// OAuth2 setup
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// send mail function
async function sendMail(mailOptions) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL_USER, // your Gmail address
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });

        return await transport.sendMail(mailOptions);
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}

// your contact route
router.post("/contact", async (req, res) => {
    const name = req.body.firstName + " " + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "Contact Form Submission - Portfolio",
        html: `<p>Name: ${name}</p>
               <p>Email: ${email}</p>
               <p>Phone: ${phone}</p>
               <p>Message: ${message}</p>`,
    };

    try {
        await sendMail(mailOptions);
        res.json({ code: 200, status: "Message Sent" });
    } catch (error) {
        console.error("Handler caught error:", error);
        res.json({ code: 500, status: "Error", error: error.message });
    }
});

// Use export default for the serverless handler
export const handler = serverless(app);
