import {mount} from "enzyme"
import React from "react"
import Tooltip from "./index"

const tooltipProps = {
  offset: 8,
  zIndex: 8,
  open: true,
  children: "😎",
}
const TooltipUpFixture = <Tooltip placement="bottom" {...tooltipProps} />
const TooltipBottomFixture = <Tooltip placement="top" {...tooltipProps} />
const TooltipLeftFixture = <Tooltip placement="right" {...tooltipProps} />
const TooltipRightFixture = <Tooltip placement="left" {...tooltipProps} />
const NoTooltipFixture = <Tooltip {...tooltipProps} open={false} />

describe("Tooltip", () => {
  it("renders", () => {
    mount(TooltipUpFixture)
    mount(TooltipBottomFixture)
    mount(TooltipLeftFixture)
    mount(TooltipRightFixture)
  })

  it("do not render", () => {
    mount(NoTooltipFixture)
  })
})
