module.exports = {
    // 程序的入口文件
    entry:'./app.js',
    output: {
        // 所有打包好的资源的存放位置
        path: './public/build',
        
        // 使用 url-loader 的资源的前缀
        publicPath: './build',
        
        // 生成的打包文件名
        filename: 'bundle.js'
    },
    module:{
        loaders:[{
            // 用于匹配加载器支持的文件格式的正则表达式
            test: /\.js$/,
            
            // 要使用的加载器类型
            // 加载器支持通过查询字符串的方式接收参数
            loader: 'jsx-loader?harmony'
        },{
            test: /\.css$/,
            
            // 多个加载器通过 "|" 连接
            loader: 'style-loader!css-loader'
        },{
            test: /\.(png|jpg)$/,
            
            // url-loader支持 base64 编码的行内资源
            loader: 'url-loader?size=8192'
        }]
    }
};