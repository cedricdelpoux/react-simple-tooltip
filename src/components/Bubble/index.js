import PropTypes from "prop-types"
import styled from "styled-components"

const Bubble = styled.div`
  color: ${props => (props.color ? props.color : "inherit")};
  background: ${props => (props.background ? props.background : "inherit")};
  border-radius: ${props => (props.radius ? `${props.radius}px` : 0)};
  border: 1px solid ${props => props.border};
  padding: ${props => (props.padding ? `${props.padding}px` : 0)};
  font-size: ${props => props.fontSize};
  font-family: ${props => props.fontFamily};
`

Bubble.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string,
  padding: PropTypes.number,
  radius: PropTypes.number,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string,
}

export default Bubble
