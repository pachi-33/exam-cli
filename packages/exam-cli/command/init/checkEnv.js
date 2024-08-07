/**
 * @file 检查当前环境
 * @author yaobao
 * @date 2024-08-06 23:32:06
 */

const path = require('path')
const fs = require('fs')
const log = require('../../utils/log')

const DISABLED_EXISTING_FILES = new Set([
  //
  'node_modules',
  'package.json',
  'README.md',
  '.gitignore',
  '.gitlab-ci.yml',
  '.git',
])

const checkDictionary = async (dirPath) => {
  fs.readdir(dirPath, { withFileTypes: true, recursive: false }, (err, files) => {
    if (err) {
      log.error('Error reading directory')
      return
    }

    files.forEach((file) => {
      const filename = file.name
      if (DISABLED_EXISTING_FILES.has(filename)) {
        log.error('当前路径已存在项目')
      }
    })
  })
}

module.exports = async (args) => {
  const dirPath = process.cwd()
  await checkDictionary(dirPath)
}
