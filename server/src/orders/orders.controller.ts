import { Controller, Post, Body, Get, UseGuards, Param, Request } from '@nestjs/common';
import { CreateOrderDto } from '../orders/dto/create-order.dto';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
// import { UpdateOrderDto } from './dto/update-order.dto';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('/api/orders')
export class OrdersController {

    constructor(private ordersService: OrdersService){}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() orderDto: CreateOrderDto){
        return this.ordersService.createOrder(orderDto)
    }

    @UseGuards(JwtAuthGuard)
    @Get(':campId')
    getAllOrders(@Param('campId') campId: string, @Request() req: any){
        console.log(req.user.campId)
        console.log(campId)
        if(req.user.campId.includes(campId)){
            return this.ordersService.getAllOrders(campId)
        }
        return []
    }

    // @UseGuards(JwtAuthGuard)
    // @Get('service/:id')
    // getAllServiceOrders(@Param('id') id: string){
    //     return this.ordersService.getAllServiceOrders(id)
    // }

    // @UseGuards(JwtAuthGuard)
    // @Delete(':id')
    // delOne(@Param('id') id: string){
    //     return this.ordersService.deleteOrder(id)
    // }

    // @UseGuards(JwtAuthGuard)
    // @Put(':id')
    // update(@Param('id') id: string,
    //        @Body() updateOrderDto: UpdateOrderDto){
    //     return this.ordersService.updateOrder(id, updateOrderDto)
    // }
}
