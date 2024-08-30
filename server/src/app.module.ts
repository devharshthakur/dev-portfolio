import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerModule } from "@nestjs-modules/mailer";
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ContactModule } from './contact/contact.module';
import { userInfo } from 'os';
import { from } from 'rxjs';
import { strict } from 'assert';


@Module({
  imports: [ContactModule, MailerModule.forRoot({
    transport: {
      host: 'smtp.gmail.com',
      port:587,
      secure:false,
      auth: {
        user: 'workharshthakur2002@gmail.com',
        password:'9hGwtufvQNDD$5C2h%Uy'
      },
    },
    defaults: {
      from: '"No Reply" <no-reply@example.com>'
    },
    template: {
      dir: join(__dirname,'templates'),
      adapter: new HandlebarsAdapter(),
      options: {
        strict:true,
      },
    },
  })],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
