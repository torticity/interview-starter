import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppSetting } from './database/app-setting.entity';
import { DbCheckController } from './database/db-check.controller';
import { DbCheckService } from './database/db-check.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [AppSetting],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([AppSetting]),
  ],
  controllers: [AppController, DbCheckController],
  providers: [AppService, DbCheckService],
})
export class AppModule {}
