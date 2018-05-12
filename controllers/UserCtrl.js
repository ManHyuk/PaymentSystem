'use strict';

const userModel = require('../models/UserModel');
const config = require('../config/config');

exports.signup = async (req, res, next) => {

  let result;
  try {

    const cipheredData = config.doCipher(req.body.pw);

    const userData = {
      id: req.body.id,
      pw: cipheredData.pw,
      address: req.body.address,
      salt: cipheredData.salt
    };

    result = await userModel.signup(userData);
  } catch (error) {
    return next(error);
  }

  return res.r(result);
};


exports.signin = async (req, res, next) => {

  let result;

  try {
    const getSalt = (await userModel.getSalt(req.body.id)).salt;
    const userData = {
      id: req.body.id,
      pw: config.doCipher(req.body.pw, getSalt).pw
    };

    result = await userModel.signin(userData);

  } catch (error) {
    return next(error);
  }

  return res.r(result);
};