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

    async getCampsByOwnerEmail(user: any){
        const camps = await this.campModel.find({users: {$elemMatch: {email: user.email}}})
        return camps.map(item => item._id)
    }

    async getUsersCamps(email){
        const camps = await this.campModel.find({users: {$elemMatch: {email: email}}}, {_id: 1, name: 1, users: 1})
        const res = []
        for(let i of camps){
            res.push({_id: i._id, name: i.name, role: i.users.find(item => item['email'] === email)['role']})
        }
        return res
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
        const link = 'userSettings.' + userId + '.' + obj['item']
        
        await this.campModel.updateOne({_id: campId}, {[link]: obj['newData']})
        
    }

    async updateDocumentSettings(campId: string, obj: object){
        const link = 'documentSettings.documents.' + obj['item'] + '.text'
        await this.campModel.updateOne({_id: campId}, {[link]: obj['newData']})
    }

    async updateGeneralSettings(campId: string, obj: object){
        const link = 'generalSettings.'
        await this.campModel.updateOne({_id: campId}, {$set: {[link]: obj}})
    }

    async updateSettingsCamp(campId: string, obj: object, userId: string){
        const link = 'userSettings.' + userId
        await this.campModel.updateOne({_id: campId}, {[link]: obj})
    }

    async addNewUserToCamp(campId: string, obj: object){
        await this.campModel.updateOne({_id: campId}, {$addToSet: {users: obj}})
    }

    async getUsersOfCamp(campId: string){
        return (await this.campModel.findOne({_id: campId}, {users: 1, _id: 0})).users
    }

    async deleteUserFromCamp(campId: string, obj: object){
        await this.campModel.updateOne({_id: campId}, {$pull: {users: obj}})
    }

    async editUserRole(campId: string, obj: object){
        await this.campModel.updateOne({_id: campId}, {})
    }

    // async updateSettings(campId: string, obj: object){
    //     await this.campModel.updateOne({_id: campId}, {$set: {settings: obj}})
    // }
}
