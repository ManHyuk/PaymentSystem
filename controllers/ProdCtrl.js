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


exports.findAll = async(req, res, next) => {

  let result;

  try {

    result = await prodModel.findAll();

  } catch (error) {
    return next(error);
  }

  return res.r(result);
};


exports.find = async(req, res, next) => {

  let result;

  try {
    const reqData = {
      url: req.params.url
    };

    result = await prodModel.find(reqData);

  } catch (error) {
    return next(error);
  }

  return res.r(result);
};





