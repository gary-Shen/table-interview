const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://my-json-server.typicode.com/gary-Shen/table-interview',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  );
};