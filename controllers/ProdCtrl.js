'use strict';

const prodModel = require('../models/ProdModel');


exports.write = async(req, res, next) => {

  let result;

  try {

    const reqData = {
      users_idx: req.userIdx,
      url: req.body.url,
      title: req.body.title,
      contents: req.body.contents,
      price: req.body.price,
      quantity: req.body.quantity,
    };

    result = await prodModel.write(reqData);

  } catch (error) {
    return next(error);
  }

  return res.r(result);
};


exports.list = async(req, res, next) => {

  let result;

  try {

    result = await prodModel.list();

  } catch (error) {
    return next(error);
  }

  return res.r(result);
};


