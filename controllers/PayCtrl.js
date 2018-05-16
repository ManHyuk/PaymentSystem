'use strict';

const payModel = require('../models/PayModel');



exports.pay = async(req, res, next) => {
  let result;

  try {

    result = await payModel.pay();
  } catch (error) {
    return next(error);
  }

  return res.r(result);
};

