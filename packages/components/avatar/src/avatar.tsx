import { memo, useMemo } from 'react';
import { getInitials, getSize } from './avatarContext';
import { AvatarIcon } from './avatarIcon';
import { Container, Fallback, Img } from './avatarStyles';
import { AvatarProps, SizeType } from './avatarType';
import './index.css';

const AvatarComponent = (props:AvatarProps) => {
  const initials = useMemo(() => getInitials(props.name), [props.name])
  const sizes = useMemo(() => getSize(props.size), [props.size])
  const icon = useMemo(() => props.icon || <AvatarIcon />, [props.icon])
  console.log(props.sx);
  return (
    <Container size={sizes as SizeType} bg={props.bg} sx={props.sx} className={`${props.className || ''}`}>
      <Img src={props.src} alt={props.alt || props.name} />
      <Fallback>{initials || icon}</Fallback>
    </Container>
  )
}

export default memo(AvatarComponent)
