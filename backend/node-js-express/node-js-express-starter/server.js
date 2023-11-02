const expressApp = require('./app/app');

const PORT = process.env.PORT || 3000;

expressApp().listen(PORT, () => {
	console.log('Express server listening on port ' + PORT);
});
