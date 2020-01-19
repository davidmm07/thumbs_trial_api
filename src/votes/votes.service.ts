import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { VoteType } from '../dto/create-vote.dto';
import { Vote } from '../interfaces/vote.interface';
import { VoteInput } from './input-votes.input';

@Injectable()
export class VotesService {
  constructor(@InjectModel('Vote') private voteModel: Model<Vote>) {}

  async create(createVoteDto: VoteInput): Promise<VoteType> {
    const createdVote = new this.voteModel(createVoteDto);
    return await createdVote.save();
  }

  async findAll(): Promise<VoteType[]> {
    return await this.voteModel.find().exec();
  }

  async findOne(id: string): Promise<VoteType> {
    return await this.voteModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<VoteType> {
    return await this.voteModel.findByIdAndRemove(id);
  }

  async update(id: string, vote: Vote): Promise<VoteType> {
    return await this.voteModel.findByIdAndUpdate(id, vote, { new: true });
  }
}