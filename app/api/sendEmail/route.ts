import nodemailer from "nodemailer";
import { render } from '@react-email/render';
import { EmailTemplate } from 'app/admin/email/EmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const emailAccount = process?.env?.TEST_EMAIL_ADDRESS || '';
  const password = process?.env?.TEST_EMAIL_PASSCODE || '';

  const waitTime = 300000; // 5 minutes

  const body = await req.json();
  const { 
    selectedRange, 
    subjectLine = "TDSC Newsletter - Saturday Drills", 
    emailBody = "Saturday August 19th Shoot Pistol/ Rifle Drills and Maneuvers; SAFETY BRIEFING 8:15AM; START 8:30AM. PLAN ON SHOOTING! We’ll run some demanding speed, accuracy and tactical drills. You need to train… you need to SHOW UP!", 
    emailSignOff,
    emailList = new Array(10).fill('lucasaoverbey@gmail.com'),
  } = body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    pool: true,
    maxMessages: 500,
    auth: {
      user: emailAccount,
      pass: password,
    },
  });

  let chain = Promise.resolve();

  const startEmail:string = '';
  let sendEmailStatus = false;

  emailList.forEach((email, i) => {
    if (email === startEmail) {
      sendEmailStatus = true;
    }

    if (i !== 0 && i % 50 === 0) {
      chain = chain.then(() => {
        console.log('Waiting...')
        return new Promise((resolve) => setTimeout(resolve, waitTime))
      });
    }

    if (sendEmailStatus === true || startEmail === '') {
      chain = chain.then(() => {  
        return new Promise((resolve, reject) => {
          transporter.sendMail({
            from: emailAccount,
            to: email,
            subject: subjectLine,
            html: render(EmailTemplate(selectedRange, emailBody, emailSignOff))
          }).then((response) => {
            console.log(`${i} - Email sent to ${email}`);
            if (i === emailList.length - 1) {
              console.log('Last email sent --------------------------------------');
              transporter.close();
            }
            resolve();
          }).catch((err) => {
            console.log(`${i} - FAILED email to`, email);
            console.log('err', err);
            transporter.close();
            reject();
          });
        })
      })
    }

  })

  return NextResponse.json({ message: 'Emails sent' })
}