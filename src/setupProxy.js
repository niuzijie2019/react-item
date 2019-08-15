const proxy = require('http-proxy-middleware');
// // import proxy from 'http-proxy-middleware';

module.exports = function(app) {
  app.use(
    proxy('/api',{
      target:'http://47.100.225.183:9000',
      changeOrigin:true,
      pathRewrite:{
        "^/api":''
      }
    })
  )
}

