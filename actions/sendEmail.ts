'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData: FormData) => {
  console.log('Running on Server!');
  const email = formData.get('senderEmail');
  const message = formData.get('message');

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'chris.davis5440@gmail.com',
    subject: 'Message from Portfolio Contact Form',
    text: `Hello this is a message from your portfolio contact page \nFrom: ${email} \nMessage: ${message}`,
  });
};
