import { MailService } from "./mail.service";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MandrilService implements MailService {
    constructor() {}
    sendMail(): string {
        return 'Mandril service!!';
    }
}