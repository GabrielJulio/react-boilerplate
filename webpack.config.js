const path = require('path')
const { CleanWebPackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/assets/js'),
    publicPath: '/public/assets/js',
    filename: 'bundle.js',
    resolve: {
      extensions: [
        '.ts',
        '.tsx',
        '.js',
        '.scss'
      ],
      alias: {
        '@': path.join(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /.ts(x?)$/,
          loader: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          user: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            {
              loader: 'sass-loader'
            }
          ],
          loader: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    devServer: {
      contentBase: './public',
      writeToDisk: true,
      historyApiFallback: true
    },
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  },
  plugins: [
    new CleanWebPackPlugin()
  ]
}