const sequelize = require('./database'); // The configured Sequelize instance

// Import all your models
const User = require('../user/user.model');
// ... import other models

const syncDb = async () => {
	try {
		// Sync all models at once
		await sequelize.sync({ force: false });
		console.log('All models were synchronized successfully.');
	} catch (error) {
		console.error('An error occurred while synchronizing models:', error);
	}
}

module.exports = syncDb;