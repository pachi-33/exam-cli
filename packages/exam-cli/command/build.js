/**
 * @file 构建打包
 * @author yaobao
 * @date 2024-08-10 21:47:20
 */

const cli = require('exam-build/src')

module.exports = async () => {
  await cli.build()
}
