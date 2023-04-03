# pwf-api

# TASK

- Build a RESTful api that services requests for sprocket factory data and sprockets.
- The app should be built using either Python or NodeJS or Typescript.
- For data retention, a database or cache can be used.
- Ideally, use docker/docker-compose for standing up the datastore.
- The code should be on a github repository that should be shared with your engineering contact.

Requirements:

- RESTful Endpoints

  - An endpoint that returns all sprocket factory data
  - An endpoint that returns factory data for a given factory id
  - An endpoint that returns sprockets for a given id
  - An endpoint that will create new sprocket
  - An endpoint that will update sprocket for a given id

- Seed data/examples of the factory and sprocket are in the attached JSON files
- Include a README with instructions on how to stand up the database and application

# INSTRUCTIONS

This is a local environment that seeds a postgres SQL database and starts a NestJS server for accessing to
data from factories and sprockets.

## To run local environment, execute:

```bash
$ docker compose up
```

and wait until the data is seeded. Then you have all the endpoints available.

# Endpoints

- To get all sprockets:

```bash
GET http://localhost:3000/sprockets
```

- To get a Sprocket by id:

```bash
GET http://localhost:3000/sprockets/[id]
```

- To insert a new Sprocket:

```bash
POST http://localhost:3000/sprockets

with body:
{
        "teeth": value,
        "pitch_diameter": value,
        "outside_diameter": value,
        "pitch": value
    },
```

- to Edit or Partially edit a Sprocket:

```bash
PATCH http://localhost:3000/sprockets/[id]

with body:
{
        "teeth": value
    },
```

---

- To get all factories:

```bash
GET http://localhost:3000/factories
```

- To get All factories data:

```bash
GET http://localhost:3000/factories/data
```

- To Get all Data for a specific Factory:

```bash
GET http://localhost:3000/factories/[id]/data
```
