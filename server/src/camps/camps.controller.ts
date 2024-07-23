import { Controller, Get, UseGuards, Request, Param, Body, Put } from '@nestjs/common';
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
        return this.campsService.getUsersCamps(req.user.email)
    }

    @UseGuards(JwtAuthGuard)
    @Get('/getsettingscamp/:campId')
    getSettingsCamp(@Param('campId') campId: string, @Request() req: any){
        return this.campsService.getSettingsCamp(campId, req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatesettingscamp/:campId')
    updateSettingsCamp(@Param('campId') campId: string, @Body() obj: object, @Request() req: any){
        return this.campsService.updateSettingsCamp(campId, obj, req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatecampsettings/:campId')
    updateCampSettings(@Param('campId') campId: string, @Body() obj: object){
        return this.campsService.updateCampSettings(campId, obj)
    }
}
