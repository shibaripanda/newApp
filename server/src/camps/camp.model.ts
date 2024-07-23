import * as mongoose from 'mongoose';

export const CampSchema = new mongoose.Schema({
  name: {type: String},
  owner: {type: String},
  settings: {type: Object},
  campSettings: {type: Object},
  users: {type: []},
}, {timestamps: true})

export interface Camp {
  name: string,
  owner: string,
  settings: object,
  users: [],
  campSettings: object,
}
