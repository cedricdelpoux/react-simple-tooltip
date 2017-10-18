// eslint-disable-next-line
module.exports = require("babel-jest").createTransformer({
  presets: ["es2015", "react"],
  plugins: ["transform-object-rest-spread"],
})
