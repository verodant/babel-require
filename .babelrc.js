const presets = [[
  "@babel/preset-env",
  {
    //"useBuiltIns": "entry",
    "targets": {
      "ie": "11"
    }
  }
]];
const plugins = ["@babel/plugin-transform-modules-amd",
  "@babel/plugin-transform-regenerator",
  [
    "@babel/plugin-proposal-decorators",
    { "legacy": true }
  ],
  "@babel/plugin-external-helpers"];

/* require("@babel/register")({
  ignore: []
}); */



module.exports = { presets, plugins };