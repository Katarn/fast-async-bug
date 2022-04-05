module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                modules: false,
                exclude: ["transform-async-to-generator", "transform-regenerator"],
                ignoreBrowserslistConfig: true
            }
        ]
    ],

    plugins: [
        ["module:fast-async", {
            spec: true,
            loose: true
        }]
    ]
}
