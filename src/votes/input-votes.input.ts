import { InputType, Field, Int } from "type-graphql";
import { type } from "os";
import { TrialType } from "src/dto/create-trial.dto";
import { TrialInput } from "src/trial/input-trial.input";

@InputType()
export class VoteInput {
  @Field(() => Int)
  readonly thumbsup: Number;
  @Field(() => Int)
  readonly thumbsdown: Number;
  @Field(() => String)
  readonly trial: String;
}
