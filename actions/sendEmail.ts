'use server';
import React from 'react';
import { Resend } from 'resend';
import { getErrorMessage, validateString } from '@/lib/utils';
import ContactFormEmail from '@/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API);

export const sendEmail = async (formData: FormData) => {
  //Get Form Data
  const senderName = formData.get('senderName');
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
  let data;

  try {
    data = await resend.emails.send({
      from: 'Portfolio Contact Form <onboarding@resend.dev>',
      to: 'chris.davis5440@gmail.com',
      subject: 'Message from Portfolio Contact Form',
      reply_to: email as string,
      react: React.createElement(ContactFormEmail, {
        senderName: senderName as string,
        email: email as string,
        message: message as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
