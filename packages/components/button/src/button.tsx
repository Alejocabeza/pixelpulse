'use client'
import { forwardRef } from 'pixelui-system'
import { memo, useMemo } from 'react'
import { ButtonProps } from './buttonProps'
import { useButton } from './hooks/useButton'
import SpinnerTimer from './icons/spinner'

const Button = forwardRef<'button', ButtonProps>((props, ref) => {
  const {Component, variant, size, color, radius, classes, isDisabled, positionIcon, spinner, isOnlyIcon, icon, loading} = useButton(props)
  const Content = useMemo(() => {
    if(isOnlyIcon && icon) return icon
    if(loading) return (<><span className='rotating'>{spinner || <SpinnerTimer />}</span>{props.children}</>)
    if(positionIcon === 'start') return (<>{icon}{props.children}</>)
    if(positionIcon === 'end') return (<>{props.children}{icon}</>)
    if(props.children && !isOnlyIcon) return props.children
  }, [isOnlyIcon, icon, spinner, props.children, loading, positionIcon])
  return (
    <Component
      variant={variant}
      size={size}
      disabled={isDisabled}
      colors={color}
      radius={radius}
      className={classes}
      ref={ref}
    >
      {Content}
    </Component>
  )
})

Button.displayName = 'PixelUI Button'

export default memo(Button)
