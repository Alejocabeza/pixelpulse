import * as React from "react";

export type SizeType = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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
className?: string
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
size?: SizeType
/**
 * This will show the status
*/
status?: boolean
/**
 * the background color
 */
bg?:string
/**
 * the sx
 */
sx?: {}
}
