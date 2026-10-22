import { Link } from "react-router-dom";
import loveImg from "../images/love-img.jpg";

const Footer = () => {
  return (
    <footer className="relative isolate w-full overflow-hidden border-t border-white/[0.08] bg-[#080a18]/95 text-white backdrop-blur-2xl">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-400/70 to-cyan-400/70" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-36 w-80 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl"
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-8">
        <Link
          to="/"
          aria-label="DropPin home"
          className="group inline-flex items-center gap-2.5"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-300/15 bg-linear-to-br from-violet-500/15 to-cyan-400/10">
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
          <span className="text-lg font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-orange-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
              Drop
            </span>
            <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Pin
            </span>
          </span>
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-slate-500 sm:text-sm">
          <span>Made with</span>
          <img
            src={loveImg}
            alt=""
            aria-hidden="true"
            className="h-4 w-4 rounded-full object-cover ring-1 ring-white/10 transition-transform duration-300 hover:scale-125"
          />
          <span>by</span>
          <span className="font-semibold text-slate-300 transition-colors hover:text-cyan-200">
            Dibyaranjan
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
