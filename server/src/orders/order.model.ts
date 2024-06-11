import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  title: {type: String},
  sn: {type: String},
  model: {type: String},
  ade: {type: String},
}, {timestamps: true})

export interface Order {
  title: string;
  sn: string;
  model: string;
}
