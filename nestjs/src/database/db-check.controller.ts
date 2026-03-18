import { Controller, Get } from '@nestjs/common';
import { DbCheckService } from './db-check.service';

@Controller('db-check')
export class DbCheckController {
  constructor(private readonly dbCheckService: DbCheckService) {}

  @Get()
  async getDbCheck(): Promise<{ ok: true; value: string }> {
    return this.dbCheckService.check();
  }
}
