# react-simple-tooltip  ![npm](https://img.shields.io/npm/v/react-simple-tooltip.svg) ![license](https://img.shields.io/npm/l/react-simple-tooltip.svg) ![github-issues](https://img.shields.io/github/issues/cedricdelpoux/react-simple-tooltip.svg)

A lightweight and simple tooltip component for React

## Install

```sh
npm install --save react-simple-tooltip
```

[![react-simple-tooltip](https://nodei.co/npm/react-simple-tooltip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-simple-tooltip/)

## Changelog

See [changelog](./CHANGELOG.md)

## Demo 

http://cedricdelpoux.github.io/react-simple-tooltip/

## Usage

### Examples

![Tooltip example](/screenshots/themed-tooltips.png)

#### Fixed Tooltip

```js
import 'react-simple-tooltip/lib/index.css'

import React from 'react'
import Tooltip from 'react-simple-tooltip'

export default class MyComponent {
  render() {
    return (
      <div>
        <Tooltip>
          <div>react-simple-tooltip</div>
          <div>By cedricdelpoux</div> 
        </Tooltip>
      </div>
    )
  }
}
```

#### Hover Tooltip

```js
import 'react-simple-tooltip/lib/index.css'

import React, { Component } from 'react'
import Tooltip from 'react-simple-tooltip'

export default class MyComponent extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      tooltipTrigger: null,
    }
  }

  handleHover(trigger) {
    this.setState({
      tooltipTrigger: trigger,
    })
  }

  render() {
    return (
      <div>
        { this.state.tooltipTrigger
          ? (
            <Tooltip placement="top" trigger={ this.state.tooltipTrigger }>
              <div>react-simple-tooltip</div>
              <div>By cedricdelpoux</div> 
            </Tooltip>
          )
          : null
        }


        <RandomComponent
          onComponentHover={ ::this.handleHover }
        />
      </div>
    )
  }
}
```

### Props

  * `placement`: String - by default is right - one of ['top', 'right', 'bottom', 'left']
  * `theme`: String - by default is black - one of ['black', 'grey', 'blue', 'green', 'yellow', 'red']
  * `trigger`: React element - by default is null

## Development

### Clean `lib` folder

```js
npm run clean
```

### Build `lib` folder

```js
npm run build
```

### Lint `src` folder

```js
npm run build
```

## License

See [MIT](./LICENCE)
