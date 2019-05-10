"use strict"

exports.__esModule = true
exports.easingPropType = undefined

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

var normalEasingPropType = _propTypes2.default.oneOf([
  "linear",
  "ease",
  "ease-in",
  "ease-out",
  "ease-in-out",
])

// A regex to test if a string matches the CSS cubic-beizer format
// cubic-bezier(n,n,n,n)
// See: https://regex101.com/r/n2fAzV for details
var cubicEasingRegex = /^cubic-bezier\((-?((\d*\.\d+)|\d+),){3}(-?(\d*\.\d+)|\d+)\)$/

var cubicEasingPropType = function cubicEasingPropType(
  props,
  propName,
  componentName
) {
  if (!cubicEasingRegex.test(props[propName])) {
    return new Error(
      "Invalid prop `" +
        propName +
        "` supplied to" +
        " `" +
        componentName +
        "`. Validation failed."
    )
  }
}

var easingPropType = _propTypes2.default.oneOfType([
  normalEasingPropType,
  cubicEasingPropType,
])

exports.easingPropType = easingPropType
