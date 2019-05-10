/** @jsx jsx */
import PropTypes from "prop-types"
import {css, jsx} from "@emotion/core"

const Bubble = props => (
  <div
    css={css`
      color: ${props.color ? props.color : "inherit"};
      background: ${props.background ? props.background : "inherit"};
      border-radius: ${props.radius ? `${props.radius}px` : 0};
      border: 1px solid ${props.border};
      padding: ${props.padding ? `${props.padding}px` : 0};
      font-size: ${props.fontSize};
      font-family: ${props.fontFamily};
    `}
  >
    {props.children}
  </div>
)

Bubble.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  padding: PropTypes.number,
  radius: PropTypes.number,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
  children: PropTypes.array,
}

export default Bubble
