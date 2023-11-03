const express = require('express');
const RootService = require('./root.service');

class RootController {
  constructor() {
    this.router = express.Router();

    // Setting the routes for the root endpoint group
    this.router.get('/', this.info.bind(this)); // Binding is necessary for 'this' to refer to the class instance
  }

  getRouter() {
    return this.router;
  }

  async info(request, response, next) {
    const message = RootService.info();
    response.status(200).send(message);
  }
}

module.exports = RootController;
