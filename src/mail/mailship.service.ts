import { MailService } from "./mail.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailShipService implements MailService {
    constructor() {}
    sendMail(): string {
        return 'Mailship service!!';
    }
}