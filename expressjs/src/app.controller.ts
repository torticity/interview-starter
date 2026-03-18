import { Request, Response } from 'express';
import { DatabaseService } from './database.service';

export class AppController {
  private dbService: DatabaseService;

  constructor(dbService: DatabaseService) {
    this.dbService = dbService;
  }

  public async getHello(req: Request, res: Response): Promise<void> {
    try {
      const messages = await this.dbService.getMessages();
      res.json({
        message: 'Hello world',
        messages,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async addMessage(req: Request, res: Response): Promise<void> {
    const { message } = req.body;
    if (!message) {
      res.status(400).json({ error: 'Message is required' });
      return;
    }
    try {
      const newMessage = await this.dbService.addMessage(message);
      res.status(201).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
