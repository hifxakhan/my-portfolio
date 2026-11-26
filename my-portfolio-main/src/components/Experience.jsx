function Experience() {
    const experienceData = [
        {
            Role: "IT & Systems Intern",
            Company: "Oil & Gas Development Company Ltd. (OGDCL)",
            Date: "Jul 2025 - Aug 2025",
            Description: "Configured and managed corporate network services including VLANs, DHCP, DNS, and FTP. Built a Flask-based authentication tool to secure internal documents. Gained hands-on experience with Cisco networking hardware and IT infrastructure."
        },
        {
            Role: "Cybersecurity & QA Intern",
            Company: "Yumaj Enterprises",
            Date: "Sep 2025 - Nov 2025",
            Description: "Tested client web applications using Wireshark and browser dev tools. Identified exposed open ports and sensitive data (OTPs, passwords) transmitted in plaintext over HTTP, and reported findings to the development team."
        }

    ];
    return (
        <section id="experience" data-reveal className="scroll-mt-24 border-b border-gray-800 px-6 py-20 sm:px-10 md:py-24 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12">
                    <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#91aac4]">03 / Professional experience</p>
                    <h2 className="font-serif text-5xl font-medium text-white sm:text-6xl">Experience</h2>
                </div>
                <div className="divide-y divide-gray-800 border-y border-gray-800">
                {experienceData.map((data, index) => (
                    <article key={data.Company} className="group grid gap-5 py-7 transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[5rem_minmax(0,1fr)_auto] md:gap-8 md:py-9">
                        <span className="text-xs tracking-[0.2em] text-[#c3a9ff]/70 transition-colors group-hover:text-[#c3a9ff]">0{index + 1}</span>
                        <div>
                            <h3 className="mb-2 font-serif text-2xl font-medium text-white sm:text-3xl">{data.Role}</h3>
                            <p className="mb-4 text-sm text-gray-300">{data.Company}</p>
                            <p className="max-w-3xl text-sm leading-7 text-gray-400">{data.Description}</p>
                        </div>
                        <span className="text-xs tracking-wide text-gray-500 md:pt-2">{data.Date}</span>
                    </article>
                ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;