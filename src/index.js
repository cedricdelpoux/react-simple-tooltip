import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Arrow from "./components/Arrow"
import Tooltip from "./components/Tooltip"
import Bubble from "./components/Bubble"

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
      fixed,
      fontFamily,
      fontSize,
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
        offset={arrow}
        zIndex={zIndex}
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
        onMouseEnter={!fixed && this.handleMouseEnter}
        onMouseLeave={!fixed && this.handleMouseLeave}
        {...props}
      >
        {children}
        {tooltipElement}
      </Container>
    ) : (
      <Container {...props}>{tooltipElement}</Container>
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
  fixed: PropTypes.bool,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
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
  fixed: false,
  fontFamily: "inherit",
  fontSize: "inherit",
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
