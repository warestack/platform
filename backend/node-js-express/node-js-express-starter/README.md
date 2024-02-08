# Hello World - Node Express with Javascript Blueprint

This blueprint is a basic starter for building an Express.js API with **JavaScript** that simply responds with "Hello,
World!". Additionally, it includes a `healthz` endpoint, essential for automated deployments on Warestack.

## Getting Started

- Navigate to the `node-js-express-starter` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Use your preferred dependency manager to install dependencies (npm, yarn, pnpm, etc).
- Our recommended one is yarn so the related command is `yarn install`.- Use `yarn start` to start the server.
- Access the API at [localhost:3000](http://localhost:3000). You should receive a "Hello, World!" message.
- The `healthz` endpoint at [localhost:3000/healthz](http://localhost:3000/healthz) provides a health check response
  which is crucial for Warestack's deployment automation.

## Required environment variables

This blueprint requires the following environment variables:

- `PORT` = The port that the node server will be exposed.

## Dependencies

This blueprint uses:

- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.

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
