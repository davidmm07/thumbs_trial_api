  
import * as mongoose from 'mongoose';

export const TrialSchema = new mongoose.Schema({
    Name: String,
    ImageUrl: String
});