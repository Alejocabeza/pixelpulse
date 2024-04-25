import clsx from 'clsx';
import { useMemo } from 'react';
import { AvatarProps } from "../avatarProps";
import { Container, Fallback, Image } from '../avatarStyles';

function getInitials (name: string|null|undefined) {
  if(name) {
    return name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase();
  }
};

export const useAvatar = (props: AvatarProps) => {
  const {
    as = 'div',
    src,
    alt,
    name,
    size,
    borderShow,
    icon,
    className,
    sx = {},
  } = props

  const classes = useMemo(() => clsx(className), [className])
  const initials = useMemo(() => getInitials(name), [name])
  const Component = useMemo(() => Container(as, sx), [as, sx])

  return {
    Component,
    Image,
    size,
    borderShow,
    classes,
    name,
    alt,
    src,
    icon,
    initials,
    Fallback
  }
}
