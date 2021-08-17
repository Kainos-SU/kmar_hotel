module.exports = {
    publicPath: "./",
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                prependData: `
                @import "~@/scss/_variables.scss";`
            }
        }
    }
}