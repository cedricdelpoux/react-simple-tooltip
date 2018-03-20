import {mount} from "enzyme"
import React from "react"
import Tooltip from "./index"
import TooltipElement from "./components/Tooltip"

/*eslint-env browser*/

jest.useFakeTimers()

describe("Tooltip", () => {
  const render = props =>
    mount(
      <Tooltip content={"my content"} {...props}>
        <button>Hover Me</button>
      </Tooltip>
    )

  const renderWithoutChildren = props =>
    mount(<Tooltip content={"my content"} {...props} />)

  it("should render", () => {
    const wrapper = render()
    expect(wrapper).toMatchSnapshot()
  })

  it("Should render without children", () => {
    const wrapper = renderWithoutChildren()
    expect(wrapper).toMatchSnapshot()
  })

  it("Should render when there is an offset", () => {
    const arrowSize = 8
    const arrowOffset = 8
    const wrapper = render({arrow: arrowSize, offset: arrowOffset})
    const toolTip = wrapper.find(TooltipElement)
    expect(toolTip.prop("offset")).toEqual(arrowSize + arrowOffset)
  })

  it("should open when user hovers and close when the mouse leaves", () => {
    const wrapper = render()
    const container = wrapper
      .findWhere(n => typeof n.prop("onMouseEnter") === "function")
      .first()
    const toolTip = wrapper.find(TooltipElement)

    // Expect tooltip to be closed by default
    expect(wrapper.state("open")).toEqual(false)
    expect(toolTip.prop("open")).toEqual(false)

    // Simulate a mouse enter event
    container.simulate("mouseEnter")
    wrapper.update()

    // Expect the tooltip to be open
    expect(wrapper.state("open")).toEqual(true)
    expect(toolTip.prop("open")).toEqual(true)

    // Simulate a mouse leave event
    container.simulate("mouseLeave")
    wrapper.update()

    // Expect the tooltip to be closed
    expect(wrapper.state("open")).toEqual(false)
    expect(toolTip.prop("open")).toEqual(false)
  })

  it("should open when user hovers and close when the mouse leaves, after the timeout", () => {
    const exitTimeout = 1000
    const wrapper = render({exitTimeout})
    const container = wrapper
      .findWhere(n => typeof n.prop("onMouseEnter") === "function")
      .first()
    const toolTip = wrapper.find(TooltipElement)

    // Expect tooltip to be closed by default
    expect(wrapper.state("open")).toEqual(false)
    expect(toolTip.prop("open")).toEqual(false)

    // Simulate a mouse enter event
    container.simulate("mouseEnter")
    wrapper.update()

    // Expect the tooltip to be open
    expect(wrapper.state("open")).toEqual(true)
    expect(toolTip.prop("open")).toEqual(true)

    // Simulate a mouse leave event
    container.simulate("mouseLeave")
    wrapper.update()

    // Expect the tooltip not to be closed
    expect(wrapper.state("open")).toEqual(true)
    expect(toolTip.prop("open")).toEqual(true)

    // Expect that the timeout was called once, with the duration
    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      exitTimeout
    )
  })
})
