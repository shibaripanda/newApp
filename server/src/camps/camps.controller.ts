import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { CampsService } from './camps.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api')
export class CampsController {

    constructor(private campsService: CampsService){}

    // @UseGuards(JwtAuthGuard)
    // @Post()
    // create(@Body() orderDto: CreateOrderDto){
    //     return this.ordersService.createOrder(orderDto)
    // }

    @UseGuards(JwtAuthGuard)
    @Get('/getmycamps')
    getUsersCamps(@Request() req: any){
        return this.campsService.getUsersCamps({owner: req.user.email})
    }
}
