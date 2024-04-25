import { keyframes, styled } from '@stitches/react'

const colors =  (color: string) => {
  switch (color) {
    case 'primary':
      return 'rgb(90 90 255)'
    case 'secondary':
      return 'rgb(255 90 163)'
    case 'success':
      return 'rgb(90 255 90)'
    case 'warning':
      return 'rgb(255 255 90)'
    case 'danger':
      return 'rgb(255 90 90)'
    default:
      return '#cccccc'
  }
}

const rotating = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
})

export const Button = (as:any = 'button', sx = {}) => styled(as, {
  display: 'flex',
  justifyContent: "center",
  alignItems: 'center',
  gap: '.5rem',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  '& > .rotating': {
      animation: `${rotating} 1.5s linear infinite`,
  },
  ...sx,
  variants: {
    variant: {
      solid: {},
      faded: {
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        color: `${colors('primary')}`,
        boxShadow: 'none',
        border: '.5px solid rgba(0, 0, 0, 0.08)',
        transition: '150ms ease-in-out',
        '&:hover': {
          boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.4)',
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        }
      },
      bordered: {
        border: '2px solid black',
        backgroundColor: 'transparent',
        color: 'black',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
      light: {
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
      flat: {
        backgroundColor: 'transparent',
        color: 'black',
        border: 'none',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'blue',
        border: '1px solid blue',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 255, 0.1)',
        },
      },
      shadow: {
        backgroundColor: 'white',
        color: 'black',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }
    },
    colors: {
      default: {
        background: `${colors('default')}`,
        color: 'black',
      },
      primary: {
        background: `${colors('primary')}`,
        color: '#ffffff',
      },
      secondary: {
        background: `${colors('secondary')}`,
        color: '#ffffff',
      },
      success: {
        background: `${colors('success')}`,
        color: '#ffffff',
      },
      warning: {
        background: `${colors('warning')}`,
        color: '#ffffff',
      },
      danger: {
        background: `${colors('danger')}`,
        color: '#ffffff',
      }
    },
    size: {
      small: {
        padding: '.6rem 1.2rem',
        fontSize: '1rem'
      },
      medium: {
        padding: '.7rem 1.3rem',
        fontSize: '1rem'
      },
      large: {
        padding: '0.8rem 1.4rem',
        fontSize: '1.15rem'
      }
    },
    radius: {
      full: {
        borderRadius: '9999px'
      },
      large: {
        borderRadius: '1rem'
      },
      medium: {
        borderRadius: '0.5rem'
      },
      small: {
        borderRadius: '0.35rem'
      },
      none: {
        borderRadius: '0'
      }
    },
    disabled: {
      true: {
        opacity: .8,
        cursor: 'default'
      },
    }
  },
  defaultVariants: {
    variant: 'solid',
    colors: 'default',
    size: 'medium',
    radius: 'medium'
  }
})
