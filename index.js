const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const members = require("./Members");
const app = express();

// Init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => {
	res.json(members);
});

// Set static folderee
app.use(express.static(path.join(__dirname, "public")));

// check the environment variable port first then default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
