/**
 * @file 下载模版
 * @author yaobao
 * @date 2024-08-06 23:33:03
 */

const log = require('../../../utils/log')
const downloadRepo = require('./downloadRepo')

const displayLoadingAnimationTick = (isLoading) => {
  log.loading('。')
  if (isLoading) {
    Promise.resolve().then(() => {
      displayLoadingAnimationTick(isLoading)
    })
  }
}

module.exports = async (args) => {
  let isLoading = true
  downloadRepo('exam-cli', () => {
    isLoading = false
  })
  Promise.resolve().then(() => {
    displayLoadingAnimationTick(isLoading)
  })
}
