import * as mongoose from 'mongoose';

export const CampSchema = new mongoose.Schema({
  name: {type: String},
  owner: {type: String},
  settings: {type: Object}
}, {timestamps: true})

export interface Camp {
  name: string,
  owner: string,
  settings: object,
}
