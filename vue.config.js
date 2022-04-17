module.exports = {
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  configureWebpack: {
    externals: {
      BMap: 'BMap',
      BMap_Symbol_SHAPE_POINT: 'BMap_Symbol_SHAPE_POINT'
    }
  }
}
