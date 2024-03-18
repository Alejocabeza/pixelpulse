'use client'
import { forwardRef } from 'pixelui-system'
import { memo, useMemo, useState } from 'react'
import { AvatarProps } from 'src/AvatarProps'
import styled from 'styled-components'
import { AvatarIcon } from './avatarIcon'

const sizes = {
  '2xs': 'width: 2rem; height: 2rem;',
  xs: 'width: 3rem; height: 3rem;',
  sm: 'width: 4rem; height: 4rem;',
  md: 'width: 5rem; height: 5rem;',
  lg: 'width: 6rem; height: 6rem;',
  xl: 'width: 7rem; height: 7rem;',
  '2xl': 'width: 8rem; height: 8rem;',
};

const Container = styled.div<{
  size: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}>`
  border-radius: 9999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cccccc;
  color: black;
  ${(props) => sizes[props.size]}
  ${(props) => props.className}
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

function getInitials (name: string) {
  if(name) {
    return name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase();
  }
};

const Avatar = forwardRef<'div', AvatarProps>(
    (props, ref) => {
    const [imgErrorLoad, setImgErrorLoad] = useState(false)
    const {
      as = 'div',
      name,
      src = '',
      size = 'md',
      alt,
      className = '',
      icon = <AvatarIcon />
    } = props;

    const initials = useMemo(() => getInitials(name), [name]);

    const fallback = useMemo(() => {
      return name ? (
        <Container as={as} aria-label={alt || name} className={className} size={size}>
          {initials}
        </Container>
      ) : (
        <Container as={as} aria-label={alt || name} size={size} className={className}>
          {icon}
        </Container>
      )
    }, [name, imgErrorLoad, as, alt, className, icon, size])

    if(imgErrorLoad) {
      return fallback
    }

    return (
      <Container as={as} size={size} className={className}>
        <Img src={src}  alt={alt || name} onError={() => setImgErrorLoad(true)}/>
      </Container>
    )
  }
)

export default memo(Avatar);
