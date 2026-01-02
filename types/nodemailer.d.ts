declare module 'nodemailer' {
  export interface TransportOptions {
    service?: string;
    host?: string;
    port?: number;
    secure?: boolean;
    auth?: {
      user: string;
      pass: string;
    };
  }

  export interface MailOptions {
    from?: string;
    to: string | string[];
    subject: string;
    html?: string;
    text?: string;
    replyTo?: string;
  }

  export interface SentMessageInfo {
    messageId: string;
    response: string;
    accepted?: string[];
    rejected?: string[];
  }

  export interface Transporter {
    sendMail(mailOptions: MailOptions): Promise<SentMessageInfo>;
  }

  export function createTransport(options: TransportOptions): Transporter;
  
  export default nodemailer;
  
  const nodemailer: {
    createTransport(options: TransportOptions): Transporter;
  };
}

