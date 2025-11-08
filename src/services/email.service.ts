import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS },
})

export async function sendEmail(to: string, subject: string, body: string) {
  await transporter.sendMail({ from: process.env.MAIL_USER, to, subject, html: body })
}