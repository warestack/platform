# Hello World - Node Express with Javascript Seed

This seed is a basic starter for building an Express.js API with **JavaScript** that simply responds with "Hello,
World!".

## Getting Started

- Navigate to the `node-express-starter-js` directory.
- Configure environment variables as described in the [local development](#local-development) section.
- Run `yarn install` to install the necessary dependencies.
- Use `yarn start` to start the server.
- Access the API at [localhost:3000](http://localhost:3000). You should receive a "Hello, World!" message.
- The `healthz` endpoint at [localhost:3000/healthz](http://localhost:3000/healthz) provides a health check response
  which is crucial for Warestack's deployment automation.

## Dependencies

This seed uses:

- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.

## Local Development

This seed uses environment variables for configuration:

- Make sure to set up your `.env` file by using `.env.example` as a reference.
- Adjust the values in `.env` as necessary to match your setup.

## Warestack Deployments

For this Flask API to be compatible with automated deployments on Warestack, the inclusion of the `healthz` endpoint is
mandatory. Warestack uses this endpoint to ensure that the service is running correctly.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.
