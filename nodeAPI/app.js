const express = require('express');
const app = express();

// import files to route traffick to
const latest_news_Route = require('./api/routes/latest_news');
const soccer_teams_Route = require('./api/routes/soccer_teams');
const fixtures_Routes = require('./api/routes/fixtures');
const results_Routes = require('./api/routes/results');
const league_Routes = require('./api/routes/league');
const partners_Routes = require('./api/routes/partners');


// Apply Routes to different paths
app.use('/latest_news', latest_news_Route);
app.use('/soccer_teams', soccer_teams_Route);
app.use('/fixtures', fixtures_Routes);
app.use('/results', results_Routes);
app.use('/league', league_Routes);
app.use('/partners', partners_Routes);



// Export modeule
module.exports = app;
