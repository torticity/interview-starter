import express, { Application } from 'express';
import { AppController } from './app.controller';
import { DatabaseService } from './database.service';

export function createApp(): Application {
  const app = express();
  const dbService = new DatabaseService();
  const appController = new AppController(dbService);

  app.use(express.json());

  app.get('/', (req, res) => appController.getHello(req, res));
  app.post('/messages', (req, res) => appController.addMessage(req, res));

  return app;
}
