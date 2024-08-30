import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()

export class ContactService {
    constructor(private readonly mailerService:MailerService ) {}

    async sendMail(createContactDto:CreateContactDto) {
        const {name,email,message} = createContactDto;

        await this.mailerService.sendMail({
            to: 'workharshthakur2002@gmail.com',
            subject:'Contact Form Submission from portfolio website',
            template:'./contact', // template fill to use
            context:{ // data to be sent to the templete
                name,
                email,
                message
            },
        });
    }
}
