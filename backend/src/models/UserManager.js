const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  static table = "users";

  findByMail(email) {
    return this.connection.query(
      `select * from ${UserManager.table} where email = ?`,
      [email]
    );
  }

  findByPseudo(pseudo) {
    return this.connection.query(
      `select * from ${UserManager.table} where pseudo = ?`,
      [pseudo]
    );
  }

  findAll() {
    return this.connection.query(
      `select id, pseudo, email, role from ${UserManager.table}`
    );
  }
}

module.exports = UserManager;
