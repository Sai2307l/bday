/** @type {import('next').NextConfig} */
const config = {
  webpack: function (config: any, options: any) {
    config.module.rules.push({
      test: /\.(mp4|mp3|ogv|oga|webm)$/i,
      type: "asset/resource",
      generator: {
        emit: true,
        filename:
          (options.isServer ? "../" : "") +
          "static/media/[name].[contenthash:8][ext]",
        publicPath:
          (config.assetPrefix ?? config.basePath ?? "") +
          "/_next/static/media/",
      },
    });
    return config;
  },
};

module.exports = config;
