import 'dotenv/config';
import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    },
  });

  const mailOptions = {
    from: `"Formulario Web" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: `Nuevo mensaje de ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ ok: true, message: "Mensaje enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "No se pudo enviar el mensaje" });
  }
}
