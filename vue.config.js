/*
 * @Author: your name
 * @Date: 2021-04-12 12:26:10
 * @LastEditTime: 2021-04-13 15:40:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\vue.config.js
 */

const path = require('path');

module.exports = {
    publicPath: '/cook',
    lintOnSave: true,
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
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', path.join(__dirname, './src'))
            .set('components', path.join(__dirname, './src/components'))
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/scss/_variables.scss";
                    @import "@/scss/_mixins.scss";
                `
            }
        }
    },
}