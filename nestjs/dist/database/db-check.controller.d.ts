import { DbCheckService } from './db-check.service';
export declare class DbCheckController {
    private readonly dbCheckService;
    constructor(dbCheckService: DbCheckService);
    getDbCheck(): Promise<{
        ok: true;
        value: string;
    }>;
}
