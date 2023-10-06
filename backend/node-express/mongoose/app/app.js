const express = require('express');

// Load environment variables from .env file
require('dotenv').config();

const dbConfig = require('./config/database')

const UsersController = require('./user/user.controller');

class App {
    static bootstrap() {
        return new App();
    }

    constructor() {
        // create express js application
        this.app = express();

        // Connect to MongoDB
        dbConfig.connect();

        // add routes
        this.routes();
    }

    dbConnect(){
        dbConfig.connect();
    }
    routes() {
        this.app.use(`/users`, new UsersController().getRouter());
    }
}

function expressApp() {
    return new App().app;
}

module.exports = expressApp;
