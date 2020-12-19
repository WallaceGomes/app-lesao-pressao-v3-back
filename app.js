require('dotenv').config();
require('./database');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ limit: '5MB' }));

app.use(cors());

//error middleware
app.use((error, req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}

	res.status(error.code || 500);
	res.json({
		message: error.message || 'An unknown error occurred! (api routes) ',
	});
});

module.exports = app;
