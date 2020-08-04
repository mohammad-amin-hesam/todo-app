const withPlugins = require("next-compose-plugins");
const withSourceMaps = require("@zeit/next-source-maps")();
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins(
  [withBundleAnalyzer({})],
  [
    withSourceMaps({
      webpack(config, _options) {
        return config;
      },
    }),
  ],
  [
    withCSS({
      webpack: function (config) {
        config.module.rules.push({
          test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
          use: {
            loader: "url-loader",
            options: {
              limit: 100000,
              name: "[name].[ext]",
            },
          },
        });
        return config;
      },
    }),
  ],
  [withSass({})]
);
