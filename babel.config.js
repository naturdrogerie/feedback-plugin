const presets = [
    [
        "@babel/env",
        {
            useBuiltIns: "usage",
            corejs: "3.37.1",
            targets: {
                esmodules: true
            },
            bugfixes: true
        }
    ]
];

const plugins = [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-object-rest-spread"
];

module.exports = { presets, plugins };
