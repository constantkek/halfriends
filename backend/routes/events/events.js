"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const eventsJson = require('./resourses/events');
router.get('/', (req, res) => {
    res.status(200).send({ eventsJson });
});
module.exports = router;
