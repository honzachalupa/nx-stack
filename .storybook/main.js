const getCustomWebpackConfig = require("../packages/apps/react-app/webpack.config.js");

module.exports = {
    /* TODO: Compose all SBs to one.
    refs: {
        public: {
            title: "Public Web",
            url: "https://61d326c7afa478003ad39c6f-xfvhfkijdy.chromatic.com",
        },
    }, */
    stories: [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: ["@storybook/addon-essentials"],
    webpackFinal: (config) =>
        getCustomWebpackConfig(config, { isStorybookMode: true }),
};
