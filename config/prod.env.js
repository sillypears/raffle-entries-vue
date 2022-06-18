'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  VUE_APP_BACKEND_URL: "lol.stupidfru.it",
  VUE_APP_SECURE: "s"
})