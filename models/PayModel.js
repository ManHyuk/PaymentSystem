'use strict';

const config = require('../config/config');
const pool = config.pool;


exports.pay = () => {
  return new Promise((resolve, reject) => {
    const sql = ``;

    pool.query(sql, [], (err, rows) => {

    })
  })
};