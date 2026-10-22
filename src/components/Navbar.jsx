import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "View Store", href: "/view-store" },
    { name: "Settings", href: "/settings" },
    { name: "You", href: "/profile" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#080a18]/85 text-white shadow-lg shadow-black/10 backdrop-blur-2xl">
      <div className="h-px w-full bg-linear-to-r from-transparent via-violet-400/70 to-transparent" />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8">
        <div className="pointer-events-none absolute left-1/4 top-0 -z-10 h-20 w-40 rounded-full bg-violet-500/10 blur-3xl" />

        <Link
          to="/"
          aria-label="DropPin home"
          onClick={() => setMenuOpen(false)}
          className="group inline-flex items-center gap-2.5"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-300/20 bg-linear-to-br from-violet-500/20 to-cyan-400/10 shadow-inner shadow-white/5 transition duration-300 group-hover:border-cyan-300/40 group-hover:shadow-cyan-500/10">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              className="h-5 w-5 text-cyan-200"
            >
              <path d="M12 3 5 6v5c0 4.5 2.8 8.1 7 10 4.2-1.9 7-5.5 7-10V6l-7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
              <span className="bg-linear-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                Drop
              </span>
              <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Pin
              </span>
            </span>
            <span className="mt-1 hidden text-[9px] font-semibold tracking-[0.22em] text-slate-500 uppercase sm:block">
              Password vault
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1.5 md:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-linear-to-r from-violet-400/20 to-cyan-400/15 text-cyan-100 shadow-sm shadow-cyan-950/20"
                      : "text-slate-400 hover:bg-white/[0.06] hover:text-slate-100"
                  }`
                }
              >
                {({ isActive }) => (
                  <span className="inline-flex items-center gap-2">
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                    )}
                    {link.name}
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-violet-400/40 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 md:hidden"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 border-t border-white/[0.07] bg-[#080a18]/95 px-4 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "border border-cyan-300/10 bg-linear-to-r from-violet-400/15 to-cyan-400/10 text-cyan-100"
                        : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

//{rafce}//
