const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UserController {
  static login = (req, res) => {
    const { pseudo, password } = req.body;

    const validationErrors = Joi.object({
      pseudo: Joi.string().max(15).required(),
      password: Joi.string().max(15).required(),
    }).validate({ pseudo, password }).error;

    if (validationErrors) {
      res.status(422).send(validationErrors);
      return;
    }

    models.users
      .findByPseudo(pseudo)
      .then(async ([rows]) => {
        if (rows[0] == null) {
          res.status(403).send({ error: "pseudo ou mot de passe incorrect" });
        } else {
          const { id, password: hash, role } = rows[0];
          try {
            const isValid = await bcrypt.compare(password, hash);
            if (isValid) {
              const token = await jwt.sign(
                { id, pseudo, role },
                process.env.JWT_AUTH_SECRET,
                { expiresIn: "1h" }
              );

              res
                .cookie("accessToken", token, {
                  httpOnly: true,
                  secure: process.env.NODE_ENV === "production",
                })
                .status(200)
                .send({ id, pseudo });
            } else {
              res
                .status(403)
                .send("Le pseudo ou le mot de passe ne sont pas valides");
            }
          } catch (err) {
            res.status(500).send(`Erreur Interne avec bcrypt ${err}`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static browse = (req, res) => {
    models.users
      .findAll()
      .then(([rows]) => {
        res.status(200).send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({
          error: err.message,
        });
      });
  };

  static logout = (req, res) => {
    res.clearCookie("accessToken");
    res.sendStatus(204);
  };
}

module.exports = UserController;
