'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: "development",
  VUE_APP_BACKEND_URL: "localhost",
  VUE_APP_SECUR: ""
})