/** @jsx jsx */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import React from "react"
import PropTypes from "prop-types"
import {css, keyframes, jsx} from "@emotion/core"
import {easingPropType} from "../../utils/propTypes"

const fadeAnimation = keyframes`
  0% {
      opacity: 0;
  }
  100% {
      opacity: 1;
  }
`

const animation = props => css`
  animation: ${props.fadeDuration}ms ${props.fadeEasing} 0s 1 ${fadeAnimation};
`

// prettier-ignore
// eslint-disable-next-line no-unused-vars
const Base = (props) => css`
  position: absolute;
  ${props.fadeDuration && props.fadeDuration > 0 && animation(props)};
  ${props.zIndex && `z-index: ${props.zIndex};`};
`

const Top = props => css`
  ${Base(props)};
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: ${props.offset}px;
`

const Bottom = props => css`
  ${Base(props)};
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${props.offset}px;
`

const Left = props => css`
  ${Base(props)};
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: ${props.offset}px;
`

const Right = props => css`
  ${Base(props)};
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-left: ${props.offset}px;
`

const tooltips = {
  left: ({children, ...props}) => <div css={Left(props)}>{children}</div>,
  top: ({children, ...props}) => <div css={Top(props)}>{children}</div>,
  right: ({children, ...props}) => <div css={Right(props)}>{children}</div>,
  bottom: ({children, ...props}) => <div css={Bottom(props)}>{children}</div>,
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
  fadeEasing: easingPropType,
  fadeDuration: PropTypes.number,
}

export default Tooltip
