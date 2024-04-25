export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * The variant
   */
  variant?: 'solid' | 'faded' | 'bordered' | 'light' | 'flat' | 'ghost' | 'shadow'
  /**
   * The size
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * The fontSize
   */
  color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
  /**
   * The radius
   */
  radius?: 'full' | 'large' | 'medium' | 'small' | 'none'
  /**
   * The loading
   */
  loading?: boolean
  /**
   * The sx
   */
  sx?: {}
  /**
   * The as
   */
  as?: string
  /**
   * The disabled
   */
  disabled?: boolean
  /**
   * the className
   */
  className?: string
  /**
   * The icon
   */
  icon?: React.ReactElement
  /**
   * The positionIcon
   */
  positionIcon?: 'start' | 'end'
  /**
   * The spinner
   */
  spinner?: React.ReactElement
  /**
   * The isOnlyIcon
   */
  isOnlyIcon?: boolean
}
