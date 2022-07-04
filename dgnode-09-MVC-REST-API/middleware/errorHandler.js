const {logEvents} = require("./logEvents");

const errorHandler = (err, req, res, next) => {
	logEvents(`Error name: ${err.name}, Error message: ${err.message}`, "errLog.txt");
	console.log(err.stack);
	res.status(500).send(err.message);
};

module.exports = errorHandler;

