import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../src/index'

describe('Render My Componente Button', () => {
  test('Should Rendering My Componente Button', () => {
    const component = render(<Button>{'Button'}</Button>)
    component.findByText('Button')
  })
})
