const router = require("exress").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  // withAuth will send you back to the utils/auth and test if there is a req.session.userId
  // if there is NOT it will redirect you back to the login page
  // if there IS (next in utils/auth) it will move to the route handling below

  try {
    const postStuff = await Post.findAll({
      where: { userId: req.session.userId },
    });

    const posts = postStuff.map((post)=> post.get({plain: true}))

    res.render("allPosts", {
        layout: "dashboard",
        posts
    })

  } catch (err) {
      res.redirect("login")
  }
});
