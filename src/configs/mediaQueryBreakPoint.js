import { useMediaQuery } from 'react-responsive'

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 961 })
  return isDesktop ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 960 })
  return isTablet ? children : null
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 480 })
  return isMobile ? children : null
}
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 481 })
  return isNotMobile ? children : null
}