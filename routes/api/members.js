const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../Members");

// Gets all members
router.get("/", (req, res) => {
	res.json(members);
});

// Get single member
router.get("/:id", (req, res) => {
	const found = members.some(member => member.id === parseInt(req.params.id));

	if (found) {
		res.json(members.filter(member => member.id === parseInt(req.params.id)));
	} else {
		res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
	}
});

// Create Member
router.post("/", (req, res) => {
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		profession: req.body.profession
	};

	if (!newMember.name) {
		return res.status(400).json({ msg: "Please include a name" });
	}

	members.push(newMember);
	res.json(members);
});

// Update Member
router.post("/", (req, res) => {
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		profession: req.body.profession
	};

	if (!newMember.name) {
		return res.status(400).json({ msg: "Please include a name" });
	}

	members.push(newMember);
	res.json(members);
});

module.exports = router;
