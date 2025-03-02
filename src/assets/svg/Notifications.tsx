import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <G fill="#fff" clipPath="url(#a)">
      <Path d="M12 .5A7.5 7.5 0 0 0 4.5 8v3l-3 3v3h21v-3l-3-3V8A7.5 7.5 0 0 0 12 .5ZM7.5 20a4.5 4.5 0 1 0 9 0h-9Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .5h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
