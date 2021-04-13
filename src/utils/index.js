/*
 * @Author: your name
 * @Date: 2021-04-12 13:03:00
 * @LastEditTime: 2021-04-13 13:48:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\src\utils\index.js
 */
class Utils {
    // 取反
    reverseText(propertyName) {
        this[propertyName] = this[propertyName]
          .split('')
          .reverse()
          .join('')
      }
}

module.exports = new Utils();