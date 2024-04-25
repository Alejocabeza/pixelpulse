---
title: "Instalación"
---

import ExternalLink from '@site/src/icons/ExternalLink'

# instalation

Requerimientos:
<a className='flex justify-start items-center gap-[.5rem]' href="https://react.dev/" target='_blank'>
  * [React 18](https://react.dev/) <ExternalLink className='w-2 h-2' />
</a>
<a className='flex justify-start items-center gap-[.5rem]' href="https://tailwindcss.com/" target='_blank'>
  * [Tailwind CSS 3](https://tailwindcss.com/) <ExternalLink className='w-2 h-2' />
</a>
<a className='flex justify-start items-center gap-[.5rem]' href="https://www.framer.com/motion/" target='_blank'>
  * [Framer Motion 4](https://www.framer.com/motion/) <ExternalLink className='w-2 h-2' />
</a>
---
Para utilizar PixelUI en su proyecto, debe seguir los siguientes pasos:

## Global Installation

La forma más sencilla de comenzar con PixelUI es utilizar la instalación global. Lo que significa que todos los componentes se importan desde un solo paquete.

Siga los pasos a continuación para instalar todos los componentes de **PixelUI**:

### Instalar el Paquete NPM

Para instalar **PixelUI**, Corre Alguno de los siguientes commandos en tu terminal o consola de comandos:

```sh
npm install pixelui-react
```

despues de instalado el paquete puedes empezar a usar **PixelUI**:

```jsx title:App.tsx
import React from 'react'
import {Avatar} from 'pixelui-react'

export default function App() {
  return (
    <div>
      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    </div>
  )
}

```

## Frameworks

