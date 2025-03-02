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
      d="M5 11h14c2.2 0 4-1.8 4-4s-1.8-4-4-4H5C2.8 3 1 4.8 1 7s1.8 4 4 4Zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2ZM19 13H5c-2.2 0-4 1.8-4 4s1.8 4 4 4h14c2.2 0 4-1.8 4-4s-1.8-4-4-4Zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
    />
  </Svg>
)
export default SvgComponent
