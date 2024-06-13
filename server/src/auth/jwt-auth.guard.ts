import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(private jwtService: JwtService){

    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        // const [userTokenInfo] = user
        try{
            const authHeader = req.headers.authorization
            const bearer = authHeader.split(' ')[0]
            const token = authHeader.split(' ')[1]

            if(bearer !== 'Bearer' || !token){
                throw new UnauthorizedException({message: 'Нет авторизации'})
            }
            // console.log(token)
            const user = this.jwtService.verify(token)
            // console.log(user)
            req.user = user
            // console.log('req ', req.user)
            req["xxx"] = user
            // console.log(userTokenInfo)
            return true

        }
        catch(e){
            console.log('не пройдено')
            throw new UnauthorizedException({message: 'Нет авторизации'})
        }
    }

}