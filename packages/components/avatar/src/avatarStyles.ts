import styled from 'styled-components';
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar';

export const Container = styled(Avatar)`
  border-radius: 9999px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  ${props => props.bg ? `background-color: ${props.bg};` : 'background-color: #cccccc;' }
  ${props => props.size}
  ${props => props.sx}
`


export const Img = styled(AvatarImage)`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const Fallback = styled(AvatarFallback)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
