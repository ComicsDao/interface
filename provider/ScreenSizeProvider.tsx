import React, { useState, useEffect, createContext, useContext } from "react"

interface ScreenContextInterface {
  screenSize: string
}

const ScreenSizeContext = createContext<ScreenContextInterface | null>(null)

export const ScreenSizeProvider = ({ children }: { children: any }) => {
  const [windowSize, setWindowSize] = useState({
    width: 0
  })

  function handleResize() {
    // Set window width/height to state
    setWindowSize({
      width: window.outerWidth
    })
  }

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== "undefined") {
      // Handler to call on window resize

      // Add event listener
      window.addEventListener("resize", handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty array ensures that effect is only run on mount

  const screenSize =
    windowSize.width <= 767
      ? "mobile"
      : windowSize.width <= 1023
      ? "tablet"
      : "desktop"

  return (
    <ScreenSizeContext.Provider value={{ screenSize }}>
      {children}
    </ScreenSizeContext.Provider>
  )
}

export const useScreenSize = () => {
  return useContext(ScreenSizeContext)
}
