import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact') // end-point

export class ContactController {
    constructor(private readonly contactService:ContactService) {}

    @Post()
    async submitContactForm(@Body() createContactDto:CreateContactDto) {
        await this.contactService.sendMail(createContactDto);
        return {message: 'Contact form submitted sucessfully'};
    }
}