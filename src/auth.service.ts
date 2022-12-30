import { Injectable } from '@nestjs/common';
import { Client } from 'pg';

@Injectable()
export class AuthService {
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

  async login(username: string, password: string) {
    const result = await this.client.query(
      'SELECT * FROM users WHERE username = $1 AND password = $2',
      [username, password],
    );
    return result.rowCount > 0;
  }
}
