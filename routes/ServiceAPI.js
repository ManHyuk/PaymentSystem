'use strict';

const userCtrl = require('../controllers/UserCtrl');

module.exports = (router) => {

  router.route('/signup')
    .post(userCtrl.signup);

  router.route('/siginin')
    .post(userCtrl.signin);


  return router;
};