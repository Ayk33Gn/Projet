const models = require("../models");

class ClientsController {
  static browse = async (req, res) => {
    try {
      const [messages] = await models.clients.findAll();

      if (messages.length === 0) {
        return res.status(404).send("Messages not found");
      }

      return res.status(200).send(messages);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  };

  static add = async (req, res) => {
    try {
      const message = req.body;

      if (!message) {
        return res.status(409).send("Champs manquants");
      }

      const [result] = await models.clients.insert(message);

      if (result.affectedRows !== 1) {
        return res
          .status(409)
          .send("Problème dans la sauvegarde de votre messages");
      }

      return res.status(201).send({ ...message, id: result.insertId });
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  };
}

module.exports = ClientsController;
