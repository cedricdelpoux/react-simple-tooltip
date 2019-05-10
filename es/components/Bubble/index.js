var _templateObject = _taggedTemplateLiteralLoose(
  [
    "\n      color: ",
    ";\n      background: ",
    ";\n      border-radius: ",
    ";\n      border: 1px solid ",
    ";\n      padding: ",
    ";\n      font-size: ",
    ";\n      font-family: ",
    ";\n    ",
  ],
  [
    "\n      color: ",
    ";\n      background: ",
    ";\n      border-radius: ",
    ";\n      border: 1px solid ",
    ";\n      padding: ",
    ";\n      font-size: ",
    ";\n      font-family: ",
    ";\n    ",
  ]
)

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

/** @jsx jsx */
import PropTypes from "prop-types"
import {css, jsx} from "@emotion/core"

var Bubble = function Bubble(props) {
  return jsx(
    "div",
    {
      css: css(
        _templateObject,
        props.color ? props.color : "inherit",
        props.background ? props.background : "inherit",
        props.radius ? props.radius + "px" : 0,
        props.border,
        props.padding ? props.padding + "px" : 0,
        props.fontSize,
        props.fontFamily
      ),
    },
    props.children
  )
}

Bubble.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        color: PropTypes.string,
        background: PropTypes.string,
        border: PropTypes.string,
        padding: PropTypes.number,
        radius: PropTypes.number,
        fontSize: PropTypes.string,
        fontFamily: PropTypes.string,
        children: PropTypes.array,
      }
    : {}

export default Bubble
