import {forwardRef} from 'pixelui-system'
import { ButtonProps } from './buttonProps'
import { memo } from 'react'

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  return (
    <button {...props} ref={ref}>
      {props.children}
    </button>
  )
})

export default memo(Button)
