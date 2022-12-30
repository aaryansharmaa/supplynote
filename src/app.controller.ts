import { Controller, Get } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller()
export class AppController {
  constructor(private readonly databaseService: DatabaseService) {}


  @Get()
  async getHello(): Promise<any> {
    const result = await this.databaseService.query('SELECT * FROM users');
    return result;
  }
}
