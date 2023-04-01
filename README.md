# pwf-api

# TASK

• Build a RESTful api that services requests for sprocket factory data and sprockets.
• The app should be built using either Python or NodeJS or Typescript.
• For data retention, a database or cache can be used.
• Ideally, use docker/docker-compose for standing up the datastore.
• The code should be on a github repository that should be shared with your engineering contact.

Requirements:
• RESTful Endpoints
o An endpoint that returns all sprocket factory data
o An endpoint that returns factory data for a given factory id
o An endpoint that returns sprockets for a given id
o An endpoint that will create new sprocket
o An endpoint that will update sprocket for a given id

- Seed data/examples of the factory and sprocket are in the attached JSON files
- Include a README with instructions on how to stand up the database and application

# INSTRUCTIONS

## To run local environment, execute:

```bash
$ docker compose up
```

## To execute api server, execute:

- Inside pwf-api directory:

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

The container will be started, with a postgres database, a pgAadmin container running on localhost:5050 and the nestJS api running on localhost:3000.

```

```
