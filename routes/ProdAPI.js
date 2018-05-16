'use strict';

const authCtrl = require('../controllers/AuthCtrl');
const prodCtrl = require('../controllers/ProdCtrl');



module.exports = (router) => {

  router.route('/prod')
    .get(authCtrl.auth, prodCtrl.findAll)
    .post(authCtrl.auth, prodCtrl.write);

  router.route('/prod/:url')
    .get(authCtrl.auth, prodCtrl.find);

  return router;
};