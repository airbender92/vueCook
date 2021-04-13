/*
 * @Author: your name
 * @Date: 2021-04-12 12:21:38
 * @LastEditTime: 2021-04-13 14:28:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\babel.config.js
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
