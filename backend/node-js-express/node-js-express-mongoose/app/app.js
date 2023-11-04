const express = require('express');

// Load environment variables from .env file
require('dotenv').config();

const dbConfig = require('./config/database');

const RootController = require('./root/root.controller');
const HealthController = require('./health/health.controller');
const UsersController = require('./user/user.controller');

class App {
  static bootstrap() {
    return new App();
  }

  constructor() {
    // create express js application
    this.app = express();

    // Middleware for parsing JSON bodies
    this.app.use(express.json());

    // Connect to MongoDB
    dbConfig.connect();

    // add routes
    this.routes();
  }

  dbConnect() {
    dbConfig.connect();
  }

  routes() {
    this.app.use('/', new RootController().getRouter());
    this.app.use('/healthz', new HealthController().getRouter());
    this.app.use('/users', new UsersController().getRouter());
  }
}

function expressApp() {
  return new App().app;
}

module.exports = expressApp;
