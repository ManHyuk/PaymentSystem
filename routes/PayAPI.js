'use strict';

const authCtrl = require('../controllers/AuthCtrl');
const payCtrl = require('../controllers/PayCtrl');

module.exports = (router) => {

  router.route('/pay/:prod_idx')
    .post(authCtrl.auth, payCtrl.pay);

  return router;
};

