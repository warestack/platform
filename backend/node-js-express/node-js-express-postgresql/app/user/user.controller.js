const express = require('express');
const UserService = require('./user.service');

class UsersController {
  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.getUsers.bind(this));
    this.router.get('/:email', this.getUserByEmail.bind(this));
    // Apply the checkPayload middleware to routes that need it
    this.router.post('/', checkPayload, this.createUser.bind(this));
    this.router.put('/:email', checkPayload, this.updateUser.bind(this));
    this.router.delete('/:email', this.deleteUser.bind(this));
  }

  getRouter() {
    return this.router;
  }

  async getUsers(req, res, next) {
    try {
      const users = await UserService.getUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async getUserByEmail(req, res, next) {
    try {
      const user = await UserService.getUserByEmail(req.params.email);
      if (!user) {
        return res.status(404).json({ message: 'User not found.' });
      }
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  async createUser(req, res, next) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req, res, next) {
    try {
      const updatedUser = await UserService.updateUser(req.params.email, req.body);
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found.' });
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const result = await UserService.deleteUser(req.params.email);
      if (!result) {
        return res.status(404).json({ message: 'User not found.' });
      }
      // Convention is to send a 204 status code for successful delete with no content
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

// Middleware to check for empty payload in POST and PUT requests
function checkPayload(req, res, next) {
  if (['POST', 'PUT'].includes(req.method) && (!req.body || Object.keys(req.body).length === 0)) {
    return res.status(400).json({ message: 'Request payload cannot be empty.' });
  }
  next();
}

// Export an instance of the controller
module.exports = new UsersController().getRouter();
