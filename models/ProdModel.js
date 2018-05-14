'use strict';

const config = require('../config/config');
const pool = config.pool;


exports.write = (reqData) => {
  return new Promise((resolve, reject) => {
    const sql =
      `
      INSERT INTO Products(users_idx, url, contents, price, quantity) SET = ?;
      `;

    pool.query(sql, reqData, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        if (rows.affectedRows === 0) {
          const _err = new Error("Product Write Err");
          reject(_err);
        } else {
          resolve(rows);
        }
      }
    });
  });
};


exports.list = () => {
  return new Promise((resolve, reject) => {
    const sql =
      `
      SELECT url, title, contents, price, quantity FROM Products
      `;

    pool.query(sql, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  })
};

