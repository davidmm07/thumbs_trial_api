import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { VotesService } from "./votes.service";
import { VoteHelper } from "../helpers/vote.helper";
import { TrialService } from "../trial/trial.service";
import { VoteType } from "../dto/create-vote.dto";
import { VoteInput } from "./input-votes.input";

@Resolver()
export class VotesResolver {
  constructor(
    private readonly votesService: VotesService,
    private votesHelper: VoteHelper,
    private trialService: TrialService
  ) {}

  @Query(() => [VoteType])
  async votes(): Promise<VoteType[]> {
    let votesComp = this.votesService.findAll();
    const response = Promise.resolve(
      (await votesComp).map(async element => {
        element.trialinfo = await this.trialService
          .findOne(element.trial)
          .then(res => {
            return res;
          });
        element.amount =
          element.thumbsup.valueOf() + element.thumbsdown.valueOf();
        element.uppercent = this.votesHelper.getPercentage(
          element.thumbsup,
          element.amount
        );
        element.downpercent = this.votesHelper.getPercentage(
          element.thumbsdown,
          element.amount
        );
        return element;
      })
    );

    return await response.then();
  }

  @Mutation(() => VoteType)
  async createVote(@Args("input") input: VoteInput): Promise<VoteInput> {
    return this.votesService.create(input);
  }

  @Mutation(() => VoteType)
  async updateVote(
    @Args("id") id: string,
    @Args("input") input: VoteInput
  ): Promise<VoteInput> {
    return this.votesService.update(id, input);
  }

  @Mutation(() => VoteType)
  async deleteVote(@Args("id") id: string): Promise<VoteInput> {
    return this.votesService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return "hello";
  }
}
