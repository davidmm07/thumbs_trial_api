import { Document } from 'mongoose';

export interface Vote extends Document {
 readonly thumbsup: Number,
 readonly thumbsdown: Number,
 readonly trial: String
}