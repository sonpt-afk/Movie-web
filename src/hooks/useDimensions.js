import { useEffect, useState } from 'react'
import { isTablet, isDesktop } from 'react-device-detect'

import { Breakpoint, BreakpointValues } from 'src/config/breakpoints'

export default function useDimensions() {
  const [dimension, setDimension] =
    useState <
    Dimension >
    {
      height: 0,
      width: 0
    }

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth: width, innerHeight: height } = window
      setDimension({ height, width })
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [dimension])

  const breakpoint = getBreakpoint(dimension.width)

  const isMobile = breakpoint === Breakpoint.XS || breakpoint === Breakpoint.SM
  const isTablet = breakpoint === Breakpoint.MD || breakpoint === Breakpoint.LG
  const isDesktop = breakpoint === Breakpoint.XL || breakpoint === Breakpoint.XXL

  return {
    dimension,
    breakpoint,
    isMobile,
    isTablet,
    isDesktop
  }
}

function getBreakpoint(currentWidth) {
  const width = currentWidth || getInitialBreakpointValues()

  if (width <= BreakpointValues.XS) {
    return Breakpoint.XS
  }

  if (width > BreakpointValues.XS && width <= BreakpointValues.SM) {
    return Breakpoint.SM
  }

  if (width > BreakpointValues.SM && width <= BreakpointValues.MD) {
    return Breakpoint.MD
  }

  if (width > BreakpointValues.MD && width <= BreakpointValues.LG) {
    return Breakpoint.LG
  }

  if (width > BreakpointValues.LG && width <= BreakpointValues.XL) {
    return Breakpoint.XL
  }

  if (width > BreakpointValues.XL && width <= BreakpointValues.XXL) {
    return Breakpoint.XXL
  }
  return Breakpoint.XXL
}

function getInitialBreakpointValues() {
  if (isTablet) return BreakpointValues.MD
  if (isDesktop) return BreakpointValues.XL

  return BreakpointValues.SM
}
