import {checkPropTypes} from "prop-types"
import {easingPropType} from "./propTypes"
import sinon from "sinon"

describe("easingPropType", () => {
  let consoleSpy = null
  let consoleStub = null
  beforeEach(() => {
    consoleSpy = jest.fn()
    consoleStub = sinon.stub(global.console, "error").callsFake(consoleSpy) // eslint-disable-line no-undef
  })

  afterEach(() => {
    consoleSpy.mockClear()
    consoleStub.restore()
  })

  it("should not error for normal easing types", () => {
    const normalEasingProps = [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
    ]

    normalEasingProps.forEach(easing => {
      checkPropTypes(
        {fadeEasing: easingPropType},
        {fadeEasing: easing},
        "fadeEasing",
        "DummyComponent"
      )
    })

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it("should not error for valid cubic-bezier easings", () => {
    const validCubicBezierProps = [
      // Normal
      "cubic-bezier(2.1,0.1,0.1,0.1)",

      // Some without 0s
      "cubic-bezier(.1,0.1,0.1,.1)",

      // Some with negative
      "cubic-bezier(-.1,0.1,.1,-0.1)",

      // Some without decimals
      "cubic-bezier(20,0.1,.1,30)",
    ]

    validCubicBezierProps.forEach(easing => {
      checkPropTypes(
        {fadeEasing: easingPropType},
        {fadeEasing: easing},
        "fadeEasing",
        "DummyComponent"
      )
    })

    expect(consoleSpy).not.toHaveBeenCalled()
  })

  it("should error for invalid cubic-bezier easings", () => {
    const invalidCubicBezierProps = [
      // Just numbers
      "(0.1,0.1,0.1,0.1)",
      "0.1,0.1,0.1,0.1",

      // Mis-spelled
      "cubic-beizer(0.1,0.1,0.1,0.1)",

      // Extra number
      "cubic-bezier(0.1,0.1,0.1,0.1,0.1)",

      // Not enough numbers
      "cubic-bezier(0.1,0.1,0.1)",

      // Missing brackets
      "cubic-bezier(0.1,0.1,0.1,0.1",
      "cubic-bezier0.1,0.1,0.1,0.1)",
    ]

    invalidCubicBezierProps.forEach((easing, idx) => {
      // checkPropTypes only warns once for the same prop,
      // so we need to change the prop name for every call
      const propName = `fadeEasing_${idx}`
      checkPropTypes(
        {[propName]: easingPropType},
        {[propName]: easing},
        propName,
        "DummyComponent"
      )
    })

    expect(consoleSpy).toHaveBeenCalledTimes(invalidCubicBezierProps.length)
  })
})
