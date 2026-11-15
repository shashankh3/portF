const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  // PUBLIC_PATH lets the Pages build serve from /<repo>/ while Netlify/root
  // deployments keep using '/'.
  publicPath: process.env.PUBLIC_PATH || '/'
})
