import { Link } from "react-router-dom"
import Navbar from "./Navbar"

function Header() {
  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 -left-28 h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-28 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-slate-900/80 px-4 py-2 text-sm text-sky-200">
                <span className="rounded-full bg-sky-400/10 px-2 py-1 text-sky-200">Trending</span>
                Career boosting matches delivered daily
              </div>
              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
                Find your <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">dream job</span> and launch the next chapter of your career.
              </h1>
              <p className="max-w-2xl text-lg text-slate-300">
                Discover verified roles, connect with top employers, and apply faster with a modern job portal designed to help you stand out.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/job" className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-300">
                  Explore Jobs
                </Link>
                <Link to="/upload" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-7 py-3 text-sm font-semibold text-slate-200 transition hover:border-sky-400 hover:text-sky-300">
                  Post a Job
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.9)]">
                  <div className="text-sm uppercase tracking-[0.28em] text-sky-300">Jobs live</div>
                  <div className="mt-4 text-3xl font-bold text-white">1.2k+</div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.9)]">
                  <div className="text-sm uppercase tracking-[0.28em] text-sky-300">Companies</div>
                  <div className="mt-4 text-3xl font-bold text-white">500+</div>
                </div>
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/80 p-5 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.9)]">
                  <div className="text-sm uppercase tracking-[0.28em] text-sky-300">Support</div>
                  <div className="mt-4 text-3xl font-bold text-white">24/7</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/50">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-sky-200">Featured role</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">Remote opportunity</span>
                </div>
                <div className="mt-8 space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-white">Senior Product Designer</div>
                    <div className="mt-2 text-sm text-slate-400">Drive product innovation with a remote-first team that values impact and creativity.</div>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-slate-400">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Remote</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Full-time</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Design</span>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-5">
                  <div>
                    <div className="text-sm text-slate-400">Company</div>
                    <div className="text-lg font-semibold text-white">Moonlight Labs</div>
                  </div>
                  <Link to="/job" className="rounded-full bg-sky-400 px-6 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                    Apply now
                  </Link>
                </div>
              </div>

              <img src="https://png.pngtree.com/png-clipart/20230320/original/pngtree-great-job-labels-for-motivation-png-image_8997339.png" alt="job opportunity illustration" className="w-full rounded-[1.75rem] object-cover shadow-2xl shadow-slate-950/30" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
