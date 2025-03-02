import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M8.898 6.65v9.051a3.11 3.11 0 0 0-1.632-.462 3.132 3.132 0 1 0 3.132 3.131V9.931l7.968-2.29v5.357a3.111 3.111 0 0 0-1.63-.462 3.132 3.132 0 1 0 3.115 3.425h.015V3.497L8.898 6.651Z"
    />
  </Svg>
)
export default SvgComponent
