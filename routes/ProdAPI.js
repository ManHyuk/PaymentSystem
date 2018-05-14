'use strict';

const authCtrl = require('../controllers/AuthCtrl');
const prodCtrl = require('../controllers/ProdCtrl');



module.exports = (router) => {
  router.route('/prod')
    .get(authCtrl.auth, prodCtrl.list)
    .post(authCtrl.auth, prodCtrl.write);


  return router;
};