import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Camp } from './camp.model';
import { Model } from 'mongoose';

@Injectable()
export class CampsService {

    constructor(
        @InjectModel('Camp') private campModel: Model<Camp>) {}

    async createCamp(dto: any){
        const order = await this.campModel.create(dto)
        return order
    }

    async getCampsByOwnerEmail(dto: any){
        const camps = await this.campModel.find(dto)
        return camps.map(item => item._id)
    }
}
