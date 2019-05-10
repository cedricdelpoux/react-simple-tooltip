import PropTypes from "prop-types"

var normalEasingPropType = PropTypes.oneOf([
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

var easingPropType = PropTypes.oneOfType([
  normalEasingPropType,
  cubicEasingPropType,
])

export {easingPropType}
