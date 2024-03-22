import React from "react"

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * this property is used to set the source of the avatar
   */
  src?: string
  /**
   * this property is used to set the alt of the avatar
   */
  alt?: string
  /**
   * this property is used to set the name of the avatar
   */
  name?: string
  /**
   * this property is used to set the size of the avatar
   */
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  /**
   * this property is used to show the border
   */
  borderShow?: boolean
  /**
   * this property is used to show the border Color
   */
  borderColor?: string
  /**
   * this property is used to show the status
   */
  status?: boolean
  /**
   * The underlying HTML tag to render as the avatar container.
   * Allows flexibility for customization (e.g., `'span''`, `'div'`).
   */
  as?: string
  /**
   * this property is used to set the icon
   */
  icon?: React.ReactElement
  /**
   * This property is used to set the sx
   */
  sx?: {}
}
