import { Menu } from "./Menu";

export default function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-[color:var(--secondary)] h-[86px]">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Menu />
      </nav>
    </header>
  )
}