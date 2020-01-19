import { Document } from 'mongoose';

export interface Trial extends Document {
 readonly Name: String,
 readonly ImageUrl: String
}