import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { VotesModule } from '../src/votes/votes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { Vote } from '../src/interfaces/vote.interface';

describe('VotesController (e2e)', () => {
  let app;
beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        VotesModule,
        MongooseModule.forRoot('mongodb://localhost:27013/e2etest', {
          auth: { user: "test", password: "test" },
          authSource: "admin"
        }),
        GraphQLModule.forRoot({
          autoSchemaFile: 'schema.gql',
        }),
      ],
    }).compile();
app = moduleFixture.createNestApplication();
    await app.init();
  });
afterAll(async () => {
    await app.close();
  });

  const vote: Vote = {
    thumbsup: 2,
    thumbsdown: 10,
    trial: "5dghsadjas878800a"
  };

  let id: string = '';

  const updatedVote: Vote = {
    thumbsup: 3,
    thumbsdown: 10,
    trial: "erjsahdy567654567"
  };
  const createvoteObject = JSON.stringify(vote).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );  
  const createVoteQuery = `
  mutation {
    createVote(input: ${createvoteObject}) {
       thumbsup
       thumbsdown
       trial
       id
    }
  }`;

  it('createVote', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: createVoteQuery,
      })
      .expect(({ body }) => {
        const data = body.data.createVote;
        id = data.id;
        expect(data.thumbsup).toBe(vote.thumbsup);
        expect(data.thumbsdown).toBe(vote.thumbsdown);
        expect(data.trial).toBe(vote.trial);
      })
      .expect(200);
  });
  it('getVotes', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: '{votes{thumbsup, thumbsdown, trial, uppercent, downpercent, amount}}',
      })
      .expect(({ body }) => {
        const data = body.data.votes;
        const voteResult = data[0];
        expect(data.length).toBeGreaterThan(0);
        expect(voteResult.thumbsup).toBe(vote.thumbsup);
        expect(voteResult.thumbsdown).toBe(vote.thumbsdown);
        expect(voteResult.trial).toBe(vote.trial);
        expect(voteResult.uppercent + voteResult.downpercent).toBe(100);
      })
      .expect(200);
  });
  const updateVoteObject = JSON.stringify(updatedVote).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  it('updateVote', () => {
    const updateVoteQuery = `
    mutation {
      updateVote(id: "${id}", input: ${updateVoteObject}) {
        thumbsup
        thumbsdown
        trial
        id
      }
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: updateVoteQuery,
      })
      .expect(({ body }) => {
        const data = body.data.updateVote;
        expect(data.thumbsup).toBe(updatedVote.thumbsup);
        expect(data.thumbsdown).toBe(updatedVote.thumbsdown);
        expect(data.trial).toBe(updatedVote.trial);
      })
      .expect(200);
  });

  it('deleteVote', () => {
    const deleteVoteQuery = `
      mutation {
        deleteVote(id: "${id}") {
          thumbsup
          thumbsdown
          trial
        }
      }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: deleteVoteQuery,
      })
      .expect(({ body }) => {
        const data = body.data.deleteVote;
        expect(data.thumbsup).toBe(updatedVote.thumbsup);
        expect(data.trial).toBe(updatedVote.trial);
        expect(data.thumbsdown).toBe(updatedVote.thumbsdown);
      })
      .expect(200);
  });    
});