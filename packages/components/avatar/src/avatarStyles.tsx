import { styled } from '@stitches/react'

export const Container =  (as:any, sx = {}) => styled(as, {
  borderRadius: '9999px',
  overflow: 'hidden',
  backgroundColor: '#cccccc',
  display: 'flex',
  color: '#00000050',
  justifyContent: 'center',
  alignItems: 'center',
  ...sx,
  variants: {
    size: {
      '2xs': {
        width: '2rem',
        height: '2rem'
      },
      xs: {
        width: '3rem',
        height: '3rem'
      },
      sm: {
        width: '4rem',
        height: '4rem'
      },
      md: {
        width: '5rem',
        height: '5rem'
      },
      lg: {
        width: '6rem',
        height: '6rem'
      },
      xl: {
        width: '7rem',
        height: '7rem'
      },
      '2xl': {
        width: '8rem',
        height: '8rem'
      }
    },
    border: {
      true: {
        padding: '3px',
        border: '2px solid'
      },
      false: {
        border: 'none'
      }
    },
  },
  defaultVariants: {
    size: 'md',
    border: false,
  }
})

export const Image = styled('img', {
  borderRadius: '9999px',
  width: '100%',
  height: '100%',
  objectFit: 'cover'
})

export const Fallback = styled('span', {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.25rem',
})
