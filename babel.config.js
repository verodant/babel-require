module.exports = api => {
  const isTest = api.env('test'); //para configurar los entornos

  const presets = ["@babel/preset-env"];

  const plugins = [
    "@babel/plugin-transform-regenerator",
    "@babel/plugin-transform-runtime"
  ]

  return { presets, plugins }
};