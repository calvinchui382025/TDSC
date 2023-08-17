import nodemailer from "nodemailer";
import { render } from '@react-email/render';
import { EmailTemplate } from 'app/admin/email/EmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const emailList = String(process?.env?.FULL_EMAIL_BLAST_LIST).split(',') || [''];
  
  // const emailList = String(process?.env?.TEST_EMAIL_LIST).split(',') || [''];

  const emailAccount = process?.env?.TEST_EMAIL_ADDRESS || '';
  const password = process?.env?.TEST_EMAIL_PASSCODE || '';
  const body = await req.json();
  const { 
    selectedRange, 
    // subjectLine, 
    // emailBody, 
    emailSignOff 
  } = body;

  const subjectLine = "TDSC Newsletter - Saturday Drills"
  const emailBody = "Saturday August 5th Shoot Pistol/ Rifle Drills and Maneuvers; SAFETY BRIEFING 8:15AM; START 8:30AM. PLAN ON SHOOTING! We’ll run some demanding speed, accuracy and tactical drills. You need to train… you need to SHOW UP!"

  const transporter = nodemailer.createTransport({
    pool: true,
    service: 'gmail',
    maxMessages: 500,
    auth: {
      user: emailAccount.split('@')[0],
      pass: password,
    },
  });

  // emailList.forEach((email, i) => {
  //   setTimeout(() => {
  //     transporter.sendMail({
  //       from: emailAccount,
  //       to: email,
  //       subject: subjectLine,
  //       html: render(EmailTemplate(selectedRange, emailBody, emailSignOff))
  //     }).then((response) => {
  //       console.log(`Email sent to ${email}`);
  //       if (i === emailList.length - 1) {
  //         console.log('Last email sent --------------------------------------');
  //         transporter.close();
  //       }
  //     }).catch((err) => {
  //       console.log('FAILED email to', email);
  //       console.log('err', err);
  //     });
  //   }, 1000 * i)
  // });

  let chain = Promise.resolve();

  const startEmail:string = '';
  let sendEmailStatus = false;

  emailList.forEach((email, i) => {
    if (email === startEmail) {
      sendEmailStatus = true;
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
            console.log(`Email sent to ${email}`);
            if (i === emailList.length - 1) {
              console.log('Last email sent --------------------------------------');
              transporter.close();
            }
            resolve();
          }).catch((err) => {
            console.log('FAILED email to', email);
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