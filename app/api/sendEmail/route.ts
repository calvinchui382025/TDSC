import nodemailer from "nodemailer";
import { render } from '@react-email/render';
import { EmailTemplate } from 'app/admin/email/EmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const emailList = process?.env?.TEST_EMAIL_LIST.split(',') || [''];

  const emailAccount = process?.env?.TEST_EMAIL_ADDRESS || '';
  const password = process?.env?.TEST_EMAIL_PASSCODE || '';
  const body = await req.json();
  const { selectedRange, subjectLine, emailBody } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailAccount.split('@')[0],
      pass: password,
    },
  });

  emailList.forEach(async (email) => {
    const response = await transporter.sendMail({
      from: emailAccount,
      to: email,
      subject: subjectLine,
      html: render(EmailTemplate(selectedRange, emailBody))
    });
    console.log({ response });
    
  });

  return NextResponse.json({ message: 'Emails sent' })

}