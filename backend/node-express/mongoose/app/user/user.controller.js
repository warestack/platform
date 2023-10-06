const express = require('express');
const UserService = require('./user.service')

class UsersController {
    constructor() {
        this.router = express.Router();

        // Setting the routes for the users endpoint group
        this.router.get('/', this.getUsers.bind(this)); // Binding is necessary for 'this' to refer to the class instance
    }

    getRouter() {
        return this.router;
    }

    async getUsers(request, response, next) {
        try {
            const users = UserService.getUsers();
            response.status(200).send(users);
        } catch (e) {
            next(new Error('No greeting found.'));
        }
    }
}

module.exports = UsersController;
