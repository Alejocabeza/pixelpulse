import { styled } from '@stitches/react'

export const Container = (as?: any) => styled(as, {
  display: 'flex',
  alignItems: 'center',
  gap: '.2rem',
  justifyContent: 'start',
  alignContent: 'center',
  width: 'auto',
  '& > input': {
    cursor: 'pointer',
  }
})
