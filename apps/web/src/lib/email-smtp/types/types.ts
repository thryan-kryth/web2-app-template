export interface EmailOptions {
  to: string | string[];
  subject: string;
  body: string;
  bodyFormat: 'html' | 'text' | 'markdown';
  from?: { name: string; email: string };
  replyTo?: string;
  cc?: string[];
  bcc?: string[];
}

export interface EmailResult {
  success: boolean;
  messageId?: string;
  error?: string;
}
