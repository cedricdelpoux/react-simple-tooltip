/** @jsx jsx */
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

const BaseToolTop = ({fn, children, ...props}) => (
  <div css={fn(props)}>{children}</div>
)

BaseToolTop.propTypes = {
  fn: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  offset: PropTypes.number,
  open: PropTypes.bool,
  zIndex: PropTypes.number,
  fadeEasing: easingPropType,
  fadeDuration: PropTypes.number,
}

const tooltips = {
  left: ({children, ...props}) => BaseToolTop({fn: Left, children, ...props}),
  top: ({children, ...props}) => BaseToolTop({fn: Top, children, ...props}),
  right: ({children, ...props}) => BaseToolTop({fn: Right, children, ...props}),
  bottom: ({children, ...props}) =>
    BaseToolTop({fn: Bottom, children, ...props}),
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
