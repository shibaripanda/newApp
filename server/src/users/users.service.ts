import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private userModelNestreact: Model<User>) {}



    async getUserByEmail(email: string){
        const user = await this.userModelNestreact.findOne({email: email})
        return user
    }

    async updateUser(id: any, dto){
        await this.userModelNestreact.updateOne({_id: id}, dto)
    }

}
