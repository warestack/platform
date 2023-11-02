const mongoose = require('mongoose');

const dbConfig = {
  connect: function() {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/test'; // Default URI

    mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
      .then(() => {
        console.log('Successfully connected to MongoDB.');
      })
      .catch(error => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
      });

    // Setting up mongoose event handlers
    mongoose.connection.on('error', err => {
      console.error('MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected.');
    });

    process.on('SIGINT', async() => {
      try {
        await mongoose.connection.close();
        console.log('MongoDB connection closed due to app termination.');
        process.exit(0);
      } catch (err) {
        console.error('Error during database disconnection:', err);
        process.exit(1);
      }
    });
  }
};

module.exports = dbConfig;
