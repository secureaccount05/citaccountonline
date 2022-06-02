import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export const sendEmail = async (
  to: string,
  html: string,
  subject: string,
  attachments?: Mail.Attachment[] | undefined
) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP || `mail.emailser.com`,
    port: Number(process.env.SMTP_PORT) || 587,
    auth: {
      user: process.env.EMAIL_ADDRESS || `mass50-toodySpU54`,
      pass: process.env.PASSWORD || `iawvL1ychYdF8T19`,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"Fred Foo 👻" ${
        process.env.EMAIL_ADDRESS || `mad@blacklistapps.me`
      }`,
      to,
      subject,
      html,
      attachments,
    });

    console.log(`Message sent: %s`, info.messageId);
  } catch (error) {
    console.log(`error: `, error);
  }
};
