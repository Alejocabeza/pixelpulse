import { GithubIcon } from '@/icons'
import Link from 'next/link'
import { ChangeTheme } from '../ChangeTheme'

export function Navbar () {
  return (
    <header className="h-[8rem] flex justify-between cursor-default">
      <div className="flex justify-center items-center">
        <p className="text-[1.5rem]">
          <strong>
            Pixel <span className="text-[#ff0000]">Pulse</span>
          </strong>
        </p>
      </div>
      <nav className="flex jusitfy-center items-center">
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link className="dark:bg-[#282828] bg-[#ff000030] p-2 rounded" href="/docs">
              Docs
            </Link>
          </li>
          <li>
            <Link className="dark:bg-[#282828] bg-[#ff000030] p-2 rounded" href="/components">
              Components
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center items-center gap-2">
        <Link
          className="dark:bg-[#282828] bg-[#ff000030] p-2 rounded"
          href="https://github.com/Alejocabeza/pixelpulse"
          target="_blank"
        >
          <GithubIcon />
        </Link>
        <ChangeTheme />
      </div>
    </header>
  )
}
