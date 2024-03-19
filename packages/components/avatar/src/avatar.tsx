import { memo, useMemo } from 'react';
import styled from 'styled-components';
import { AvatarIcon } from './avatarIcon';
import { AvatarProps, SizeType } from './avatarType';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';
import './index.css';

const getSize = (size: SizeType|null|undefined): string => {
  switch (size) {
    case '2xs':
      return 'width: 2rem; height: 2rem;';
    case 'xs':
      return 'width: 3rem; height: 3rem;';
    case 'sm':
      return 'width: 4rem; height: 4rem;';
    case 'md':
      return 'width: 5rem; height: 5rem;';
    case 'lg':
      return 'width: 6rem; height: 6rem;';
    case 'xl':
      return 'width: 7rem; height: 7rem;';
    case '2xl':
      return 'width: 8rem; height: 8rem;';
    default:
      return 'width: 5rem; height: 5rem;';
  }
}

const Container = styled(Avatar)`
  border-radius: 9999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.bg ? `background-color: ${props.bg};` : 'background-color: #cccccc;' }
  ${props => props.size}
  ${props => props.sx}
`

const Img = styled(AvatarImage)`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const Fallback = styled(AvatarFallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function getInitials (name: string|null|undefined) {
  if(name) {
    return name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase();
  }
};

const AvatarComponent = (props:AvatarProps) => {
  const initials = useMemo(() => getInitials(props.name), [props.name])
  const sizes = useMemo(() => getSize(props.size), [props.size])
  const icon = useMemo(() => props.icon || <AvatarIcon />, [props.icon])
  return (
    <Container size={sizes} bg={props.bg} sx={props.sx} className={`bg-slate-500 ${props.className || ''}`}>
      <Img src={props.src} alt={props.alt || props.name} />
      <Fallback>{initials || icon}</Fallback>
    </Container>
  )
}

export default memo(AvatarComponent)
