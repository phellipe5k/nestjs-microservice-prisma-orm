import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { MandrilService } from './mail/mandril.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: MandrilService
  }, PrismaService],
})
export class AppModule {}
