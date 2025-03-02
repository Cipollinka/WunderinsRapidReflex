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
      d="M4.05 22.5h15.9c.577 0 1.05-.464 1.05-1.036v-9.933c0-.572-.469-1.031-1.05-1.031h-1.012V9.052c0-1.946-.76-4.107-1.997-5.41A6.816 6.816 0 0 0 12.005 1.5h-.01A6.83 6.83 0 0 0 7.06 3.638C5.822 4.94 5.062 7.101 5.062 9.046V10.5H4.05c-.581 0-1.05.464-1.05 1.031v9.933c0 .572.469 1.036 1.05 1.036ZM7.547 9.052c0-1.28.464-2.864 1.317-3.764v-.015c.825-.871 1.964-1.382 3.131-1.382h.01c1.167 0 2.306.51 3.13 1.382v.01l-.004.004c.858.9 1.317 2.485 1.317 3.765V10.5H7.547V9.052Z"
    />
  </Svg>
)
export default SvgComponent
