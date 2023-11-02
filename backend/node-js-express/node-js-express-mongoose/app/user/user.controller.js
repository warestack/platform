const express = require('express');

const UserService = require('./user.service');

class UsersController {
	constructor() {
		this.router = express.Router();
		this.router.get('/', this.getUsers.bind(this));
		this.router.get('/:email', this.getUserByEmail.bind(this));
		this.router.post('/', this.createUser.bind(this));
		this.router.put('/:email', this.updateUser.bind(this));
		this.router.delete('/:email', this.deleteUser.bind(this));
	}

	getRouter() {
		return this.router;
	}

	async getUsers(request, response, next) {
		try {
			const users = await UserService.getUsers();
			response.status(200).send(users);
		} catch (e) {
			next(e);
		}
	}

	async getUserByEmail(request, response, next) {
		try {
			const user = await UserService.getUserByEmail(request.params.email);
			if (!user) {
				response.status(404).send({ message: 'User not found.' });
				return;
			}
			response.status(200).send(user);
		} catch (e) {
			next(e);
		}
	}

	async createUser(request, response, next) {
		try {
			const user = await UserService.createUser(request.body);
			response.status(201).send(user);
		} catch (e) {
			next(e);
		}
	}

	async updateUser(request, response, next) {
		try {
			const updatedUser = await UserService.updateUser(request.params.email, request.body);
			if (!updatedUser) {
				response.status(404).send({ message: 'User not found.' });
				return;
			}
			response.status(200).send(updatedUser);
		} catch (e) {
			next(e);
		}
	}

	async deleteUser(request, response, next) {
		try {
			const deletedUser = await UserService.deleteUser(request.params.email);
			if (!deletedUser) {
				response.status(404).send({ message: 'User not found.' });
				return;
			}
			response.status(200).send(deletedUser);
		} catch (e) {
			next(e);
		}
	}
}

module.exports = UsersController;
