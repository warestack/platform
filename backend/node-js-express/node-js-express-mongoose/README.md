# Node Express - Mongoose with Javascript Seed

This seed helps you kickstart your Node.js projects using Express.js and **Javascript** with integrated MongoDB support
through Mongoose. Additionally, it includes a `healthz` endpoint, essential for automated deployments on Warestack.

## Getting Started

- Navigate to the `node-js-express-mongoose` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Ensure you have a MongoDB instance running or use your connection string in the `.env` for an external database.
- Run `yarn install` to install the necessary dependencies.
- Use `yarn start` to start the server.
- Your API is now connected to a MongoDB instance, and you can begin creating models, routes, etc.

## Dependencies

This seed uses:

- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.

## Local Development

This seed uses environment variables for configuration:

- Make sure to set up your `.env` file by using `.env.example` as a reference.
- Adjust the values in `.env` as necessary to match your setup.

## Warestack Deployments

For this Flask API to be compatible with automated deployments on Warestack, the inclusion of the `healthz` endpoint is
mandatory. Warestack uses this endpoint to ensure that the service is running correctly.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.
