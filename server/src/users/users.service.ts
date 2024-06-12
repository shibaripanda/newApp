import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private userModelNestreact: Model<User>) {}

    async createUser(dto: CreateUserDto){
        const user = await this.userModelNestreact.create(dto)
        return user
    }

    async getUserByEmail(email: string){
        const user = await this.userModelNestreact.findOne({email: email})
        return user
    }

    async updateUser(id: any, dto: any){
        await this.userModelNestreact.updateOne({_id: id}, dto)
    }

}
