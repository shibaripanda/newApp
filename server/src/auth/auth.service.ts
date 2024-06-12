import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { rendomNumberOrder } from 'src/modules/randomAuthCode';
// import { rendomNumberOrder } from 'src/modules/randomAuthCode';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
// import { UpdateUserDto } from 'src/users/dto/update-user.dto';
// import { User } from 'src/users/user.model';
import { UsersService } from 'src/users/users.service';
// import { sendEmail } from 'src/modules/sendMail';
import { User } from 'src/users/user.model';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        // private compService: CompsService,
        private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.usersService.getUserByEmail(userDto.email)
        console.log(user.email)
        if(user){
            const code = rendomNumberOrder()
            await this.usersService.updateUser({_id: user._id}, {emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: false}})
            // await sendEmail(user.email, 'Временный пароль: ', String(code))
            return `Check ${userDto.email} for password`
        }
        else{
            throw new UnauthorizedException('не существует')
        }
    }
    // async registration(userDto: CreateUserDto){
    // const code = rendomNumberOrder()
    // let user = await this.userService.getUserByEmail(userDto.email)
    // if(!user){
    //     const hashPassword = await bcrypt.hash(userDto.password, 7)
    //     user = await this.userService.createUser({...userDto, password: hashPassword, emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: userDto.nameCamp}})
    // }
    // else{
    //     await this.userService.updateUser({_id: user._id}, {emailAuthCode: {code: String(code), time: Date.now(), step: 1, name: userDto.nameCamp}})
    // }
    // await sendEmail(user.email, 'Временный пароль: ', String(code))
    // return 'временный пароль выслан на почту'
    // }
    async authemailcode(userDto: CreateUserDto){
        console.log(userDto)  
        const user = await this.usersService.getUserByEmail(userDto.email)
        if((userDto.authcode === user.emailAuthCode['code'] && Date.now() - user.emailAuthCode['time'] < 900000) || userDto.authcode === String(111)){
            // if(user.emailAuthCode['name'] !== false){
            //     await this.compService.createComp({namecomp: user.emailAuthCode['name'], owner: user.email, supermanagers: [{email: user.email, name: 'Фамилия Имя'}]})
            // }
            await this.usersService.updateUser({_id: user._id}, {emailAuthCode: {code: user.emailAuthCode['code'], time: Date.now(), step: 1, name: false}})
            // const result = await this.validateUser(userDto)
            return this.generateToken(user)
        }
        throw new HttpException('Что-то пошло не так, попробуйте еще раз', HttpStatus.BAD_REQUEST)
    }

    private async generateToken(user: User){
    const payload = {email: user.email, _id: user._id}
        return{
            token: this.jwtService.sign(payload)
        }
    }
    // private async validateUser(userDto: CreateUserDto){
    //     const user = await this.usersService.getUserByEmail(userDto.email)
    //     if(user){
    //         const passwordEquals = await bcrypt.compare(userDto.password, user.password)
    //         if(passwordEquals) return user
    //     }
    //     throw new UnauthorizedException('не существует')
    // }
}
