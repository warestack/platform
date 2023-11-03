// User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database'); // Import the sequelize instance

class User extends Model {
}

User.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  tableName: 'users', // Explicitly define table name to be in lowercase
  timestamps: true // Set to true if you want Sequelize to handle createdAt and updatedAt
});

module.exports = User;
