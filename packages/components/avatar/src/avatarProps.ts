import React from "react"

export interface AvatarProps {
  /**
   * the name of the avatar
   */
  name?: string
  /**
   * the alt of the avatar
   */
  alt?: string
  /**
   * the className of the avatar
   */
  sx?: {}
  /**
   * the icon of the avatar
   */
  icon?: React.ReactNode
  /**
   * the src of the avatar
   */
  src?: string
  /**
   * the size of the avatar
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
  /**
   * This will show the status
  */
  status?: boolean
}
