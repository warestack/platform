const expressApp = require('./app/app');
const syncDb = require('./app/config/sync');

const PORT = process.env.PORT || 3000;

// Initialize Database and then start the server
syncDb().then(() => {
    expressApp().listen(PORT, () => {
        console.log('Express server listening on port ' + PORT);
    });
}).catch(error => {
    console.error('Unable to start the server:', error);
    process.exit(1); // Exit with a failure code
});
