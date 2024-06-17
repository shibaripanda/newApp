import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  client: {type: String},
  contact: {type: String},
  clientAdress: {type: String},
  title: {type: String},
  firm: {type: String},
  problem: {type: String},
  model: {type: String},
  sn: {type: String},
  look: {type: String},
  speed: {type: String},
  info: {type: String},
  cost: {type: String},
  orderId: {type: String},
  dateOut: {type: String},
  status: {type: String},
  manager: {type: String},
  masters: {type: String, default: '--'},
  date: {type: Number},
  campId: {type: String},
  history: {type: Array}
}, {timestamps: true})

export interface Order {
  orderId: string,
  date: number,
  title: string;
  sn: string;
  model: string;
  history: [];
}
