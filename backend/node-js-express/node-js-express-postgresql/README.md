# Node Express - PostgreSQL with Javascript Blueprint

This blueprint helps you kickstart your Node.js projects using Express.js and **Javascript** with integrated PostgreSQL
support through Sequelize. Additionally, it includes a `healthz` endpoint, essential for automated deployments on
Warestack.

## Getting Started

- Navigate to the `node-js-express-postgresql` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Ensure you have a PostgreSQL instance running or use your connection string in the `.env` for an external database.
- Use your preferred dependency manager to install dependencies (npm, yarn, pnpm, etc).
- Our recommended one is yarn so the related command is `yarn install`.
- Use `yarn start` to start the server.
- Your API is now connected to a PostgreSQL instance, and you can begin creating models, routes, etc.

## Required environment variables

This blueprint requires the following environment variables:

- `PORT` = The port that the node server will be exposed.
- `POSTGRES_HOST` = The host that features the related PostgreSQL instance.
- `POSTGRES_DB` = The name of the PostgreSQL database that the Node instance should connect to.
- `POSTGRES_USER` = The user that has access to the PostgreSQL database that the API should utilize.
- `POSTGRES_PASSWORD` = The password of the PostgreSQL user.
- `POSTGRES_PORT` = The port that the PostgreSQL instance listens to. Most of the time defaults to 5432
- `POSTGRES_SSL` = Set this to true if your PostgreSQL instance offers an encrypted connection (SSL)

## Dependencies

This blueprint uses:

- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.
- [PG](https://github.com/brianc/node-postgres): Non-blocking PostgreSQL client for Node.js.
- [PgHstore](https://github.com/scarney81/pg-hstore): A node package for serializing and deserializing JSON data.
- [Sequelize](https://sequelize.org/): Elegant ORM for any kind of SQL databases (in this blueprint we have PostgreSQL).

## Local Development

This blueprint uses environment variables for configuration:

- Make sure to set up your `.env` file by using `.env.example` as a reference.
- Adjust the values in `.env` as necessary to match your setup.
- Use the `yarn start` command to get started.

## Warestack Deployments

To ensure compatibility with automated deployments on Warestack, all blueprints must include a `healthz` endpoint.
Warestack relies on this endpoint to verify the correct operation of the service.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.
