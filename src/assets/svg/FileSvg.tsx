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
      fill="#fff"
      d="M13.5 6.807V.923H4.125C3.502.923 3 1.386 3 1.96v20.077c0 .576.502 1.039 1.125 1.039h15.75c.623 0 1.125-.463 1.125-1.039V7.846h-6.375c-.619 0-1.125-.467-1.125-1.039Zm7.5-.61v.264h-6V.923h.286c.3 0 .586.108.797.303l4.589 4.24c.21.195.328.459.328.731Z"
    />
  </Svg>
)
export default SvgComponent
