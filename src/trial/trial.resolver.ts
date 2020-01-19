import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TrialService } from './trial.service';
import { TrialType } from '../dto/create-trial.dto';
import { TrialInput } from './input-trial.input';


@Resolver('Trial')
export class TrialResolver {
  constructor(private readonly trialService: TrialService) {}

  @Query(() => [TrialType])
  async trials(): Promise<TrialType[]> {
    return this.trialService.findAll();
  }

  @Mutation(() => TrialType)
  async createTrial(@Args('input') input: TrialInput): Promise<TrialType> {
    return this.trialService.create(input);
  }

  @Mutation(() => TrialType)
  async updateTrial(
    @Args('id') id: string,
    @Args('input') input: TrialInput,
  ): Promise<TrialType> {
    return this.trialService.update(id, input);
  }

  @Mutation(() => TrialType)
  async deleteTrial(@Args('id') id: string): Promise<TrialType> {
    return this.trialService.delete(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}