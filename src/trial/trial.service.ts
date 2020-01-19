import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrialType } from '../dto/create-trial.dto';
import { Trial } from '../interfaces/trial.interface';

@Injectable()
export class TrialService {
  constructor(@InjectModel('Trial') private trialModel: Model<Trial>) {}

  async create(createTrialDto: TrialType): Promise<TrialType> {
    const createdTrial = new this.trialModel(createTrialDto);
    return await createdTrial.save();
  }

  async findAll(): Promise<TrialType[]> {
    return await this.trialModel.find().exec();
  }

  async findOne(id: string): Promise<TrialType> {
    return await this.trialModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<TrialType> {
    return await this.trialModel.findByIdAndRemove(id);
  }

  async update(id: string, trial: Trial): Promise<TrialType> {
    return await this.trialModel.findByIdAndUpdate(id, trial, { new: true });
  }
}