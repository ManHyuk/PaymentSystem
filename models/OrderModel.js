'use strict';

const config = require('../config/config');
const pool = config.pool;


exports.orderedList = (data) => {
  return new Promise((resolve, reject) => {
    const sql =
      `
      SELECT * FROM Orders
      WHERE users_idx = ? ;
      `;

    pool.query(sql, [data], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    })
  })
};


exports.orderRequest = (reqData) => {
  return new Promise((resolve, reject) => {
    const sql =
      `
      INSERT INTO Orders(users_idx, products_idx, state) SET = ?;
      `;
    pool.query(sql, reqData, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        if (rows.affectedRows === 0) {
          const _err = new Error("Order Request Err");
          reject(_err);
        } else {
          resolve(rows);
        }
      }
    });
  });
};