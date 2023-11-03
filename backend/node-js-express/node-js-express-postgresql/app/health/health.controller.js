const express = require('express');

const HealthService = require('./health.service');

class HealthController {
  constructor() {
    this.router = express.Router();

    // Setting the routes for the greeting endpoint group
    this.router.get('/', this.health.bind(this)); // Binding is necessary for 'this' to refer to the class instance
  }

  getRouter() {
    return this.router;
  }

  async health(request, response, next) {
    const message = HealthService.health();
    response.status(200).send(message);
  }
}

module.exports = new HealthController().getRouter();
