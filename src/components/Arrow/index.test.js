import {mount} from "enzyme"
import React from "react"
import Arrow from "./index"

const arrowProps = {
  background: "#000",
  border: "#0f0",
  color: "#fff",
  width: 8,
}
const ArrowUpFixture = <Arrow placement="bottom" {...arrowProps} />
const ArrowBottomFixture = <Arrow placement="top" {...arrowProps} />
const ArrowLeftFixture = <Arrow placement="right" {...arrowProps} />
const ArrowRightFixture = <Arrow placement="left" {...arrowProps} />
const NoArrowFixture = <Arrow placement="left" {...arrowProps} width={0} />
const ArrowWrongPlacementPropsFixture = (
  <Arrow placement="topp" {...arrowProps} />
)

describe("Arrow", () => {
  it("renders", () => {
    mount(ArrowUpFixture)
    mount(ArrowBottomFixture)
    mount(ArrowLeftFixture)
    mount(ArrowRightFixture)
    mount(ArrowWrongPlacementPropsFixture)
  })

  it("do not render", () => {
    mount(NoArrowFixture)
  })
})
