'use server';

import { Resend } from 'resend';
import { createSafeActionClient } from 'next-safe-action';

import ContactRequestEmailTemplate from '^/components/emailTemplates/ContactRequestEmailTemplate';
import { contactRequestFormSchema, ContactRequestFormSchema } from '^/schemas/contactRequestFormSchema';
import Status from '^/enums/Status';
import texts from '^/configs/texts';
import EmailTemplate from '^/enums/EmailTemplate';

const action = createSafeActionClient();

const resend = new Resend(process.env.RESEND_API_KEY);
const emailFrom = process.env.EMAIL_FROM || '';
const emailTo = process.env.EMAIL_TO || '';

type Response = {
  status: Status;
  message: string;
};

const sendContactRequestEmail = action(
  contactRequestFormSchema,
  async (data: ContactRequestFormSchema): Promise<Response> => {
    try {
      const { error } = await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        subject: texts.email[EmailTemplate.ContactRequest].subject,
        react: ContactRequestEmailTemplate({
          data,
        }),
      });

      if (error) {
        console.error('Failed sending email', error);

        return ({
          status: Status.Failure,
          message: texts.email[EmailTemplate.ContactRequest].processingStatus[Status.Failure],
        });
      }

      return ({
        status: Status.Success,
        message: texts.email[EmailTemplate.ContactRequest].processingStatus[Status.Success],
      });
    } catch (error) {
      console.error('Failed sending email', error);

      return ({
        status: Status.Failure,
        message: texts.email[EmailTemplate.ContactRequest].processingStatus[Status.Failure],
      });
    }
  },
);

export default sendContactRequestEmail;
