# react-simple-tooltip

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

A lightweight and simple tooltip component for React

## Getting started

[![react-simple-tooltip](https://nodei.co/npm/react-simple-tooltip.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-simple-tooltip/)

You can download `react-simple-tooltip` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-simple-tooltip
npm install react-simple-tooltip --save
```

If you don't use package manager and you want to include `react-simple-tooltip` directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-simple-tooltip/dist/react-simple-tooltip.min.js.
```

## Usage

### Attached to a Component

```javascript
import React from "react"
import Tooltip from "react-simple-tooltip"

const App = () => (
  <Tooltip content="😎">
    <button>Hover me !</button>
  </Tooltip>
)
```

### Standalone

```javascript
import React from "react"
import Tooltip from "react-simple-tooltip"

const App = () => (
  <div style={{position: "relative"}}>
    <Tooltip
      style={{position: "absolute", top: "50%", right: "0"}}
      content="😎"
    />
  </div>
)
```

### Custom css

```javascript
import React from "react"
import Tooltip from "react-simple-tooltip"
import {css} from "styled-components"

const App = () => (
  <Tooltip
    content="😎"
    customCss={css`
      white-space: nowrap;
    `}
  >
    <button>Hover me !</button>
  </Tooltip>
)
```

## Demo

See [Demo page][github-page]

## Props

| Name         | PropType                                            | Description                        | Default   |
| ------------ | --------------------------------------------------- | ---------------------------------- | --------- |
| arrow        | PropTypes.number                                    | Arrow size, in pixels              | 8         |
| background   | PropTypes.string                                    | Tooltip background color           | "#000"    |
| border       | PropTypes.string                                    | Tooltip border color               | "#000"    |
| color        | PropTypes.string                                    | Tooltip text color                 | "#fff"    |
| content      | PropTypes.any.isRequired                            | Tooltip content                    | -         |
| customCss    | PropTypes.any                                       | Custom css                         | -         |
| fadeDuration | PropTypes.number                                    | Fade duration, in milliseconds     | 0         |
| fadeEasing   | PropTypes.string                                    | Fade easing                        | "linear"  |
| fixed        | PropTypes.bool                                      | Tooltip behavior, hover by default | false     |
| fontFamily   | PropTypes.bool                                      | Tooltip text font-family           | "inherit" |
| fontSize     | PropTypes.bool                                      | Tooltip text font-size             | "inherit" |
| padding      | PropTypes.number                                    | Tooltip padding, in pixels         | 16        |
| placement    | PropTypes.oneOf(["left", "top", "right", "bottom"]) | Tooltip placement                  | "top"     |
| radius       | PropTypes.number                                    | Tooltip border radius              | 0         |
| zIndex       | PropTypes.number                                    | Tooltip z-index                    | 1         |

## Contributing

- ⇄ Pull/Merge requests and ★ Stars are always welcome.
- For bugs and feature requests, please [create an issue][github-issue].
- Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-simple-tooltip.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-simple-tooltip
[build-badge]: https://img.shields.io/travis/xuopled/react-simple-tooltip/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-simple-tooltip
[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-simple-tooltip.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-simple-tooltip
[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square
[github-page]: https://xuopled.github.io/react-simple-tooltip
[github-issue]: https://github.com/xuopled/react-simple-tooltip/issues/new
