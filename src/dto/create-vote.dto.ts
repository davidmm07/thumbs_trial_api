import { ObjectType, Field, Int, ID , Float} from "type-graphql";
import { IsObject, IsString, IsNotEmpty, IsNumber, IsDecimal} from "class-validator";
import { TrialType } from "./create-trial.dto";
import { isObject } from "util";

@ObjectType()
export class VoteType {
  @Field(() => ID)
  readonly id?: string;
  @Field(() => Int)
  @IsNumber()
  readonly thumbsup: Number;
  @Field(() => Int)
  @IsNumber()
  readonly thumbsdown: Number;
  @Field(() => String)
  @IsString()
  readonly trial: string;
  @Field(() => Int)
  @IsNumber()
  amount?: Number;
  @Field(() => Float)
  @IsDecimal()
  uppercent?: Number;
  @Field(() => Float)
  @IsDecimal()
  downpercent?: Number;
  @Field(() => TrialType)
  @IsObject()
  trialinfo?: TrialType;
}
