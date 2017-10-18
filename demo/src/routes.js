import React from "react"
import ReactSimpleTooltip from "../../src"

import demoHtml from "./demo.md"
import readmeHtml from "../../README.md"

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
        <ReactSimpleTooltip placement="top" content="😎" arrow={15}>
          <button>Hover me !</button>
        </ReactSimpleTooltip>
      ),
      displayName: "ReactSimpleTooltip",
      hiddenProps: ["children"],
      html: demoHtml,
    },
    label: "Demo",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
