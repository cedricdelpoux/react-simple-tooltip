import './demo.css'
import 'react-simple-tooltip/lib/index.css'

import React, { Component } from 'react'
import Tooltip from 'react-simple-tooltip'

export default class Demo extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      placement: 'top',
      theme: 'black',
      trigger: null,
    }
  }

  handlePlacementChange(placement) {
    this.setState({ placement })
  }

  handleThemeChange(theme) {
    this.setState({ theme })
  }

  handleHover(trigger) {
    this.setState({ trigger })
  }

  render() {
    const { placement, theme, trigger } = this.state

    return (
      <div className="demo">
        <div className="demo_options">
          <label className="demo_label">Placement :</label>
          <select
            className="demo_select"
            defaultValue={ placement }
            onChange={ (e) => this.handlePlacementChange(e.target.value) }
          >
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
            <option value="left">Left</option>
            <option value="right">Right</option>
          </select>
          <label className="demo_label">Theme :</label>
          <select
            className="demo_select"
            defaultValue={ theme }
            onChange={ (e) => this.handleThemeChange(e.target.value) }
          >
            <option value="black">Black</option>
            <option value="grey">Grey</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
          </select>
        </div>
        <div>
          { trigger
            ? (
              <Tooltip placement={ placement } theme={ theme } trigger={ trigger }>
                <div>react-simple-tooltip</div>
                <div>By cedricdelpoux</div>
              </Tooltip>
            )
            : null
          }
          <span
            className="demo_circle"
            onMouseEnter={ (e) => this.handleHover(e.target) }
            onMouseLeave={ (e) => this.handleHover(null) }
          >
            Hover me
          </span>
        </div>
      </div>
    )
  }
}
