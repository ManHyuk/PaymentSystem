'use strict';

const userCtrl = require('../controllers/UserCtrl');

module.exports = (router) => {

  router.route('/users/signup')
    .post(userCtrl.signup);

  router.route('/users/siginin')
    .post(userCtrl.signin);


  return router;
};