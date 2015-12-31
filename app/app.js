module.exports = function (config) {

  var
    express = require("express"),
    app = express();

  app.get('/', function (req, res) {
    console.log("bloop");
    res.send('Howdy!');
  });

  return app;
};
