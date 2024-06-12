import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersModule } from './orders/orders.module';
import { FixModule } from './fix/fix.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_TOKEN, {connectionName: 'nestreact',}), 
    MongooseModule.forRoot(process.env.MONGO_TOKEN1, {connectionName: 'fxdb',}), 
    OrdersModule, FixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
