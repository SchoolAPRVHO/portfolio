"use strict";

import { Email } from "@mui/icons-material";

const nodemailer = require("nodemailer");
require('dotenv').config();

export interface IUser {
    firstname: string,
    lastname: string,
    email: string,
    question: string
}
// async..await is not allowed in global scope, must use a wrapper
/**
 * The function takes a user object as an argument, creates a test account, creates a transporter
 * object, sends an email, and logs the message ID and preview URL
 * @param {IUser} user - IUser - the user object that contains the email address to send the email to
 */
async function main(user : IUser) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: process.env.PORT,
    secure: process.env.SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.USER, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: user.email, // sender address
    to: '"Raven Van Hove" <raven.vanhove@student.ap.be>', // list of receivers
    subject: "Question from portfolio", // Subject line
    text: user.question, // plain text body
    html: `<b>${user.question}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


const testUser: IUser = {firstname:"test", lastname: "user", email:"ravenvanhove@hotmail.be", question:"This is a testmail" }
main(testUser).catch(console.error);
