'use strict';

const orderModel = require('../models/OrderModel');

exports.orderedList = async(req, res, next) => {

  let result;

  try {
    const reqData = req.userIdx;

    result = await orderModel.orderedList(reqData);
  } catch (error) {
    return next(error);
  }

  return res.r(result);
};


exports.orderRequest = async(req, res, next) => {
  let result;

  try {
    const reqData = {
      users_idx: req.userIdx,
      products_idx: req.body.prod_idx,
      state: 'pending'
    };

    result = await orderModel.orderRequest(reqData);
  } catch (error) {
    return next(error);
  }

  return res.r(result);
};