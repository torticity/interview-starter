import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppSetting } from './app-setting.entity';

@Injectable()
export class DbCheckService {
  constructor(
    @InjectRepository(AppSetting)
    private readonly appSettingsRepository: Repository<AppSetting>,
  ) {}

  async check(): Promise<{ ok: true; value: string }> {
    const key = 'db-check-last-run';
    const value = new Date().toISOString();

    await this.appSettingsRepository.upsert({ key, value }, ['key']);
    const updated = await this.appSettingsRepository.findOneByOrFail({ key });

    return { ok: true, value: updated.value };
  }
}
