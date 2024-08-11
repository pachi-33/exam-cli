/**
 * @file 下载模版
 * @author yaobao
 * @date 2024-08-06 23:33:03
 */

const log = require('../../../utils/log')
const downloadRepo = require('./downloadRepo')

const displayLoadingAnimationTick = (isLoading) => {
  log.loading('。')
  if (isLoading.value) {
    setImmediate(() => {
      displayLoadingAnimationTick(isLoading)
    })
  }
}

module.exports = async (args) => {
  let isLoading = { value: true }
  downloadRepo('exam-cli', () => {
    isLoading.value = false
  })
  setImmediate(() => {
    displayLoadingAnimationTick(isLoading)
  })
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
