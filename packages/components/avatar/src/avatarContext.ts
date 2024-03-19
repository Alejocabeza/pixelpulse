import { SizeType } from './avatarType';

export const getSize = (size: SizeType|null|undefined): string => {
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

export function getInitials (name: string|null|undefined) {
  if(name) {
    return name
      .split(' ')
      .map((n: string) => n[0])
      .join('')
      .toUpperCase();
  }
};
