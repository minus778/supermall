module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //创建文件别名
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    }
}