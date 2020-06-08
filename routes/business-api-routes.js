var db = require("../models");

module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/business", function(req, res) {
  //   var query = {};
  //   if (req.query.name) {
  //     query.name = req.query.name;
  //   }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Business.findAll({
      
    }).then(function(dbBusiness) {
      res.json(dbBusiness);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/business/:type", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Business.findAll({
      where: {
        type: req.params.type
      }
    }).then(function(result) {
      res.json(result);
      console.log(result);
    });
  });
}

  // POST route for saving a new post
//   app.post("/api/business", function(req, res) {
//     db.Post.create(req.body).then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
// };


// app.post("/api/user", (req,res) =)

// 
