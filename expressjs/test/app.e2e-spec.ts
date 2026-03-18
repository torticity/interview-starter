import request from 'supertest';
import { createApp } from '../src/app';

describe('AppController', () => {
  const app = createApp();

  it('GET / should return hello world message', async () => {
    const res = await request(app).get('/');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'Hello world',
      messages: [],
    });
  });
});
