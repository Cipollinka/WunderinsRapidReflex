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
      d="M15.535 3.308a2.003 2.003 0 0 0-2.828 0l-9.899 9.899a2 2 0 0 0 0 2.828l5.657 5.657c.39.39.902.585 1.414.585.512 0 1.024-.195 1.414-.585l9.9-9.899c.78-.779.78-2.049 0-2.828l-5.658-5.657ZM8.707 17.207a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm7 5-1.414-1.414 6-6 1.414 1.415-6 5.999ZM8.293 2.793l1.414 1.414-6 6-1.414-1.415 6-5.999Z"
    />
  </Svg>
)
export default SvgComponent
