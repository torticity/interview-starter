import { Repository } from 'typeorm';
import { AppSetting } from './app-setting.entity';
export declare class DbCheckService {
    private readonly appSettingsRepository;
    constructor(appSettingsRepository: Repository<AppSetting>);
    check(): Promise<{
        ok: true;
        value: string;
    }>;
}
