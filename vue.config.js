const path = require('path')
const fs = require("fs");

const filesDirs = fs.readdirSync(path.join(__dirname, './src/components'))
const _entry = filesDirs.reduce((total, dir) => {
  const _path = path.join(__dirname, './src/components', dir)
  const isFolder = fs.statSync(_path)
  if( isFolder.isDirectory() ) {
    const { name, main } = require(path.join(__dirname, `./src/components/${dir}/project.json`))
    total[name] = path.join(__dirname, `./src/components/${dir}/${main}`)
  }
  return total
}, {})

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/frame/main.js',
    }
  },
  configureWebpack: {
    entry: _entry,
    output: {
      path: path.join(__dirname, './dist'),
      filename: "[name].js",
      publicPath: '/',
      library: '[name]',
      libraryTarget: 'umd',
    },
  },
  // 为开发环境修改配置...
  devServer: {
    port: 9001,
    disableHostCheck: true,
    open: true
  }
}
