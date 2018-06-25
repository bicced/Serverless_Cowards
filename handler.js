'use strict';
const hello = require('./fn/hello')
const emailSplit = require('./fn/emailSplit')

module.exports.hello = (event, context, callback) => {
  hello(event, context, callback)
};

module.exports.emailSplit = (event, context, callback) => {
  emailSplit(event, context, callback)
}
