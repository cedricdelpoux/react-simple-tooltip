/** @jsx jsx */
import PropTypes from "prop-types"
import {css, jsx} from "@emotion/core"

const Base = props => css`
  position: absolute;
  width: ${props.width}px;
  height: ${props.width}px;
  background: ${props.background};
`

const Up = props => css`
  ${Base(props)};
  transform: translateX(-50%) translateY(50%) rotateZ(45deg);
  bottom: 100%;
  left: 50%;
  border-left: 1px solid ${props.border};
  border-top: 1px solid ${props.border};
`
const Down = props => css`
  ${Base(props)};
  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
  top: 100%;
  left: 50%;
  border-right: 1px solid ${props.border};
  border-bottom: 1px solid ${props.border};
`
const Left = props => css`
  ${Base(props)};
  transform: translateX(50%) translateY(-50%) rotateZ(45deg);
  right: 100%;
  top: 50%;
  border-left: 1px solid ${props.border};
  border-bottom: 1px solid ${props.border};
`

const Right = props => css`
  ${Base(props)};
  transform: translateX(-50%) translateY(-50%) rotateZ(45deg);
  left: 100%;
  top: 50%;
  border-right: 1px solid ${props.border};
  border-top: 1px solid ${props.border};
`

const BaseArrow = ({fn, ...props}) => <div css={fn(props)} />

BaseArrow.propTypes = {
  fn: PropTypes.func.isRequired,
  background: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

const arrows = {
  left: props => BaseArrow({fn: Right, ...props}),
  top: props => BaseArrow({fn: Down, ...props}),
  right: props => BaseArrow({fn: Left, ...props}),
  bottom: props => BaseArrow({fn: Up, ...props}),
}

const Arrow = ({background, border, placement, width}) => {
  const Component = arrows[placement] || arrows.top
  return (
    width > 0 && (
      <Component background={background} border={border} width={width} />
    )
  )
}

Arrow.propTypes = {
  background: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  placement: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
}

export default Arrow
