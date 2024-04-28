import { Injectable, Logger } from '@nestjs/common';
import { promisify } from 'util';
import { readFile } from 'fs';
import { render } from 'mustache';

const readFileAsync = promisify(readFile);

@Injectable()
export class EmailUtils {
  private template: string;
  private readonly logger = new Logger(EmailUtils.name);

  constructor() {
    this.loadTemplate();
  }

  private async loadTemplate(): Promise<void> {
    try {
      this.template = await readFileAsync(
        'src/modules/email/templates/order-confirmed.html',
        'utf8',
      );
      this.logger.debug('Template loaded successfully.');
    } catch (error) {
      this.logger.error(`Error loading template: ${error.message}`);
      throw new Error('Unable to load email template.');
    }
  }

  async createEmail(from: string, to: string, message: string): Promise<any> {
    if (!this.template) {
      throw new Error('The template was not loaded correctly.');
    }

    const html = render(this.template, {
      message,
      emailRemetente: from,
    });

    return {
      from,
      to,
      subject: 'Newsletter Subscription Confirmation | Furniro',
      text: `${message} | Sent by ${from}`,
      html,
    };
  }
}
