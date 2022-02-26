
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + 'client/build'));


app.get('/*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.get('/app/:id', checkUserAuth, findApp, renderView, sendJSON);

function checkUserAuth(req, res, next) {
  if (req.session.user) return next();
  return next(new NotAuthorizedError());
}



// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
