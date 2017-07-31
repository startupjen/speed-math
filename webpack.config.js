const path = require('path')

const SRC_DIR = path.join(__dirname, '\client\/src/')
const DIST_DIR = path.join(__dirname,'\client\/dist/')

console.log(`SRC_DIR IS ${SRC_DIR}`)
console.log(`DIST_DIR IS ${DIST_DIR}`)

module.exports = {
  entry: `${SRC_DIR}\index.jsx`, //path.resolve(SRC_DIR, '../index.jsx'),
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?/, include: SRC_DIR, loader: 'babel-loader', query: { presets: ['react', 'es2015']} },
    ]
  }

}