---
title: "Checkbox"
---

import Github from '../../src/icons/Github.tsx';
import Npm from '../../src/icons/Npm.tsx';
import { Checkbox } from 'pixelui-react'

# Checkbox

This component is used for get data boolean from user

<div className='flex flex-row justify-start gap-[1rem]'>
  <a
    className='
      flex justify-center items-center
      gap-[.8rem] px-[.8rem] py-[.4rem]
      border border-sky-500 text-black bg-[#cccccc40] hover:bg-[#cccccc] cursor-pointer
      rounded-sm dark:text-white'
      href='https://github.com/Alejocabeza/pixelpulse/pacakges/components/checkbox'
      target='_blank'
  > <Github /> Source</a>
  <a
    className='flex justify-center items-center
      gap-[.8rem] px-[.8rem] py-[.4rem]
      border border-sky-500 text-black bg-[#cccccc40] hover:bg-[#cccccc] cursor-pointer
      rounded-sm dark:text-white'
  ><Npm className='bg-red-500' /> pixelui-checkbox</a>
</div>
<br/>

<Checkbox title='checkbox test' />

