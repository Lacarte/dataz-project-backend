import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCrudModule } from './basic-crud/basic-crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//TODO to add mysql cconnection configuration in ormconfig.json
@Module({
  imports: [
    BasicCrudModule,
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
