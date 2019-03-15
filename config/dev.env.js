'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_SERVER: '"http://10.31.1.2:93"',
  CAPTCHA_API: '"http://10.31.1.2:71"',
})
