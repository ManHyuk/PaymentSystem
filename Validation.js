const Joi = require('joi');

module.exports = {
  /*
     USER Validation
     */
  // POST - /users/signup
  signup: {
    body: {
      id: Joi.string().regex(/^[A-Za-z0-9+]*$/).required(),
      nickname: Joi.string().required(),
      pw: Joi.string().required(),
      address: Joi.string().required()
    }
  },
  // POST - /users/login
  login: {
    body: {
      id: Joi.string().regex(/^[A-Za-z0-9+]*$/).required(),
      pw: Joi.string().required()
    }
  },
};