var _templateObject = _taggedTemplateLiteralLoose(
    ["\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n"],
    ["\n  0% {\n      opacity: 0;\n  }\n  100% {\n      opacity: 1;\n  }\n"]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ["\n  animation: ", "ms ", " 0s 1 ", ";\n"],
    ["\n  animation: ", "ms ", " 0s 1 ", ";\n"]
  ),
  _templateObject3 = _taggedTemplateLiteralLoose(
    ["\n  position: absolute;\n  ", ";\n  ", ";\n"],
    ["\n  position: absolute;\n  ", ";\n  ", ";\n"]
  ),
  _templateObject4 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: ",
      "px;\n",
    ],
    [
      "\n  ",
      ";\n  bottom: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-bottom: ",
      "px;\n",
    ]
  ),
  _templateObject5 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: ",
      "px;\n",
    ],
    [
      "\n  ",
      ";\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  margin-top: ",
      "px;\n",
    ]
  ),
  _templateObject6 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: ",
      "px;\n",
    ],
    [
      "\n  ",
      ";\n  right: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-right: ",
      "px;\n",
    ]
  ),
  _templateObject7 = _taggedTemplateLiteralLoose(
    [
      "\n  ",
      ";\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: ",
      "px;\n",
    ],
    [
      "\n  ",
      ";\n  left: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  margin-left: ",
      "px;\n",
    ]
  )

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

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
import {css, keyframes, jsx} from "@emotion/core"
import {easingPropType} from "../../utils/propTypes"

var fadeAnimation = keyframes(_templateObject)

var animation = function animation(props) {
  return css(
    _templateObject2,
    props.fadeDuration,
    props.fadeEasing,
    fadeAnimation
  )
}

// prettier-ignore
// eslint-disable-next-line no-unused-vars
var Base = function Base(props) {
  return css(_templateObject3, props.fadeDuration && props.fadeDuration > 0 && animation(props), props.zIndex && "z-index: " + props.zIndex + ";");
};

var Top = function Top(props) {
  return css(_templateObject4, Base(props), props.offset)
}

var Bottom = function Bottom(props) {
  return css(_templateObject5, Base(props), props.offset)
}

var Left = function Left(props) {
  return css(_templateObject6, Base(props), props.offset)
}

var Right = function Right(props) {
  return css(_templateObject7, Base(props), props.offset)
}

var tooltips = {
  left: function left(_ref) {
    var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"])

    return jsx("div", {css: Left(props)}, children)
  },
  top: function top(_ref2) {
    var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"])

    return jsx("div", {css: Top(props)}, children)
  },
  right: function right(_ref3) {
    var children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["children"])

    return jsx("div", {css: Right(props)}, children)
  },
  bottom: function bottom(_ref4) {
    var children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["children"])

    return jsx("div", {css: Bottom(props)}, children)
  },
}

var Tooltip = function Tooltip(_ref5) {
  var children = _ref5.children,
    offset = _ref5.offset,
    open = _ref5.open,
    placement = _ref5.placement,
    zIndex = _ref5.zIndex,
    fadeDuration = _ref5.fadeDuration,
    fadeEasing = _ref5.fadeEasing

  var Component = tooltips[placement] || tooltips.top
  return (
    open &&
    jsx(
      Component,
      {
        offset: offset,
        zIndex: zIndex,
        fadeDuration: fadeDuration,
        fadeEasing: fadeEasing,
      },
      children
    )
  )
}

Tooltip.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        children: PropTypes.any.isRequired,
        offset: PropTypes.number,
        open: PropTypes.bool,
        placement: PropTypes.string,
        zIndex: PropTypes.number,
        fadeEasing: easingPropType,
        fadeDuration: PropTypes.number,
      }
    : {}

export default Tooltip
