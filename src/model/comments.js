const Database = require("../db/config");

module.exports = {
  async get() {
    const db = await Database();

    const comments = await db.all(`
    SELECT * FROM comments
    `);

    await db.close();

    return comments;
  },

  async post(comment) {
    const db = await Database();

    await db.run(`
      INSERT INTO comments (
        comment
      ) VALUES (
        "${comment}"
      )
    `);
  },

  async delete(id) {
    const db = await Database();

    await db.run(`
    DELETE FROM comments WHERE id = ${id}
    `)
  }
};
