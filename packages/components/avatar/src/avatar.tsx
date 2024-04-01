'use client'
import { forwardRef } from "pixelui-system";
import { memo, useMemo, useState } from "react";
import { AvatarProps } from "./avatarProps";
import { useAvatar } from './hooks/useAvatar';
import { UserIcon } from "./icons/userIcon";

const Avatar = forwardRef<'div', AvatarProps>((props, ref) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoad, setImageLoad] = useState(false)
  const { Component, Image, size, classes, name, alt, src, borderShow, initials, icon, Fallback} = useAvatar(props)

  const fallback = useMemo(() => {
    return (
      <Fallback aria-label={alt || name} role="img">
        {name ? initials : icon || <UserIcon />}
      </Fallback>
    );
  }, [name, alt, initials, icon]);

  const image = useMemo(() => (
      <Image
        src={src}
        alt={alt || name}
        onLoad={() => setImageLoad(true)}
        onError={() => setImageError(true)}
        style={{ display: imageLoad ? 'block' : 'none' }}
      />
  ), [src, alt, name, imageLoad])

  return (
    <Component aria-label={alt} className={classes} size={size} border={borderShow}>
      {imageLoad ? null : fallback}
      {imageError ? null : image}
    </Component>
  )
})

Avatar.displayName = 'PixelUIAvatar'

export default memo(Avatar)
