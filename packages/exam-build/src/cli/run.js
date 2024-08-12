const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const configWebpack = require('../config-webpack/partials')

const log = require('../utils/log')

const config = configWebpack({}, 'base')
const compiler = Webpack(config)
const devServerOptions = { ...config.devServer, open: true }
const server = new WebpackDevServer(devServerOptions, compiler)

module.exports = async () => {
  log.info('Starting server...')
  try {
    await server.start()
  } catch (error) {
    console.log('Failed to start server:', error)
  }
}
