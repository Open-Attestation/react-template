// use craco until https://github.com/facebook/create-react-app/issues/9887 is fixed
// if not, RJ will resign
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const EXCLUDED_PLUGINS = ["ESLintWebpackPlugin"];
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => !EXCLUDED_PLUGINS.includes(plugin.constructor.name)
      );
      return webpackConfig;
    },
  },
};
