/**
 * @file 脚手架命令配置表
 * @author yaobao
 * @date 2024-08-05 18:09:45
 */

module.exports = {
  init: {
    cmd: ['init', 'i'],
    description: '初始化项目',
  },
  build: {
    cmd: ['build'],
    description: '构建打包当前项目',
  },
  run: {
    cmd: ['run'],
    description: '运行本地服务器',
  },
}
