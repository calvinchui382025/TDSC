import nodemailer from "nodemailer";
import { render } from '@react-email/render';


// export default async function sendMail(
//   to: string,
//   subject: string,
//   emailHtml: string
// ) {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'vorstellen281',
//       pass: 'vorstellenautos',
//     },
//   });

//   await transporter.sendMail({
//     from: 'vorstellen281@gmail.com',
//     to: 'lucasaoverbey@gmail.com',
//     subject: 'test email',
//     html: emailHtml,
//   });
// }

// export default async function sendMail(req, res) {
//   console.log('test')

//   const { emailHtml } = req.body;
  
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'vorstellen281',
//       pass: 'vorstellenautos',
//     },
//   });

//   await transporter.sendMail({
//     from: 'vorstellen281@gmail.com',
//     to: 'lucasaoverbey@gmail.com',
//     subject: 'test email',
//     html: emailHtml,
//   });
// }

export async function GET(req, res) {
  // console.log({req});
  console.log(1);
  return {
    body: 'GET!',
  };
}

const password = process?.env?.TEST_EMAIL_PASSWORD || '';

console.log({password});


export async function POST(req, res) {
  console.log('sending email...')
  const { emailHtml } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vorstellen281',
        pass: password,
      },
    });
  
    await transporter.sendMail({
      from: 'vorstellen281@gmail.com',
      to: 'snyperiflex@yahoo.com',
      subject: 'test email',
      html: emailHtml,
    });
  
  return {
    body: 'POST!',
  };
}