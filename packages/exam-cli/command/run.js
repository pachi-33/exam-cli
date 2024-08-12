/**
 * @file 本地服务器
 * @author yaobao
 * @date 2024-08-12 15:13:04
 */

const cli = require('exam-build/src')

module.exports = async () => {
  await cli.runServer()
}
