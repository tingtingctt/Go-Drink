var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../config/orm");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  db.viewAll("burgers").then(burgers=> res.render("index", {burgers}))
});

router.post("/api/burger", function(req, res) {
  db.addOne("burgers", req.body).then(()=>res.json('yay!'))
});

// router.put("/api/burger/:id", function(req, res) {
//  db.updateOne("burgers", req.params.id).then(()=>res.json('ok!'))
// });

// router.delete("/api/burger/:id", function(req, res) {
//   db.deleteOne("burgers", req.params.id).then(()=>res.json('ok!'))
// });

// Export routes for server.js to use.
module.exports = router;