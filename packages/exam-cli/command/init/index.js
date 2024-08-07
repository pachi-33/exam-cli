/**
 * @file init 命令入口
 * @author yaobao
 * @date 2024-08-06 23:31:19
 */

const check = require('./checkEnv')
const tpl = require('./tpl')
const install = require('./install')

module.exports = async (args) => {
  await check(args)
  await tpl(args)
  await install(args)
}
