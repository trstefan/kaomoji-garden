import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-[#28443F] text-[#F2FD7D] border-b-4 border-black">
      <div className="max-w-7xl  px-4 sm:px-6 py-4 flex items-center justify-between mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl sm:text-2xl font-black hover:text-white transition-colors duration-200"
        >
          <span className="text-2xl sm:text-3xl">&#x2F95;</span>
          <span>Kaomoji Garden</span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="/generator"
            className="hidden sm:inline-block bg-[#F2FD7D] text-[#28443F] px-6 py-2 rounded-lg font-bold border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
          >
            &#x2699;&#xFE0F; Generator
          </Link>
          <Link
            href="/generator"
            className="sm:hidden bg-[#F2FD7D] text-[#28443F] px-4 py-2 rounded-lg font-bold text-xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all duration-200"
          >
            &#x2699;&#xFE0F;
          </Link>
        </div>
      </div>
    </nav>
  );
};
