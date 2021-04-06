import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [DatabaseModule, ConfigModule, TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
