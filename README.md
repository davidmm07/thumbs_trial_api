# :thumbsup: thumbs_trial_api 


The API thumbs_trial_api, generated with NestJs, supports manipulation data (CRUD) stored in a  MongoDB, this API run migrations automatically.

* Integration with CI

## How to run

### :pick: Previous Requirements
* Docker
* Docker Compose 


#### Run with docker :whale:

1. Clone the repo
```sh
git clone  https://github.com/davidmm07/thumbs_trial_api
```

2. Move to the repository file
```sh
cd thumbs_trial_api
```


3. Create **back_end** network to container
```sh
docker network create back_end
```

4. Run container with :
```sh
docker-compose up --build
```

6. Verify that the containers are running
```sh
docker ps 
```

## Running end-to-end tests

Run `npx npm run test:e2e` to execute the end-to-end tests via [Jest](https://jestjs.io/).

