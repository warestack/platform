const express = require('express');

const RootController = require('./root/root.controller');
const HealthController = require('./health/health.controller');

class App {
  constructor() {
    // create express js application
    this.app = express();

    // add routes
    this.routes();
  }

  routes() {
    this.app.use('/', new RootController().getRouter());
    this.app.use('/healthz', new HealthController().getRouter());
  }
}

function expressApp() {
  return new App().app;
}

module.exports = expressApp;
