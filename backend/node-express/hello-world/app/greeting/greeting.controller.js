const express = require('express');
const GreetingService = require('./greeting.service')

class GreetingController {
    constructor() {
        this.router = express.Router();

        // Setting the routes for the greeting endpoint group
        this.router.get('/', this.hello.bind(this)); // Binding is necessary for 'this' to refer to the class instance
    }

    getRouter() {
        return this.router;
    }

    async hello(request, response, next) {
        const message = GreetingService.hello();
        response.status(200).send(message);
    }
}

module.exports = GreetingController;
