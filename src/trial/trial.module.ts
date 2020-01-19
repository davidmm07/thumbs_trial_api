import { Module } from '@nestjs/common';
import { TrialService } from "./trial.service";
import { TrialResolver } from "./trial.resolver";
import { TrialSchema } from "./trial.schema";
import { MongooseModule } from "@nestjs/mongoose";


@Module({
  imports: [MongooseModule.forFeature([{ name: "Trial", schema: TrialSchema }])],
  providers: [TrialService, TrialResolver],
  exports:[TrialService]
})
export class TrialModule {}


