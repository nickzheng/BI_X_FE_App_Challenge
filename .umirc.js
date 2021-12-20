export default {
  chainWebpack(config) {
    config.module
      .rule('ttf')
      .test(/.ttf$/)
      .use('file-loader')
      .loader('file-loader');
  },
  hash: true,
  treeShaking: true,
  routes: require('./router'),
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'BI',
        dll: false,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
