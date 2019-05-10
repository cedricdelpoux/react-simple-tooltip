"use strict"

exports.__esModule = true

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

var _propTypes = require("prop-types")

var _propTypes2 = _interopRequireDefault(_propTypes)

var _core = require("@emotion/core")

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {default: obj}
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
} /** @jsx jsx */

var Bubble = function Bubble(props) {
  return (0, _core.jsx)(
    "div",
    {
      css: (0, _core.css)(
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
        color: _propTypes2.default.string,
        background: _propTypes2.default.string,
        border: _propTypes2.default.string,
        padding: _propTypes2.default.number,
        radius: _propTypes2.default.number,
        fontSize: _propTypes2.default.string,
        fontFamily: _propTypes2.default.string,
        children: _propTypes2.default.array,
      }
    : {}

exports.default = Bubble
module.exports = exports["default"]
