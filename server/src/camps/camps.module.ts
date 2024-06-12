import { Module } from '@nestjs/common';
import { CampsService } from './camps.service';
import { CampsController } from './camps.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CampSchema } from './camp.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Camp', schema: CampSchema }])
  ],
  providers: [CampsService],
  controllers: [CampsController],
  exports: [CampsService]
})
export class CampsModule {}
