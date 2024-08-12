// 使用 CommonJS 的方式导入并导出模块
const build = require('./build.js')
const runServer = require('./run.js')
module.exports = { build, runServer }
// module.exports = { build }
