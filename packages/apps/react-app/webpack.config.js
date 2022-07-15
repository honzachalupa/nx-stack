const moment = require("moment");
const webpack = require("webpack");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const getWebpackConfig = require("@nrwl/react/plugins/webpack");
const package = require("../../../package.json");
const config = require("../../libs/utils/src/config");

module.exports = (webpackConfig, { isStorybookMode }) => {
    webpackConfig = getWebpackConfig(webpackConfig);

    return {
        ...webpackConfig,
        devServer: {
            ...webpackConfig.devServer,
            host: "0.0.0.0",
            server: {
                type: "https",
            },
        },
        plugins: [
            ...webpackConfig.plugins,
            !isStorybookMode
                ? new WorkboxPlugin.GenerateSW({
                      clientsClaim: true,
                      skipWaiting: true,
                      maximumFileSizeToCacheInBytes: 1000000000,
                  })
                : null,
            !isStorybookMode
                ? new FaviconsWebpackPlugin({
                      logo: "./src/assets/favicon.png",
                      mode: "webapp",
                      outputPath: "favicons",
                      inject: true,
                      favicons: {
                          appName: config.nameShort,
                          developerName: config.developerName,
                          developerURL: config.developerUrl,
                          background: config.backgroundColor,
                          theme_color: config.accentColor,
                          orientation: "portrait",
                          start_url: "/",
                          icons: {
                              appleStartup: false,
                          },
                      },
                  })
                : null,
            new webpack.ProvidePlugin({
                Buffer: ["buffer", "Buffer"],
                process: "process/browser",
            }),
            new webpack.DefinePlugin({
                PROJECT_VERSION: `'${package.version}'`,
                PROJECT_BUILD_TIMESTAMP: `'${moment().format(
                    "D.M.YYYY HH:mm:ss",
                )}'`,
            }),
            /* !isStorybookMode
                ? new BundleAnalyzerPlugin({
                      analyzerMode: "static",
                      reportFilename: "../../tools/bundle-analyzer/report.html",
                  })
                : null, */
        ].filter(Boolean),
        resolve: {
            ...webpackConfig.resolve,
            extensions: [
                ...webpackConfig.resolve.extensions,
                ".jpg",
                ".jpeg",
                ".png",
            ],
            fallback: {
                ...webpackConfig.resolve.fallback,
                path: false,
                stream: require.resolve("stream-browserify"),
                zlib: require.resolve("browserify-zlib"),
            },
        },
        node: {
            ...webpackConfig.node,
            global: true,
        },
    };
};
