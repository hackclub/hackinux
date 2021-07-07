import { throttle } from 'lodash'
import * as _ from 'ramda'

const resizeHandler = (callback, width, state, breakpoint) => {
  width > breakpoint ? (state ? callback() : null) : null
}

const throttledResizeHandler = throttle(resizeHandler, 300)

export default _.curry(throttledResizeHandler)
