import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#DEB541"
      d="m14.8 12 3.6-3.6c.8-.8.8-2 0-2.8-.8-.8-2-.8-2.8 0L12 9.2 8.4 5.6c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8L9.2 12l-3.6 3.6c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l3.6-3.6 3.6 3.6c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6.8-.8.8-2 0-2.8L14.8 12Z"
    />
  </Svg>
)
export default SvgComponent
