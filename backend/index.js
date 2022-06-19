const fs = require('fs');
const express = require('express');
const cors = require('cors');

const app = express();
const events = require('./routes/events/events.js');

const PORT = 3000;
const ROUTES = {
  events: '/events',
};

app.use(express.json());

// routes
app.use(ROUTES.events, events);

app.listen(PORT, (err) => {
  return console.log(err ?? `Listening on port ${PORT}`);
});