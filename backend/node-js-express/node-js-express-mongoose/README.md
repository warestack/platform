# Node Express - Mongoose with Javascript Blueprint

This blueprint helps you kickstart your Node.js projects using Express.js and **Javascript** with integrated MongoDB support
through Mongoose. Additionally, it includes a `healthz` endpoint, essential for automated deployments on Warestack.

## Getting Started

- Navigate to the `node-js-express-mongoose` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Ensure you have a MongoDB instance running or use your connection string in the `.env` for an external database.
- Use your preferred dependency manager to install dependencies (npm, yarn, pnpm, etc).
- Our recommended one is yarn so the related command is `yarn install`.- Use `yarn start` to start the server.
- Your API is now connected to a MongoDB instance, and you can begin creating models, routes, etc.

## Required environment variables

This blueprint requires the following environment variables:

- `PORT` = The port that the node server will be exposed.
- `MONGO_URI` = The URI that enables the connection to the related Mongo database.

## Dependencies

This blueprint uses:

- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.

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
