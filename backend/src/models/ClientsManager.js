const AbstractManager = require("../models/AbstractManager");

class ClientsManager extends AbstractManager {
  static table = "clients";

  insert(clients) {
    return this.connection.query(
      `insert into ${ClientsManager.table} (firstname, lastname, email, message) values ( ?, ?, ?, ?)`,
      [clients.firstname, clients.lastname, clients.email, clients.message]
    );
  }
}

module.exports = ClientsManager;
