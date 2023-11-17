const pg = require('pg');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
	host: process.env.POSTGRES_HOST,
	dialect: 'postgres',
	dialectModule: pg,
	port: process.env.POSTGRES_PORT || 5432,
	dialectOptions: {
		// Remove or comment out the ssl property if it's not supported by your PostgreSQL server
		// ssl: {
		// require: process.env.POSTGRES_SSL === 'true', // Whether to require SSL
		// rejectUnauthorized: process.env.POSTGRES_SSL === 'true' // Whether to reject self-signed certificates
		// // Note: rejectUnauthorized should be set to true in production for security reasons
		// }
	}
});

module.exports = sequelize;
