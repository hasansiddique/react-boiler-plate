const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://bleeding-netorc.wanclouds.net/',
      changeOrigin: true,
    }),
  );
};
