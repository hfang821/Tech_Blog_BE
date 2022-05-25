const router = require("express").Router();
const { User } = require("../../models");

router.get("/", (req, res) => {
  User.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    where: { id: req.params.id },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "This user is not found, try again" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.findOne({
    where: {username: req.body.username}
  })
  .then(dbUserData=>{
    if(!dbUserData){
      res.status(400).json({message: 'No user of this username!'});
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);
    if(!validPassword){
      res.status(400).json({message: 'Invalid password!'});
      return;
    }

    //Need to add req.session.save to keep the login state

    res.json({user: dbUserData, message: "Logged in."});
  })
})

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
  })
    .then((dbUserData) => {
      if (!dbUserData[0]) {
        res.status(404).json({ message: "This user is not found, try again" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "This user is not found" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
