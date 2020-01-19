import { Module } from "@nestjs/common";
import { VotesService } from "./votes.service";
import { VotesResolver } from "./votes.resolver";
import { VoteHelper } from "../helpers/vote.helper";
import { VoteSchema } from "./vote.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { TrialModule } from "src/trial/trial.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Vote", schema: VoteSchema }]), TrialModule],
  providers: [VotesService, VotesResolver, VoteHelper]
})
export class VotesModule {}
