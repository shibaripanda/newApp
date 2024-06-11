import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.model';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {

    constructor(
        @InjectModel('Order', 'fxdb') private orderModel: Model<Order>, 
        @InjectModel('Order', 'nestreact') private orderModel1: Model<Order>) {}

    // async createOrder(dto: CreateOrderDto){
    //     const order = await this.orderModel.create(dto)
    //     return order
    // }

    // async getAllServiceOrders(id: any){
    //     const orders = await this.orderModel.find({campId: id})
    //     return orders
    // }

    async getAllOrders(){
        const date = {
            // name: {type: String},
            // addres: {type: String},
            // clientTel: {type: String},
            // order: {type: String},
            // view: {type: String},
            client: {type: String},
            clientAdress: {type: String},
            contact: {type: String},
            orderId: {type: String},
            look: {type: String},


        }
        OrderSchema.add({
          ...date
        })
        const orders = await this.orderModel1.find()
        console.log(orders.length)
        // const orders1 = await this.orderModel1.find()
        // const orders2 = await this.orderModel1.updateMany({}, { $rename :{"name":"client", "addres":"clientAdress", "clientTel":"contact", "order":"orderId", "view":"look"}})
        // console.log(orders2)
        // console.log(orders.length)
        // console.log(orders1)
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
