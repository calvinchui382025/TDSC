import nodemailer from "nodemailer";
import { render } from '@react-email/render';
import { EmailTemplate } from 'app/admin/email/EmailTemplate';
import { NextResponse } from 'next/server';

export async function POST(req) {
  const emailAccount = process?.env?.TEST_EMAIL_ADDRESS || '';
  const password = process?.env?.TEST_EMAIL_PASSCODE || '';
  const body = await req.json();
  const { selectedRange, emailBody } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailAccount.split('@')[0],
      pass: password,
    },
  });

  const response = await transporter.sendMail({
    from: emailAccount,
    to: 'snyperiflex@yahoo.com',
    subject: 'Texas Defensive Shooting Club - Email Test',
    html: render(EmailTemplate(selectedRange, emailBody))
  });

  return NextResponse.json({ response })
}