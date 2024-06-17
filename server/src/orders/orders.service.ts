import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
// import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Order') private orderModel: Model<Order>) {}

    async createOrder(dto: CreateOrderDto){
        const order = await this.orderModel.create(dto)
        return order
    }

    // async getAllServiceOrders(id: any){
    //     const orders = await this.orderModel.find({campId: id})
    //     return orders
    // }
    async deleteOrder(orderId){
        const orders = await this.orderModel.deleteOne({_id: orderId})
        return orders
    }

    async getAllOrders(campId){
        const orders = await this.orderModel.find({campId: campId})
        return orders
    }

    // async getAllOrders1(){
    //     const orders = await this.orderModel1.find()
    //     console.log(orders.length)
    //     return orders
    // }

    // async deleteOrder(id: any){
    //     await this.orderModel.deleteOne({_id: id})
    // }

    // async updateOrder(id: any, dto: UpdateOrderDto){
    //     return await this.orderModel.findOneAndUpdate({_id: id}, dto, {returnDocument: 'after'})
    // }

}
