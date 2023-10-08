const knex = require("../db/knex");
const bcrypt = require('bcrypt');
const uuid = require('uuid');
module.exports = {
  createUser: async (req, res) => {
    try {
     let userId = await uuid.v4()
      let salt = await bcrypt.genSalt(10);
      let hashPassword = await bcrypt.hash(req.body.password, salt);
      let data = await knex('users').insert({
        id: 6, 
        name: req.body.name,
        email: req.body.email,
        password: hashPassword
      });
      res.status(201).json({
        success: true,
        Data: data.rows,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
  getUsers: async (req, res) => {
    try {
      let todos = await knex.raw("select * from users");
      res.status(200).json({
        success: true,
        Data: todos.rows,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
  findUser: async (req, res) => {
    try {
      let todos = await knex.select().from('todos').where('id',1);
      res.status(200).json({
        success: true,
        Data: todos,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
      });
    }
  },
};
