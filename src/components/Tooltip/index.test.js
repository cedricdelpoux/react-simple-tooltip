import {mount} from "enzyme"
import React from "react"
import Tooltip from "./index"
import * as emotion from "emotion"
import {matchers, createSerializer} from "jest-emotion"

expect.extend(matchers)
expect.addSnapshotSerializer(createSerializer(emotion))

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
    const wrappers = [
      mount(TooltipUpFixture),
      mount(TooltipBottomFixture),
      mount(TooltipLeftFixture),
      mount(TooltipRightFixture),
    ]

    wrappers.forEach(wrapper => {
      expect(wrapper).not.toHaveStyleRule("animation")
      expect(wrapper).toMatchSnapshot()
    })
  })

  it("do not render", () => {
    expect(
      mount(NoTooltipFixture)
        .children()
        .get(0)
    ).toBeFalsy()
  })

  it("should create a Tooltip with an animation", () => {
    const wrapper = mount(
      <Tooltip {...tooltipProps} fadeDuration={100} fadeEasing={"ease-out"} />
    )
    expect(wrapper).toHaveStyleRule("animation", /100ms ease-out 0s 1 \w+/)
    expect(wrapper).toMatchSnapshot()
  })
})
