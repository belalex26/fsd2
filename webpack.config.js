const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PAGES_DIR = path.resolve(__dirname, 'src/pages');
const PAGES = fs.readdirSync(PAGES_DIR);

module.exports = {
  resolve: {
    alias: {
      blocks: path.resolve(__dirname, 'src/blocks'),
    },
  },
  entry: {
    main: './src/main.js',
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.s?css$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /img/,
        include: /fonts/,
        use: [
          {
            loader: 'file-loader',
                options: {
                    name: './fonts/[name].[ext]',
                    context: path.resolve(__dirname, "src/"),
                    publicPath: '../',
                    useRelativePaths: true
                }
          }
        ]
      },

      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        exclude: [
          path.resolve(__dirname, 'src/fonts'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images',
            publicPath: "../images"
          },
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      filename: `pages/${page}.html`,
      template: `${PAGES_DIR}/${page}/${page}.pug`,
    })),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    overlay: true,
  },
};