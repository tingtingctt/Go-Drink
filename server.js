// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/business-api-routes")(app);
require("./routes/user-api-routes")(app);
require('./routes/google-api-routes')(app);
require("./routes/html-routes")(app);
// Syncing our database and logging a message to the user upon success
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});



// var express = require("express");
// var PORT = process.env.PORT || 8000;
// var app = express();
// var db = require("./models");

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse application body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Routes
// // =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/user-api-routes.js")(app);
// require("./routes/busniess-api-routes.js")(app);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });