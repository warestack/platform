const express = require('express');

// Load environment variables from .env file
require('dotenv').config();

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

    // add routes
    this.routes();
  }

  routes() {
    this.app.use('/', RootController);
    this.app.use('/healthz', HealthController);
    this.app.use('/users', UsersController);

    // Generic error handler
    this.app.use((err, req, res, next) => {
      console.error(err.stack); // Log the stack trace for debugging purposes
      const statusCode = err.statusCode || 500;
      const message = err.message || 'An unexpected error occurred';
      res.status(statusCode).json({ message });
    });
  }
}

function expressApp() {
  return new App().app;
}

module.exports = expressApp;
