import clsx from 'clsx'
import { useMemo } from "react"
import { ButtonProps } from "src/buttonProps"
import { Button } from "../buttonStyles"

export const useButton = (porps: ButtonProps) => {
  const { variant, size, color, radius, loading, sx, as, disabled, className, positionIcon, spinner, isOnlyIcon, icon } = porps
  const classes = useMemo(() => clsx(className), [className])
  const Component = useMemo(() => Button(as, sx), [as, sx])
  const isDisabled = disabled || loading
  return {
    Component,
    variant,
    isOnlyIcon,
    size,
    classes,
    color,
    radius,
    isDisabled,
    spinner,
    positionIcon,
    icon,
    loading
  }
}
