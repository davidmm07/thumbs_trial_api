import { InputType, Field, Int } from "type-graphql";

@InputType("TrialInput")
export class TrialInput {
  @Field(() => String)
  readonly Name: String;
  @Field(() => String)
  readonly ImageUrl: String;
}
