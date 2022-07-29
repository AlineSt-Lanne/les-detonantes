const AbstractManager = require("./AbstractManager");

class SponsorManager extends AbstractManager {
  static table = "sponsors";

  /* BACKEND pour ajouter un sponsor */
  insert(sponsors) {
    return this.connection.query(
      `insert into ${SponsorManager.table} (image, name, category) values (?,?,?)`,
      [sponsors.image, sponsors.name, sponsors.category]
    );
  }

  update(sponsors) {
    return this.connection.query(
      `update ${SponsorManager.table} set name = ? where id = ?`,
      [sponsors.name, sponsors.id]
    );
  }
}

module.exports = SponsorManager;
