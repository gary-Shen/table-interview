const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://10.2.3.103:55555',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  );
};