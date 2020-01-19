  
import * as mongoose from 'mongoose';

export const VoteSchema = new mongoose.Schema({
    thumbsup: Number,
    thumbsdown: Number,
    trial: String
});