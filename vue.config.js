/*
 * @Author: your name
 * @Date: 2021-04-12 12:26:10
 * @LastEditTime: 2021-04-13 14:27:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\vue.config.js
 */

module.exports = {
    publicPath: '/cook',
    configureWebpack: (config) => {
        if(process.env.NODE_ENV === 'development') {
            config.devtool = 'eval-source-map';
            config.output.devtoolModuleFilenameTemplate = info => {
                const resPath = info.resourcePath
                if ((/\.vue$/.test(resPath) && !/type=script/.test(info.identifier)) || /node_modules/.test(resPath)) 
                {
                    return `webpack:///${resPath}?${info.hash}`
                }
                return `webpack:///${resPath.replace('./src', 'my-code/src')}`
            }
        }
    }
}