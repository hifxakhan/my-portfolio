function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden border-b border-gray-800 px-6 pb-16 pt-28 sm:px-10 lg:px-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-[center_45%] opacity-40"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/75 to-[#050505]/35" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/35" />

      <div className="relative z-10 w-full max-w-7xl">
        <p className="hero-enter mb-6 text-xs uppercase tracking-[0.32em] text-[#91aac4]">Software engineer · Islamabad, Pakistan</p>
        <h1 className="hero-enter hero-enter-delay-1 mb-5 font-serif text-6xl font-medium leading-[0.92] text-white sm:text-7xl md:text-8xl lg:text-9xl">
          HIFZA KHAN
        </h1>
        <p className="hero-enter hero-enter-delay-2 mb-10 text-sm uppercase tracking-[0.32em] text-gray-300 sm:text-base">
          Full-Stack Developer
        </p>

        <div className="hero-enter hero-enter-delay-3 flex flex-wrap gap-3">
          <a href="/CV.pdf" download className="rounded-full border border-[#c3a9ff]/60 px-7 py-3 text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c3a9ff] hover:bg-[#c3a9ff] hover:text-black hover:shadow-[0_0_24px_rgba(195,169,255,0.2)]">
            Resume
          </a>
          <a href="#projects" className="rounded-full border border-[#91aac4]/60 px-7 py-3 text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-[#91aac4] hover:bg-[#91aac4] hover:text-black hover:shadow-[0_0_24px_rgba(145,170,196,0.18)]">
            Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;