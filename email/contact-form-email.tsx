import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  senderName: string;
  email: string;
  message: string;
};

const ContactFormEmail = ({
  message,
  email,
  senderName,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site!</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white border border-black/10 my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>
                You recieved the following message from{' '}
                <span className='text-blue-500'>{senderName}</span>
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender&apos;s email is {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
