module.exports = api => {
  const isTest = api.env('test');

  const presets = [[
    "@babel/preset-env",
    {

      "targets": {
        "ie": "11",
        "node": "current",
        "esmodules": "auto"
      },
      /* modules: 'commonjs' */
    }
  ]];

  const plugins = [
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-transform-runtime"
  ]


  /*   const plugins = [
      "@babel/plugin-transform-modules-amd",
      "@babel/plugin-transform-regenerator",
      [
        "@babel/plugin-proposal-decorators",
        { "legacy": true }
      ],
      "@babel/plugin-external-helpers",
      [
        "@pika/web/assets/babel-plugin.js",
        { "dir": "./dist/web_modules" }
      ]
    ]; */

  return { presets, plugins }
};