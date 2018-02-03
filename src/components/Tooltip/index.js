import React from "react"
import PropTypes from "prop-types"
import styled, {keyframes} from "styled-components"
import {fadeEasingPropType} from "../../utils/propTypes"

const createAnimation = props => {
  const fadeAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `

  return `animation:
    ${props.fadeDuration}s
    ${props.fadeEasing}
    0s
    1
    ${fadeAnimation}
  `
}

// prettier-ignore
const Base = styled.div`
  position: absolute;
  ${props => props.fadeDuration && `${createAnimation(props)}`}
  ${props => props.zIndex && `z-index: ${props.zIndex};`};
`

const Top = Base.extend`
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: ${props => props.offset}px;
`

const Bottom = Base.extend`
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${props => props.offset}px;
`

const Left = Base.extend`
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: ${props => props.offset}px;
`

const Right = Base.extend`
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${props => props.offset}px;
`

const tooltips = {
  left: Left,
  top: Top,
  right: Right,
  bottom: Bottom,
}

const Tooltip = ({
  children,
  offset,
  open,
  placement,
  zIndex,
  fadeDuration,
  fadeEasing,
}) => {
  const Component = tooltips[placement] || tooltips.top
  return (
    open && (
      <Component
        offset={offset}
        open={open}
        zIndex={zIndex}
        fadeDuration={fadeDuration}
        fadeEasing={fadeEasing}
      >
        {children}
      </Component>
    )
  )
}

Tooltip.propTypes = {
  children: PropTypes.any.isRequired,
  offset: PropTypes.number,
  open: PropTypes.bool,
  placement: PropTypes.string,
  zIndex: PropTypes.number,
  fadeEasing: fadeEasingPropType,
  fadeDuration: PropTypes.number,
}

export default Tooltip
