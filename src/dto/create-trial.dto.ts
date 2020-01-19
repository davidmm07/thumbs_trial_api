import { ObjectType, Field, Int, ID, Float, InputType } from "type-graphql";

import { IsString, IsNotEmpty, IsNumber, IsDecimal } from "class-validator";

@ObjectType()
export class TrialType {
  @Field(() => ID)
  readonly id?: string;
  @Field(() => String)
  @IsString()
  readonly Name: String;
  @Field(() => String)
  @IsString()
  readonly ImageUrl: String;
}

export class TrialRO {
  id?: string;
  Name: String;
  ImageUrl: String;
}
