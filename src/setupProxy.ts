// const proxy = require('http-proxy-middleware');

import proxy from "http-proxy-middleware";

export default (app: any) => {
  app.use(
    "/etd-online-be",
    proxy({
      target: "http://203.99.188.71:8080",
      changeOrigin: true
    })
  );
};
