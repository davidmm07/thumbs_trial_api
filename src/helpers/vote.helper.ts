import { Injectable } from '@nestjs/common';

@Injectable()
export class VoteHelper {
  constructor() {}

   getPercentage(partial: Number, total:Number): Number {
    const percentage  = (partial.valueOf() * 100 / total.valueOf()).toPrecision(3);
    return parseFloat(percentage);
  }
}