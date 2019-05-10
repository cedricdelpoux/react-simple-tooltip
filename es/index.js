var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _templateObject = _taggedTemplateLiteralLoose(
    ["\n  position: relative;\n  display: inline-block;\n"],
    ["\n  position: relative;\n  display: inline-block;\n"]
  ),
  _templateObject2 = _taggedTemplateLiteralLoose(
    ["\n          ", ";\n          ", "\n        "],
    ["\n          ", ";\n          ", "\n        "]
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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function")
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError(
      "Super expression must either be null or a function, not " +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _taggedTemplateLiteralLoose(strings, raw) {
  strings.raw = raw
  return strings
}

/** @jsx jsx */
import React from "react"
import PropTypes from "prop-types"
import {css, jsx} from "@emotion/core"

import Arrow from "./components/Arrow"
import Tooltip from "./components/Tooltip"
import Bubble from "./components/Bubble"
import {easingPropType} from "./utils/propTypes"

var ContainerCss = css(_templateObject)

var Wrapper = (function(_React$Component) {
  _inherits(Wrapper, _React$Component)

  function Wrapper() {
    _classCallCheck(this, Wrapper)

    var _this = _possibleConstructorReturn(this, _React$Component.call(this))

    _this.state = {
      open: false,
    }

    _this.handleMouseEnter = _this.handleMouseEnter.bind(_this)
    _this.handleMouseLeave = _this.handleMouseLeave.bind(_this)
    return _this
  }

  Wrapper.prototype.handleMouseEnter = function handleMouseEnter() {
    this.setState({open: true})
  }

  Wrapper.prototype.handleMouseLeave = function handleMouseLeave() {
    this.setState({open: false})
  }

  Wrapper.prototype.render = function render() {
    var open = this.state.open

    var _props = this.props,
      arrow = _props.arrow,
      background = _props.background,
      border = _props.border,
      children = _props.children,
      color = _props.color,
      content = _props.content,
      customCss = _props.customCss,
      fadeDuration = _props.fadeDuration,
      fadeEasing = _props.fadeEasing,
      fixed = _props.fixed,
      fontFamily = _props.fontFamily,
      fontSize = _props.fontSize,
      offset = _props.offset,
      padding = _props.padding,
      placement = _props.placement,
      radius = _props.radius,
      zIndex = _props.zIndex,
      props = _objectWithoutProperties(_props, [
        "arrow",
        "background",
        "border",
        "children",
        "color",
        "content",
        "customCss",
        "fadeDuration",
        "fadeEasing",
        "fixed",
        "fontFamily",
        "fontSize",
        "offset",
        "padding",
        "placement",
        "radius",
        "zIndex",
      ])

    var hasTrigger = children !== undefined && children !== null
    var tooltipElement = jsx(
      Tooltip,
      {
        open: !hasTrigger || fixed ? true : open,
        placement: placement,
        offset: offset + arrow,
        zIndex: zIndex,
        fadeEasing: fadeEasing,
        fadeDuration: fadeDuration,
      },
      jsx(
        Bubble,
        {
          background: background,
          border: border,
          color: color,
          radius: radius,
          fontFamily: fontFamily,
          fontSize: fontSize,
          padding: padding,
        },
        jsx(Arrow, {
          width: arrow,
          background: background,
          border: border,
          color: color,
          placement: placement,
        }),
        content
      )
    )
    return hasTrigger
      ? jsx(
          "div",
          _extends(
            {
              onMouseEnter: !fixed ? this.handleMouseEnter : undefined,
              onMouseLeave: !fixed ? this.handleMouseLeave : undefined,
              css: css(_templateObject2, ContainerCss, customCss),
            },
            props
          ),
          children,
          tooltipElement
        )
      : jsx(
          "div",
          _extends(
            {
              css: css(_templateObject2, ContainerCss, customCss),
            },
            props
          ),
          tooltipElement
        )
  }

  return Wrapper
})(React.Component)

Wrapper.propTypes =
  process.env.NODE_ENV !== "production"
    ? {
        arrow: PropTypes.number,
        background: PropTypes.string,
        border: PropTypes.string,
        children: PropTypes.any,
        color: PropTypes.string,
        content: PropTypes.any.isRequired,
        customCss: PropTypes.any,
        fadeDuration: PropTypes.number,
        fadeEasing: easingPropType,
        fixed: PropTypes.bool,
        fontFamily: PropTypes.string,
        fontSize: PropTypes.string,
        offset: PropTypes.number,
        padding: PropTypes.number,
        placement: PropTypes.oneOf(["left", "top", "right", "bottom"]),
        radius: PropTypes.number,
        zIndex: PropTypes.number,
      }
    : {}

Wrapper.defaultProps = {
  arrow: 8,
  background: "#000",
  border: "#000",
  children: null,
  color: "#fff",
  fadeDuration: 0,
  fadeEasing: "linear",
  fixed: false,
  fontFamily: "inherit",
  fontSize: "inherit",
  offset: 0,
  padding: 16,
  placement: "top",
  radius: 0,
  zIndex: 1,
}

Wrapper.displayName = "Tooltip.Wrapper"
Tooltip.displayName = "Tooltip"
Bubble.displayName = "Tooltip.Bubble"
Arrow.displayName = "Tooltip.Arrow"

export default Wrapper
