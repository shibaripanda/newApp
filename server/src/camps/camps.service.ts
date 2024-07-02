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

    async getUsersCamps(email){
        const camps = await this.campModel.find({users: {$elemMatch: {email: email}}}, {_id: 1, name: 1})
        return camps
    }

    async searchNewUser(email){
        const camps = await this.campModel.find({users: {$elemMatch: {email: email}}})
        return camps
    }

    async getSettingsCamp(campId: string, userId: string){
        const settings = (await this.campModel.findOne({_id: campId}, {_id: 0, settings: 1})).settings
        return settings[userId]
    }

    async updateSettingsCamp(campId: string, obj: object, userId: string){
        const link = 'settings.' + userId
        await this.campModel.updateOne({_id: campId}, {$set: {[link]: obj}})
    }

    // async updateSettings(campId: string, obj: object){
    //     await this.campModel.updateOne({_id: campId}, {$set: {settings: obj}})
    // }
}
