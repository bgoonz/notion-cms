
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-notion.cjs.production.min.js')
} else {
  module.exports = require('./react-notion.cjs.development.js')
}
