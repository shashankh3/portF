const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // PUBLIC_PATH lets the Pages build serve from /<repo>/ while Netlify/root
  // deployments keep using '/'.
  publicPath: process.env.PUBLIC_PATH || '/',
  configureWebpack: {
    performance: {
      // Static demo videos, PDF resume, and source maps are not part of the
      // initial render payload. Keep size checks active for JS/CSS bundles.
      assetFilter: (assetFilename) => !/\.(map|mp4|pdf)$/i.test(assetFilename)
    }
  }
});
