/** @jsx jsx */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/display-name */
import React from "react"
import ReactSimpleTooltip from "../../src"
import {css, jsx} from "@emotion/core"

import demoHtml from "./demo.md"
import readmeHtml from "../../README.md"

const Zone = ({children}) => (
  <div
    css={css`
      background: #44b39d;
      color: #fff;
      padding: 10px;
    `}
  >
    {children}
  </div>
)

const data = []

for (let x = 1; x <= 30; x++) {
  data.push({x: x, y: Math.floor(Math.random() * 100)})
}

const routes = [
  {
    path: "/",
    exact: true,
    demo: {
      component: (
        <ReactSimpleTooltip
          placement="top"
          content="😎"
          arrow={15}
          customCss="whitespace: nowrap;"
        >
          <Zone>Hover me !</Zone>
        </ReactSimpleTooltip>
      ),
      displayName: "ReactSimpleTooltip",
      hiddenProps: ["children"],
      html: demoHtml,
    },
    label: "Demo",
  },
  {
    path: "/standalone",
    demo: {
      component: (
        <div
          style={{
            position: "relative",
            height: "100px",
            background: "#fff",
            border: "1px solid #44B39D",
          }}
        >
          <ReactSimpleTooltip
            style={{position: "absolute", bottom: "0", left: "50%"}}
            placement="bottom"
            content="😎"
          />
        </div>
      ),
      displayName: "ReactSimpleTooltip",
      hiddenProps: ["children"],
      html: demoHtml,
    },
    label: "Standalone",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
