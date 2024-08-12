const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const webpack = require('webpack')

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
  mode: 'development',
  entry: [
    // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    path.join(process.cwd(), './src/index.js'),
  ],
  output: {
    path: path.resolve(process.cwd(), './dist'),
  },
  devServer: {
    static: path.join(process.cwd(), 'dist'),
    // contentBase: path.resolve(process.cwd(), './dist'),
    open: true,
    host: 'localhost',
    hot: true,
    // inline: true, // Enable live-reload
    historyApiFallback: true, // For single page applications
    port: 3000,
    // overlay: true, // Show errors/warnings in the browser
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Enable HMR
    new webpack.NoEmitOnErrorsPlugin(), // Don't emit compiled assets that include errors
    new HtmlWebpackPlugin({
      //   template: path.join(__dirname, '../template/index.html'),
      template: path.join(process.cwd(), './src/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  resolveLoader: {
    modules: [
      // 添加打包工具所在的 node_modules 目录
      path.resolve(__dirname, '../../../node_modules'),
      // 默认也会搜索当前项目的 node_modules
      'node_modules',
    ],
  },
}

module.exports = () => {
  //   if (isProduction) {
  //     config.mode = 'production'

  //     config.plugins.push(new WorkboxWebpackPlugin.GenerateSW())
  //   } else {
  //     config.mode = 'development'
  //   }
  return config
}
