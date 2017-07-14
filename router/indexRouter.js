/**
 * Created by Fairlady on 2017/07/14.
 */
var express= require('express');
var router = express.Router();

var indexCtrl = require('../controller/indexCtrl.js');

router.get('/',indexCtrl.showIndexPage);

module.exports = router;