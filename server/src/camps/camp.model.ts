import * as mongoose from 'mongoose';

export const CampSchema = new mongoose.Schema({
  name: {type: String},
  owner: {type: String},
}, {timestamps: true})

export interface Camp {
  name: string,
  owner: string,
}
