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
    @Put('/updateusersettings/:campId')
    updateUserSettings(@Param('campId') campId: string, @Body() obj: object, @Request() req: any){
        return this.campsService.updateUserSettings(campId, obj, req.user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updatedocumentsettings/:campId')
    updateDocumentSettings(@Param('campId') campId: string, @Body() obj: object){
        console.log('updatedocumentsettings', obj)
        return this.campsService.updateDocumentSettings(campId, obj)
    }

    @UseGuards(JwtAuthGuard)
    @Put('/updategeneralsettings/:campId')
    updateGeneralSettings(@Param('campId') campId: string, @Body() obj: object){
        console.log('updategeneralsettings', obj)
        return this.campsService.updateGeneralSettings(campId, obj)
    }
}
