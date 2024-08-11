const webpack = require('webpack')
const configWebpack = require('../config-webpack/partials')
const executer = async (configuration) => {
  return new Promise((resolve, reject) => {
    webpack(configuration, (err, stats) => {
      if (err || stats.hasErrors()) {
        console.log(stats.toJson().errors, stats.toJson().warnings)
        process.exit(22)
      }

      resolve(stats)
    })
  })
}

module.exports = async () => {
  const config = configWebpack({}, 'base')
  try {
    await executer(config)
  } catch (error) {}
}
