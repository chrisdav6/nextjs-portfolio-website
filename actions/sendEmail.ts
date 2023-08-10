'use server';
import { Resend } from 'resend';
import { validateString } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData: FormData) => {
  //Get Form Data
  const email = formData.get('senderEmail');
  const message = formData.get('message');

  //Server Side Validation
  if (!validateString(email, 500)) {
    return {
      error: 'Invalid Email!',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid Message!',
    };
  }

  //Send Email
  try {
    await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'chris.davis5440@gmail.com',
      subject: 'Message from Portfolio Contact Form',
      text: `Hello this is a message from your portfolio contact page \nFrom: ${
        email as string
      } \nMessage: ${message as string}`,
      reply_to: email as string,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === 'object' && 'message' in error) {
      return {
        error: error.message,
      };
    }
  }
};
