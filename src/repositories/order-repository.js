'use strict';

const mongoose = require('mongoose');
const Order= mongoose.model('Order');

exports.get = async (body) => {
    return await Order.find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
};

exports.create = async (body) => {
    let order = new Order(body);
    await order.save();
};