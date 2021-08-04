module.exports = {
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            sass: {
                prependData: `@import "~@/scss/main.scss";`
            }
        }
    }
}