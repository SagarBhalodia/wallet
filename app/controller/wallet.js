var mongoose = require('mongoose');
var service = require('./../services/wallet');

/**
 *
 */
exports.home = function (req, res) {
    res.render('angular-layout.html',{
        layout: false,
        title: 'wallet - Home'
    });
};






