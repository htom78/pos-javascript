'use strict';

var _ = require('lodash');

var Item = (function () {
    function Item (barcode, name, util, price, brand) {
        this.barcode = barcode;
        this.name = name;
        this.util = util;
        this.price = price || 0.00;
        this.brand = brand || '';
    }

    Item.findItemByBarcode = function (items, barcode) {
        return _.find(items, {'barcode': barcode});
    };
    return Item;
})();

module.exports = Item;
