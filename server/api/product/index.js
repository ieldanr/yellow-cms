'use strict';

var express = require('express');
var controller = require('./product.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.post('/', controller.create);

module.exports = router;
