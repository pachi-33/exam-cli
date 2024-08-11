// 使用 CommonJS 的方式导入模块
// const merge = require('webpack-merge').merge
const base = require('./base.js')

// CommonJS 的方式导出模块
const partials = { base }

module.exports = function (config, env) {
  const partialConfig = partials[env]()
  return partialConfig
}
