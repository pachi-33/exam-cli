/**
 * @file 从代码托管仓库拉取模版
 * @author yaobao
 * @date 2024-08-08 00:27:37
 */

const { gitRepoUrl: baseURL } = require('../../../config')
const { spawn, exec } = require('child_process')
const log = require('../../../utils/log')

module.exports = async (tplName, onFinish) => {
  if (onFinish.__proto__ !== Function.prototype) {
    throw new Error('[ERROR] onFinish is not a function ./command/init/tpl/downloadRepo.js')
  }
  const tplUrl = baseURL + `/${tplName}.git`
  exec(`git clone ${tplUrl} -b main`, (error, stdout, stderr) => {
    if (error) {
      log.error(error.message)
      return
    }
    onFinish()
  })
}
