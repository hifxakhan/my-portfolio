function Education(){
    return(
        <section id="education" data-reveal className="scroll-mt-24 border-b border-gray-800 px-6 py-20 sm:px-10 md:py-24 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                    <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#c889a5]">05 / Academic background</p>
                    <h2 className="font-serif text-5xl font-medium text-white sm:text-6xl">Education</h2>
                </div>
                <article className="grid gap-5 rounded-2xl border border-[#c889a5]/20 bg-white/[0.015] px-6 py-8 transition-colors duration-300 hover:border-[#c889a5]/50 md:grid-cols-[5rem_minmax(0,1fr)_auto] md:gap-8 md:px-8 md:py-10">
                    <span className="text-xs tracking-[0.2em] text-[#c889a5]/70">01</span>
                    <div>
                        <h3 className="mb-2 font-serif text-2xl font-medium text-white sm:text-3xl">BS Computer Science</h3>
                        <p className="mb-4 text-sm text-gray-300">Capital University of Science &amp; Technology</p>
                        <p className="text-sm text-gray-400">CGPA: 3.94 / 4.00 <span className="text-gray-600">·</span> Dean&apos;s List</p>
                    </div>
                    <span className="text-xs tracking-wide text-gray-500 md:pt-2">Sep 2022 – Jul 2026</span>
                </article>
            </div>
        </section>
    );
}

export default Education;