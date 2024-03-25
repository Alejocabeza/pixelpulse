import { forwardRef } from 'pixelui-system'
import { memo } from 'react'
import { CheckboxProps } from './checkboxProps'
import { useCheckbox } from './hooks/useCheckbox'

const Checkbox = forwardRef<'input', CheckboxProps>((props, ref) => {
  const {Component, title} = useCheckbox(props)
  return (
    <Component ref={ref}>
      <input type='checkbox' />
      <span>{title}</span>
    </Component>
  )
})

Checkbox.displayName = 'PixelUI Checkbox'

export default memo(Checkbox)
