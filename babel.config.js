/*
 * @Author: your name
 * @Date: 2021-04-12 12:21:38
 * @LastEditTime: 2021-04-14 15:53:28
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
  ],
  "env": {
    "test": {
      "presets": [["env",{ "targets": { "node": "current" } }]]
    }
  }
}
