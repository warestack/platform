# Mongoose - Node Express Seed

This seed helps you kickstart your Node.js projects using Express.js with integrated MongoDB support through Mongoose.

## Getting Started

1. Navigate to the `mongoose` directory.
2. **Environment Configuration**:
    - Copy the `.env.example` file and rename it to `.env`.
    - Fill out the required environment variables in the `.env` file, especially the MongoDB connection string and other
      related configurations.
3. Ensure you have a MongoDB instance running or use your connection string in the `.env` for an external database.
4. Run `yarn install` to install the necessary dependencies.
5. Use `yarn start` to start the server.
6. Your API is now connected to a MongoDB instance, and you can begin creating models, routes, etc.

## Dependencies

This seed uses:

- [Express.js](https://expressjs.com/): A fast, minimalist web framework for Node.js.
- [Mongoose](https://mongoosejs.com/): Elegant MongoDB object modeling for Node.js.

## Configuration

This seed uses environment variables for configuration:

- Make sure to set up your `.env` file by using `.env.example` as a reference.
- Adjust the values in `.env` as necessary to match your setup.

## Questions & Contributions

If you have any questions or wish to contribute, please open an issue or submit a pull request.
