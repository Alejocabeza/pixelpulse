import { forwardRef } from 'pixelui-system'
import { memo } from 'react'
import { CheckboxProps } from './checkboxProps'

const Checkbox = forwardRef<'input', CheckboxProps>((props, ref) => {
  return <input type='checkbox' ref={ref} />
})

Checkbox.displayName = 'PixelUI Checkbox'

export default memo(Checkbox)
