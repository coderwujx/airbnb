const path = require('path');

/**
 * 拼接路径函数
 * @param {string} pathname 
 * @returns {string} 拼接后路径
 */
const resolve = pathname => path.resolve(__dirname, pathname)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils'),
    }
  }
}