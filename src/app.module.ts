import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";

import { MongooseModule } from "@nestjs/mongoose";
import { VotesModule } from "./votes/votes.module";
import { UserModule } from './user/user.module';
import { TrialModule } from './trial/trial.module';
import {ENV } from './db/config'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql"
    }),
    //MongooseModule.forRoot("mongodb://localhost/nestgraphql")],
    MongooseModule.forRoot("mongodb://"+`${ENV.HOST}`+":"+`${ENV.PORT}`+"/"+`${ENV.DATABASE}`, {
      auth: { user: `${ENV.USER}`, password: `${ENV.PASS}` },
      authSource: `${ENV.AUTHSOURCE}`
    }),
    VotesModule,
    UserModule,
    TrialModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
