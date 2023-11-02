const User = require('./user.model');

class UserService {
  async getUsers() {
    try {
      return await User.findAll();
    } catch (err) {
      throw new Error(`Error fetching users from the database. Details: ${err}`);
    }
  }

  async getUserByEmail(email) {
    try {
      return await User.findOne({ where: { email } });
    } catch (err) {
      throw new Error(`Error fetching user by email. Details: ${err}`);
    }
  }

  async createUser(userData) {
    try {
      return await User.create(userData);
    } catch (err) {
      throw new Error(`Error creating user. Details: ${err}`);
    }
  }

  async updateUser(email, userData) {
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        return await user.update(userData);
      }
      return null;
    } catch (err) {
      throw new Error(`Error updating user. Details: ${err}`);
    }
  }

  async deleteUser(email) {
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        return await user.destroy();
      }
      return null;
    } catch (err) {
      throw new Error(`Error deleting user. Details: ${err}`);
    }
  }
}

module.exports = new UserService(); // Exporting an instance of the service
