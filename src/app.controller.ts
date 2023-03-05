import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly MailService: MailService, private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    let list = await this.prisma.notification.findMany()
    console.log('Database: ', list)
    return list;
    // return this.MailService.sendMail();
  }

  @Post()
  async create(@Body() body: any) {
    console.log(body)
    const { content, category, recipientId } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recipientId: recipientId
      }
    })
  }
}
