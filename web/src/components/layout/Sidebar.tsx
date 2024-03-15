import { navigations } from '@/lib'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <aside className="flex flex-col justify-between gap-[1rem] py-[2rem] overflow-y-hidden w-[20%]">
      <header className="scrollbar-hide overflow-y-scroll h-[calc(100%-10rem)] flex flex-col gap-[1rem]">
        {navigations.map((nav, index) => (
          <div key={index} className="flex flex-col gap-[.6rem]">
            <h3 className="text-[1rem] cursor-default capitalize font-bold">{nav.name}</h3>
            {nav.routes.map((route, index) => (
              <Link
                key={index}
                className="dark:hover:bg-[#282828] hover:bg-[#ff000030] p-2 rounded transition-colors duration-150 capitalize"
                href={route.path}
              >
                {route.name}
              </Link>
            ))}
          </div>
        ))}
      </header>
      <footer className="text-[1rem]">Created By: Alejandro Cabeza</footer>
    </aside>
  )
}
