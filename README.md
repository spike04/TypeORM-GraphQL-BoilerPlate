# TypeORM-GraphQL-BoilerPlate

This project Repository is the boilerplate code for Graphql Project Created using [Graphql-yoga]() and [TypeORM]() for the Youtube Series By [Ben Awad]()

Project Generated Using the Following Command:
```
typeorm init --name <name> --database <database>
```

More Info: 

***Here I used Postgresql as database***

# Requrements:
- PostGresql Installed
- [NodeJS](https://nodejs.org/en/)
- [Git](https://git-scm.com)

## Dependencies: 
- [graphql-import](https://www.npmjs.com/package/graphql-import) - Separating TypeDefs
- [graphql-request](https://www.npmjs.com/package/graphql-request) - Sending GraphQL request During Testing
- [graphql-yoga](https://www.npmjs.com/package/graphql-yoga) - Graphql Server
- [pg](https://www.npmjs.com/package/pg)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) - From TypeORM
- [typeorm](https://www.npmjs.com/package/typeorm)
- [uuid](https://www.npmjs.com/package/uuid) - For Generating id
- [bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## Dev-Dependencies: 
- [@types/node ](https://www.npmjs.com/package/@types/node)
- [@types/uuid](https://www.npmjs.com/package/@types/uuid)
- [@types/bcryptjs](https://www.npmjs.com/package/@types/bcryptjs)
- [gql2ts](https://www.npmjs.com/package/gql2ts)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [tslint](https://www.npmjs.com/package/tslint)
- [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
- [typescript](https://www.npmjs.com/package/typescript)
- [jest](https://www.npmjs.com/package/jest) - ts-jest not working for me
- [ts-jest](https://www.npmjs.com/package/ts-jest) - For Testing
- [@types/jest](https://www.npmjs.com/package/@types/jest) - For ts-jest

## To Run the Project
- Clone the Project.
- Duplicate ormconfig-sample.json > rename to ormconfig.json > edit ormconfig.json with username, password and database information
- install Dependencies using npm or yarn: ```npm install```
or ```yarn```
- before running project run
```yarn run gst```
to generate schema types used in the project
- finally ```yarn start``` to run project

For Detail Please Follow the [Youtube Video Playlist](https://www.youtube.com/playlist?list=PLN3n1USn4xlky9uj6wOhfsPez7KZOqm2V)

The Repo is Maintained as per the video Parts so Feel Free to clone the repo depending on the video from youtube. Keep Rocking with GrapQL 😎 🤘