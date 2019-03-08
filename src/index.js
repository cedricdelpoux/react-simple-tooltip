import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Arrow from "./components/Arrow"
import Tooltip from "./components/Tooltip"
import Bubble from "./components/Bubble"
import {easingPropType} from "./utils/propTypes"

const Container = styled.div`
  position: relative;
  display: inline-block;
`

class Wrapper extends React.Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    this.setState({open: true})
  }

  handleMouseLeave() {
    this.setState({open: false})
  }

  render() {
    const {open} = this.state
    const {
      arrow,
      background,
      border,
      children,
      color,
      content,
      customCss,
      fadeDuration,
      fadeEasing,
      fixed,
      fontFamily,
      fontSize,
      offset,
      padding,
      placement,
      radius,
      zIndex,
      ...props
    } = this.props
    const hasTrigger = children !== undefined && children !== null
    const tooltipElement = (
      <Tooltip
        open={!hasTrigger || fixed ? true : open}
        placement={placement}
        offset={offset + arrow}
        zIndex={zIndex}
        fadeEasing={fadeEasing}
        fadeDuration={fadeDuration}
      >
        <Bubble
          background={background}
          border={border}
          color={color}
          radius={radius}
          fontFamily={fontFamily}
          fontSize={fontSize}
          padding={padding}
        >
          <Arrow
            width={arrow}
            background={background}
            border={border}
            color={color}
            placement={placement}
          />
          {content}
        </Bubble>
      </Tooltip>
    )
    return hasTrigger ? (
      <Container
        onMouseEnter={!fixed ? this.handleMouseEnter : undefined}
        onMouseLeave={!fixed ? this.handleMouseLeave : undefined}
        css={customCss}
        {...props}
      >
        {children}
        {tooltipElement}
      </Container>
    ) : (
      <Container css={customCss} {...props}>
        {tooltipElement}
      </Container>
    )
  }
}

Wrapper.propTypes = {
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
