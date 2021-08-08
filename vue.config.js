module.exports = {
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