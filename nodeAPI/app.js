const express = require('express');
const app = express();

// import files to route traffick to
const latest_new_Routes = require('./api/routes/latest_news');

// Route request to /latest_news
app.use('/latest_news', latest_new_Routes);



// Export modeule
module.exports = app;
