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
        const settings = await this.campModel.findOne({_id: campId}, {_id: 0, userSettings: 1, documentSettings: 1, generalSettings: 1})
        return {...settings.userSettings[userId], ...settings.documentSettings,  ...settings.generalSettings}
    }

    async updateUserSettings(campId: string, obj: object, userId: string){
        const link = 'userSettings.' + userId
        await this.campModel.updateOne({_id: campId}, {$set: {[link]: obj}})
    }

    async updateGeneralSettings(campId: string, obj: object){
        const link = 'generalSettings.'
        await this.campModel.updateOne({_id: campId}, {$set: {[link]: obj}})
    }

    async updateDocumentSettings(campId: string, obj: object){
        const link = 'documentSettings.' + obj['item'] + '.text'
        await this.campModel.updateOne({_id: campId}, {$set: {[link]: obj['newData']}})
    }

    async updateSettingsCamp(campId: string, obj: object, userId: string){
        const link = 'userSettings.' + userId
        await this.campModel.updateOne({_id: campId}, {[link]: obj})
    }

    // async updateSettings(campId: string, obj: object){
    //     await this.campModel.updateOne({_id: campId}, {$set: {settings: obj}})
    // }
}
