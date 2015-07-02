# react-simple-tooltip

A lightweight and simple tooltip component for React

## Install

```sh
npm install --save react-simple-tooltip
```

[![react-simple-tooltip](https://nodei.co/npm/react-simple-tooltip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-simple-tooltip/)

## Changelog

See [changelog](./CHANGELOG.md)

## Usage

### Exemple

![Tooltip exemple](/screenshots/themed-tooltips.png)

```js
import React, { Component } from 'react'
import { Tooltip } from 'react-simple-tooltip'

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
              <div>Line 1</div>
              <div>Line 2</div> 
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

  * `placement`: String - one of ['top', 'right', 'bottom', 'left']
  * `theme`: String - one of ['black', 'grey', 'blue', 'green', 'yellow', 'red']
  * `trigger`: React element

## Development

### Clean `lib` folder

```js
npm run clean
```

### Build `lib` folder

```js
npm run build
```

### Watch `src` folder

```js
npm run watch
```

### Lint `src` folder

```js
npm run build
```

## License

See [MIT](./LICENCE)
