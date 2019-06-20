const ArcadeGame = require("../models/arcadegame");

exports.index = (req, res) => {
  console.log("index");
  ArcadeGame.find()
    .then(arcadegames => {
      res.render("resources/index", {
        arcadegames: arcadegames,
        title: "GamseList"
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/home");
    });
};

exports.show = (req, res) => {
  ArcadeGame.findOne({
    _id: req.params.id
  })
    .then(arcadegame => {
      res.render("resources/show", {
        arcadegame: arcadegame,
        title: arcadegame.title
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("home");
    });
};

exports.new = (req, res) => {
  res.render("resources/new", {
    title: "New Game"
  });
};

exports.edit = (req, res) => {
  ArcadeGame.findOne({
    _id: req.params.id
  })
    .then(arcadegame => {
      res.render("resources/edit", {
        arcadegame: arcadegame,
        title: arcadegame.title
      });
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/home");
    });
};

exports.create = async (req, res) => {
  ArcadeGame.create(req.body.arcadegame)
    .then(() => {
      console.log("New game was created successfully.");
      res.redirect("/home");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect("/new");
    });
};

exports.update = (req, res) => {
  req.isAuthenticated();

  ArcadeGame.updateOne(
    {
      _id: req.body.id
    },
    req.body.arcadegame,
    {
      runValidators: true
    }
  )
    .then(() => {
      console.log("The game was updated successfully.");
      res.redirect(`/home`);
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect(`/home`);
    });
};

exports.destroy = (req, res) => {
  ArcadeGame.deleteOne({
    _id: req.body.id
  })
    .then(() => {
      console.log("The game was deleted successfully.");
      res.redirect("/home");
    })
    .catch(err => {
      req.flash("error", `ERROR: ${err}`);
      res.redirect(`/home`);
    });
};
