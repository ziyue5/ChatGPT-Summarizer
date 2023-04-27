/*
  Code from
  Source: Creating a Chrome extension with React and TypeScript
  Author: Juan Cruz Martinez
  Website: LogRocket Blog
  Date: August 12, 2021
  URL: https://blog.logrocket.com/creating-chrome-extension-react-typescript/
*/
module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                    content: './src/chromeServices/DOMEvaluator.ts',
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                }
            }
        },
    }
 }
 