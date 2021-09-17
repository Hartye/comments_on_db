const Database = require("./config");

const initDb = {
  async init() {
    const db = await Database();

    await db.exec(`
    CREATE TABLE comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      comment TEXT
    )
    `);

    await db.run(`
    INSERT INTO comments (
      comment
    ) VALUES (
      "Lorem ipsum"
    )
    `);

    await db.run(`
    INSERT INTO comments (
      comment
    ) VALUES (
      "Iopsem Lpsum"
    )
    `);

    await db.close();
  },
};

initDb.init();
