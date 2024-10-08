const express = require("express");

const app = express();

app.use(
	express.json({
		limit: "10mb",
	}),
);
app.use(express.urlencoded({ extended: true }));

app.set("port", 3001);

app.get("/users", (req, res) => {
	res.status(200).json({
		message: "users",
	});
});

module.exports = app;
