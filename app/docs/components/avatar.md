---
title: Avatar
---
import { Avatar } from 'pixelui-avatar';
import Github from '../../src/icons/Github.tsx'
import Npm from '../../src/icons/Npm.tsx'

# Avatar

El componente Avatar es usado para representar a un usuario y mostrar la imagen de perfil, iniciales
or un icono.

<div className='flex flex-row justify-start gap-[1rem]'>
  <a
    className='
      flex justify-center items-center
      gap-[.8rem] px-[.8rem] py-[.4rem]
      border border-sky-500 text-black bg-[#cccccc40] hover:bg-[#cccccc] cursor-pointer
      rounded-sm'
      href='https://github.com/Alejocabeza/pixelpulse/pacakges/components/avatar'
      target='_blank'
  > <Github /> Source</a>
  <a
    className='flex justify-center items-center
      gap-[.8rem] px-[.8rem] py-[.4rem]
      border border-sky-500 text-black bg-[#cccccc40] hover:bg-[#cccccc] cursor-pointer
      rounded-sm'
  ><Npm className='bg-red-500' /> pixelui-avatar</a>
</div>
## Importación

PixelUI exporta solamente un modelo de Avatar:

```jsx
import { Avatar } from "pixelui-avatar";
```

## Usablidad
<br/>

<div className='flex flex-row gap-[1rem]'>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
</div>

<br/>

```jsx
<div className='flex flex-row gap-[1rem]'>
    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    <Avatar name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
    <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
</div>
```

## Tamaños De Avatars

El componente avatar tiene 7 tamaños distintos
<br/>
<br/>

<div className='flex flex-row gap-[1rem]'>
    <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    <Avatar size='xs' name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
    <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
    <Avatar size='lg' name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
</div>

<br/>

```jsx
<div className='flex flex-row gap-[1rem]'>
    <Avatar size='2xs' name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
    <Avatar size='xs' name='Kola Tioluwani' src='https://bit.ly/tioluwani-kolawole' />
    <Avatar size='sm' name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
    <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
    <Avatar size='lg' name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
    <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />
    <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
</div>
```

## Manejo de Errores

Si al buscar o renderizar la imagen tiene al un error:

- Si el nombre existe, se colocara las iniciales del nombre con un background por defecto.
- Y si el nombre no exite y dio un error al buscar la imagen se colocara un icono por defecto.

<br/>
<div className='flex flex-row gap-[1rem]'>
  <Avatar name='Oshigaki Kisame' src='https://bit.ly/broken-link' />
  <Avatar name='Sasuke Uchiha' src='https://bit.ly/broken-link' />
  <Avatar src='https://bit.ly/broken-link' />
</div>
<br/>

```jsx
<div className="flex flex-row gap-[1rem]">
  <Avatar name="Oshigaki Kisame" src="https://bit.ly/broken-link" />
  <Avatar name="Sasuke Uchiha" src="https://bit.ly/broken-link" />
  <Avatar src="https://bit.ly/broken-link" />
</div>
```

## Customizar el Manejo de Errores

para customizar el manejo de errores:

- El componente recibe un propiedad llamada icon que recibe un elemento de svg
- Para actualizar los estilos de css del componente lo puedes hacer con la propiedad sx, `tailwind` aun no esta soportado

<div className='flex flex-row gap-[1rem]'>
  <Avatar icon={<Github />} bg="#2e2e2e" sx={{color:'white', border: '1px solid orange'}} />
  <Avatar sx={{backgroundColor: "orange", color: 'white'}} />
</div>

<br/>

```jsx
<div className="flex flex-row gap-[1rem]">
  <Avatar icon={<Github />} bg="#2e2e2e" sx={{color:'white', border: '1px solid orange'}} />
  <Avatar sx={{backgroundColor: "orange", color: 'white'}} />
</div>
```
