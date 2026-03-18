import sqlite3 from 'sqlite3';
import { join } from 'path';

type MessageRow = {
  id: number;
  message: string;
  created_at: string;
};

export class DatabaseService {
  private db: sqlite3.Database;
  private ready: Promise<void>;

  constructor() {
    const dbPath = join(process.cwd(), 'data.db');
    this.db = new sqlite3.Database(dbPath);
    this.ready = this.initialize();
  }

  private initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.db.run(
        `
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        message TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `,
        (err) => {
          if (err) {
            reject(err);
            return;
          }
          resolve();
        },
      );
    });
  }

  public async getMessages(): Promise<MessageRow[]> {
    await this.ready;
    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM messages ORDER BY created_at DESC', (err, rows) => {
        if (err) {
          reject(err);
          return;
        }
        resolve((rows ?? []) as MessageRow[]);
      });
    });
  }

  public async addMessage(message: string): Promise<MessageRow> {
    await this.ready;

    const runResult = await new Promise<sqlite3.RunResult>((resolve, reject) => {
      this.db.run('INSERT INTO messages (message) VALUES (?)', [message], function (err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(this);
      });
    });

    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM messages WHERE id = ?', [runResult.lastID], (err, row) => {
        if (err) {
          reject(err);
          return;
        }

        if (!row) {
          reject(new Error('Failed to retrieve inserted message'));
          return;
        }

        resolve(row as MessageRow);
      });
    });
  }

  public close(): void {
    this.db.close();
  }
}
