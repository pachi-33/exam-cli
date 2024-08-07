/**
 * @file 判断当前网络环境
 * @author yaobao
 * @date 2024-08-08 00:36:48
 */
const { exec } = require('child_process')

exec('ping -c 1 www.baidu.com', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行失败: ${error}`)
    return
  }
  console.log('网络可达')
})
