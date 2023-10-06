const express = require('express');

const GreetingController = require('./greeting/greeting.controller');

class App {
    constructor() {
        // create express js application
        this.app = express();

        // add routes
        this.routes();
    }

    routes() {
        this.app.use('/greeting', new GreetingController().getRouter());
    }
}

function expressApp() {
    return new App().app;
}

module.exports = expressApp;
