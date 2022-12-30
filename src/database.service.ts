import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class DatabaseService {
  private client: Client;

  constructor() {
    this.client = new Client({
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: '191318',
      database: 'supplynote',
    });
    this.client.connect();
  }

  async query(text: string, params?: any[]) {
    const result = await this.client.query(text, params);
    return result;
  }
}
