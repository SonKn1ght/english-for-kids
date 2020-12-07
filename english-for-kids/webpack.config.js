const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.[hash].js',
    path: path.join(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    port: 9001,
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        loader: 'style-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        loader: 'css-loader',
      },
      {
        test: /\.s(a|c)ss$/,
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.(png|jpeg|gif|svg|jpg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: (file) => {
            const imagesPath = file.split('src/')[1];
            return imagesPath;
          },
        },
      },
      {
        test: /\.(mp3|wav)$/i,
        loader: 'file-loader',
        options: {
          name: 'audio/[name].[ext]',
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: ['url-loader'],
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss', '.mp3'],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: true }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.join(__dirname, 'src', 'index.html'),
      filename: path.join(__dirname, 'dist', 'index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, 'src', 'assets'), to: path.join(__dirname, 'dist', 'assets') },
        { from: path.join(__dirname, 'src', 'favicon.ico'), to: path.join(__dirname, 'dist', 'favicon.ico') },
      ],
    }),
  ],
};

