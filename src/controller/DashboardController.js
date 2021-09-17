const control = require("../model/comments");

module.exports = {
  async index(req, res) {
    const comment = await control.get();
    res.render("index", { comment });
  },

  async post(req, res) {
    const comment = await control.get();

    await control.post(req.body.comment);

    res.redirect("/");
  },

  async delete(req, res) {
    const id = req.params.id;

    await control.delete(id);

    return res.redirect("/");
  },
};
