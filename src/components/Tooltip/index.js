import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Base = styled.div`
  position: absolute;
  ${props => props.zIndex && `z-index: ${props.zIndex};`};
`

const Top = Base.extend`
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  ${props => props.offset && `margin-bottom: ${props.offset}px;`};
`

const Bottom = Base.extend`
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  ${props => props.offset && `margin-top: ${props.offset}px;`};
`

const Left = Base.extend`
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.offset && `margin-right: ${props.offset}px;`};
`

const Right = Base.extend`
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.offset && `margin-left: ${props.offset}px;`};
`

const tooltips = {
  left: Left,
  top: Top,
  right: Right,
  bottom: Bottom,
}

const Tooltip = ({children, open, zIndex, placement, offset}) => {
  const Component = tooltips[placement] || tooltips.top
  return (
    open && (
      <Component open={open} zIndex={zIndex} offset={offset}>
        {children}
      </Component>
    )
  )
}

Tooltip.propTypes = {
  children: PropTypes.any.isRequired,
  open: PropTypes.bool,
  zIndex: PropTypes.number,
  placement: PropTypes.string,
  offset: PropTypes.number,
}

export default Tooltip
