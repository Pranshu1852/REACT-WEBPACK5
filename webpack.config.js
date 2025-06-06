const path=require('path')

module.exports={
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/main.tsx') 
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
}