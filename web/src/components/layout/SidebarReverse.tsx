'use client'
import { useIndexContent } from '@/hooks/useIndexContent'
import Link from 'next/link'

export function SidebarReverse () {
  const [sections] = useIndexContent()
  return (
    <aside className="py-[2rem] flex flex-col items-end gap-[1rem] w-[15%]">
      <h3 className="text-[1rem] font-bold cursor-default">Table of Contents</h3>
      <ul className="flex flex-col gap-[1rem] items-end">
        {sections.map((section, index) => (
          <li key={index} className='hover:italic transition-all duration-300'>
            #{' '}<Link href={'#' + section.id}>{section.textContent}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
