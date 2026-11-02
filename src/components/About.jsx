function About() {
  return (
    <section id="about" data-reveal className="scroll-mt-24 border-b border-gray-800 px-6 py-20 sm:px-10 md:py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <div className="py-4">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#c3a9ff]">04 / A little about me</p>
          <h2 className="mb-6 font-serif text-5xl font-medium text-white sm:text-6xl">About</h2>
          <a href="mailto:hifxakhn@gmail.com" className="mb-8 inline-block border-b border-[#c889a5]/50 pb-1 text-sm text-gray-300 transition-colors hover:border-[#c889a5] hover:text-[#e5b3c9]">
            hifxakhn@gmail.com
          </a>
          <p className="max-w-xl text-base leading-8 text-gray-400">
            I am a Computer Science graduate from Capital University of Science &amp; Technology with a 3.94 CGPA. Through internships at OGDCL and Yumaj Enterprises, I have gained hands-on experience across software development, infrastructure, and cybersecurity. I focus on building thoughtful, secure full-stack applications with React, Python, Flask, and PostgreSQL.
          </p>
        </div>
        <div className="relative flex h-[430px] items-end justify-center sm:h-[540px] md:h-[600px]">
          <img
            src="/potrait.png"
            alt="Portrait of Hifza Khan"
            className="h-full max-w-full object-contain object-bottom drop-shadow-[0_0_35px_rgba(145,170,196,0.1)] transition-transform duration-700 hover:scale-[1.025]"
          />
        </div>
      </div>
    </section>
  );
}

export default About;