'use strict';

const jwt = require('jsonwebtoken');

const config = require('../config/config');
const pool = config.pool;




exports.signup = (userData) => {
  console.log(userData);
  return new Promise((resolve, reject) => {
    const sql =
      `INSERT INTO Users SET ?;`;
    pool.query(sql, userData, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  }).then((result) => {
    return new Promise((resolve, reject) => {
      const sql =
        `
        SELECT id, address FROM Users
        WHERE idx = ?;
        `;
      pool.query(sql, result.insertId, (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows[0]);
        }
      })
    });
  })
};

exports.getSalt = (userId) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT salt FROM Users WHERE id = ?;`;

    pool.query(sql, userId, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows[0]);
      }
    });
  });
};

exports.signin = (userData) => {
  return new Promise((resolve, reject) => {
    const sql =
      `SELECT id FROM Users WHERE id = ?;`;

    pool.query(sql, [userData.id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        if (rows.length === 0) {
          reject(1402);
        } else {
          resolve(null);
        }
      }
    });
  }).then(() => {
    return new Promise((resolve, reject) => {
      const sql =
        `SELECT idx, id, address FROM Users
        WHERE id = ? and pw = ? ;`;

      pool.query(sql, [userData.id, userData.pw], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows.length === 0 ) {
            reject(1403);
          } else {
            const profile = {
              idx: rows[0].idx,
              id: rows[0].id,
            };
            const token = jwt.sign(profile, config.jwt.cert, {'expiresIn': "10h"});

            const result = { profile, token };

            resolve(result);
          }
        }
      });
    })
  })
};