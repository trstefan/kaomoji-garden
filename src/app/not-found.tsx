import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8E7] flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text and Button */}
        <div className="space-y-8">
          <div>
            <h1 className="text-[120px] md:text-[180px] font-black leading-none text-[#F2FD7D] [-webkit-text-stroke:4px_#000] [text-stroke:4px_#000] mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-5xl font-black text-[#28443F] mb-4">
              Sorry! There is nothing here{" "}
              <span className="text-[#F2FD7D] [-webkit-text-stroke:1px_#000] [text-stroke:1px_#000]">
                . . .
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            {/* Arrow SVG */}
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              className="flex-shrink-0"
            >
              <path
                d="M20 60 Q 15 45, 20 30 Q 25 15, 40 15 L 50 15 M 50 15 L 40 8 M 50 15 L 40 22"
                stroke="#28443F"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            <Link
              href="/"
              className="group relative bg-[#F2FD7D] text-[#28443F] px-12 py-6 text-2xl md:text-3xl font-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] active:translate-x-[8px] active:translate-y-[8px] uppercase tracking-wider"
            >
              HOME
            </Link>
          </div>

          <p className="text-xl md:text-2xl font-bold text-[#28443F]">
            Don't worry, you can still go home!
          </p>
        </div>

        {/* Right Side - Decorative 404 */}
        <div className="relative flex items-center justify-center">
          {/* Large 404 with circle */}
          <div className="relative">
            {/* Circle with OOOPS */}
            <div className="relative mx-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-[#F2FD7D] rounded-full border-[8px] border-black flex items-center justify-center shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
              {/* Shine effect */}
              <div className="absolute top-8 left-8 w-16 h-4 bg-white rounded-full opacity-60 rotate-[-30deg]" />
              <div className="absolute top-12 left-12 w-8 h-2 bg-white rounded-full opacity-40 rotate-[-30deg]" />

              <span className="text-4xl md:text-6xl font-black text-[#28443F]">
                OOOPS!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
