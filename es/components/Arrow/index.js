var _templateObject = _taggedTemplateLiteralLoose(
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ],
    [
      "\n  position: absolute;\n  width: ",
      "px;\n  height: ",
      "px;\n  background: ",
      ";\n",
    ]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(50%) rotateZ(45deg);\n  bottom: 100%;\n  left: 50%;\n  border-left: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  top: 100%;\n  left: 50%;\n  border-right: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(50%) translateY(-50%) rotateZ(45deg);\n  right: 100%;\n  top: 50%;\n  border-left: 1px solid ",
      ";\n  border-bottom: 1px solid ",
      ";\n",
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ],
    [
      "\n  ",
      ";\n  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);\n  left: 100%;\n  top: 50%;\n  border-right: 1px solid ",
      ";\n  border-top: 1px solid ",
      ";\n",
    ]
  )

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

/** @jsx jsx */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import React from "react"
import PropTypes from "prop-types"
import {css, jsx} from "@emotion/core"

var Base = function Base(props) {
  return css(_templateObject, props.width, props.width, props.background)
}

var Up = function Up(props) {
  return css(_templateObject2, Base(props), props.border, props.border)
}
var Down = function Down(props) {
  return css(_templateObject3, Base(props), props.border, props.border)
}
var Left = function Left(props) {
  return css(
    _templateObject4,
    Base(props),
    function(props) {
      return props.border
    },
    function(props) {
      return props.border
    }
  )
}

var Right = function Right(props) {
  return css(
    _templateObject5,
    Base(props),
    function(props) {
      return props.border
    },
    function(props) {
      return props.border
    }
  )
}

var arrows = {
  left: function left(props) {
    return jsx("div", {css: Right(props)})
  },
  top: function top(props) {
    return jsx("div", {css: Down(props)})
  },
  right: function right(props) {
    return jsx("div", {css: Left(props)})
  },
  bottom: function bottom(props) {
    return jsx("div", {css: Up(props)})
  },
}

var Arrow = function Arrow(_ref) {
  var background = _ref.background,
    border = _ref.border,
    placement = _ref.placement,
    width = _ref.width

  var Component = arrows[placement] || arrows.top
  return (
    width > 0 &&
    jsx(Component, {background: background, border: border, width: width})
  )
}

Arrow.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        background: PropTypes.string.isRequired,
        border: PropTypes.string.isRequired,
        placement: PropTypes.string.isRequired,
        width: PropTypes.number.isRequired,
      }
    : {}

export default Arrow
