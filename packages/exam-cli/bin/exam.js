#!/usr/bin/env node

const yargs = require('yargs').scriptName('exam').usage('use: $0 <cmd> [args]')
const cmds = require('../command')

const register = () => {
  Object.entries(cmds).forEach(([cmdName, data]) => {
    yargs.command(
      data.cmd,
      data.description,

      //builder/
      (_yargs) => {
        const positional = data.positional || []
        positional.forEach((item) => {
          _yargs.positional(item.key, item.option)
        })
      },

      //handler
      (argv) => {
        require(`../command/${cmdName}`)(argv)
      },
    )
  })
}

// exam i -a b c --d e f g
// { _: [ 'i', 'c', 'f', 'g' ], a: 'b', d: 'e', '$0': 'exam' }

const __main = () => {
  try {
    // 注册命令
    register()
    // 注册帮助
    const { argv } = yargs
    console.log('argv: ', argv)

    if (argv._.length === 0) {
      yargs.showHelp()
    }
  } catch (error) {
    console.error('执行错误:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  __main()
}
