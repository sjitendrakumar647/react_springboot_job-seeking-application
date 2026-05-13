import { Indicator } from "@mantine/core"
import { Bell, Briefcase, Settings } from "lucide-react"
import NavLinks from "./NavLinks"

const Navbar = () => {
  return (
    <nav className="w-full bg-slate-950/95 text-white border-b border-white/10 backdrop-blur-md px-6 py-4 shadow-2xl shadow-slate-900/30">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div className="flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-sky-300" />
          <h1 className="text-xl font-bold text-white">JobPortal</h1>
        </div>

        <NavLinks />

        <div className="flex flex-wrap items-center gap-3">
          <Indicator color="yellow" offset={7} size={13} withBorder processing>
            <Bell className="w-10 h-10 p-2 cursor-pointer rounded-full bg-slate-900 hover:text-sky-400 hover:bg-slate-800 transition" />
          </Indicator>
          <Settings className="w-10 h-10 p-2 cursor-pointer rounded-full bg-slate-900 hover:text-sky-400 hover:bg-slate-800 transition" />

          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://via.placeholder.com/35"
              alt="user"
              className="w-9 h-9 rounded-full border-2 border-sky-400"
            />
            <span className="hidden sm:block font-medium text-slate-100">Jitendra</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
