const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const stylesHandler = MiniCssExtractPlugin.loader

const config = {
  mode: 'production',
  entry: path.join(process.cwd(), './src/index.js'),
  output: {
    path: path.resolve(process.cwd(), './dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../template/index.html'),
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
