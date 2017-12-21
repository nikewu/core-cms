const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

function resolve(dir) {
  return path.join(__dirname, dir);
}
const isProduction = process.env.NODE_ENV === 'production';
const isLocal = process.env.NODE_ENV === 'local';

const cssLoaderOptions = {
  minimize: {
    core: isProduction,
    safe: true,
    autoprefixer: {
      browsers: ['iOS >= 5', 'android >= 2.0', 'ie >= 8'],
      remove: false,
      add: true
    }
  }
};
console.log(process.env.NODE_ENV);
const config = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: resolve('dist'),
    filename: path.posix.join('static', 'js/[name].[hash:7].js'),
    chunkFilename: path.posix.join('static', 'js/[id].[chunkhash:7].js'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src'), resolve('test')],
      options: {
        configFile: resolve('.eslintrc.json'),
        ignorePath: resolve('.eslintignore')
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      include: [resolve('src'), resolve('test')],
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: [{
              loader: 'css-loader',
              options: cssLoaderOptions
            }],
            fallback: 'vue-style-loader'
          })
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test')]
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: cssLoaderOptions
        }]
      })
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
      }
    }]
  },
  watch: isLocal,
  devServer: {
    contentBase: resolve('dist'),
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 11803
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProduction ? '"production"' : '"development"',
      'process.env': isProduction ? '"production"' : '"development"',
      'process.isLocal': isLocal ? 'true' : 'false',
      'process.PROJECT_NAME': '"core-cms"'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sourceMap: isProduction
      }
    }),
    new ExtractTextPlugin({
      filename: path.posix.join('static', 'css/[name].[contenthash:7].css')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      minify: isProduction ? {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      } : false,
      chunksSortMode: 'dependency'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   minChunks: function(module) {
    //     return module.context && module.context.indexOf('node_modules') !== -1;
    //   }
    // }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // }),
    new CopyWebpackPlugin([{
      from: resolve('static'),
      to: 'static',
      ignore: ['.*']
    }])
  ]
};

if (isProduction) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    sourceMap: true
  }));
}
if (isLocal) {
  config.plugins.push(new DashboardPlugin());
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;