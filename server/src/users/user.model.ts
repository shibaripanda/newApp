import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  email: {type: String},
  password: {type: String},
  name: {type: String},
  emailAuthCode: {type: Object}
}, {timestamps: true})

export interface User {
  email: string,
  password: number,
  name: string,
  emailAuthCode: object,
  role: string,
  _id: any
}
