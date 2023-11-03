const User = require('./user.model');

class UserService {
  async getUsers() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error('Error fetching users from the database.');
    }
  }

  async getUserByEmail(email) {
    try {
      return await User.findOne({ email });
    } catch (err) {
      throw new Error('Error fetching user by email.');
    }
  }

  async createUser(user) {
    try {
      return await User.create(user);
    } catch (err) {
      throw new Error('Error creating user.');
    }
  }

  async updateUser(email, user) {
    try {
      return await User.findOneAndUpdate({ email }, user, { new: true });
    } catch (err) {
      throw new Error('Error updating user.');
    }
  }

  async deleteUser(email) {
    try {
      return await User.findOneAndDelete({ email });
    } catch (err) {
      throw new Error('Error deleting user.');
    }
  }
}

module.exports = new UserService(); // Exporting an instance of the service
