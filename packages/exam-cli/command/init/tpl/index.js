/**
 * @file 下载模版
 * @author yaobao
 * @date 2024-08-06 23:33:03
 */

const log = require('../../../utils/log')
const downloadRepo = require('./downloadRepo')

const displayLoadingAnimationTick = () => {
  log.loading('正在下载模版.')
}

module.exports = async (args) => {
  let timer = null
  downloadRepo('simple-template', () => {
    clearInterval(timer)
    log.info('下载完成*')
  })
  timer = setInterval(() => {
    displayLoadingAnimationTick()
  }, 1000)
}

// const displayLoadingAnimationTick = (isLoading) => {
//   const timer = setInterval(() => {
//     if (isLoading.value) {
//       console.log('。', isLoading.value)
//     } else {
//       timer && clearInterval(timer)
//     }
//   }, 200)
// }

// module.exports = async (args) => {
//   let isLoading = { value: true }
//   downloadRepo('exam-cli', () => {
//     isLoading.value = false
//   })
//   displayLoadingAnimationTick(isLoading)
// }
