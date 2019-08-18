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
  "@babel/plugin-external-helpers",
  ["@pika/web/assets/babel-plugin.js",
    { "dir": "./dist/web_modules" }
  ]
];

/* require("@babel/register")({
  ignore: ['node_modules'],
  only: [/lit-element/]
});  */



module.exports = { presets, plugins };