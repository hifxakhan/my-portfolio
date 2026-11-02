import { useState } from "react";

function Certificates() {
    const certData = [
        {
            title: "Meta Front-End Developer",
            issuer: "Meta (Coursera)",
            Date: "Dec 2025",
            Link: "https://coursera.org/share/9993c85dee7231a97b217a90ba21463f"
        },
        {
            title: "Kali Linux: Ethical Hacking & Pentesting",
            issuer: "EDUCBA (Coursera)",
            Date: "Dec 2025",
            Link: "https://coursera.org/share/069c3adfc0d9120dd487e52349400c28"
        },
        {
            title: "Google Cybersecurity",
            issuer: "Google (Coursera)",
            Date: "Nov 2025",
            Link: "https://coursera.org/share/8510ff20d25aa47680f51198b50d759e"
        },
        {
            title: "Python for Everybody",
            issuer: "University of Michigan (Coursera)",
            Date: "Sep 2025",
            Link: "https://coursera.org/share/966772b30167e4b921f3145db61723dc"
        },
        {
            title: "Advanced Exploitation and Scripting Techniques",
            issuer: "Packt (Coursera)",
            Date: "Dec 2025",
            Link: "https://coursera.org/share/2bb8c86068d529866ed84391eaa456cd"
        },
        {
            title: "Ethical Hacking Capstone Project: Breach, Response, AI",
            issuer: "IBM (Coursera)",
            Date: "Dec 2025",
            Link: "https://coursera.org/share/ea1a9c0cc00d89a0bb73e9e48c32b926"
        },
        {
            title: "Security & Ethical Hacking: Attacking Web and AI Systems",
            issuer: "University of Colorado Boulder (Coursera)",
            Date: "Dec 2025",
            Link: "https://coursera.org/share/fa8dbd29e0ae2be3ef8ddaf76a3e31dc"
        },
        {
            title: "Information Security Foundations",
            issuer: "LearnKartS (Coursera)",
            Date: "Dec 2025",
            Link: "https://coursera.org/share/00efa639bab29194345e2d366200dea6"
        },
        {
            title: "AI For Everyone",
            issuer: "DeepLearning.AI (Coursera)",
            Date: "Nov 2025",
            Link: "https://coursera.org/share/afae977619763a5f6d2af1c4534ffcda"
        },
        {
            title: "Basics of Cisco Networking",
            issuer: "LearnQuest (Coursera)",
            Date: "Aug 2025",
            Link: "https://coursera.org/share/cd58729ca6b1d818797d8487fc79c2d7"
        }

    ];

    const [isExpanded, setIsExpanded] = useState(false);

    const displayedCert = isExpanded ? certData : certData.slice(0, 4);

    return (
        <section id="certificates" data-reveal className="scroll-mt-24 border-b border-gray-800 px-6 py-20 sm:px-10 md:py-24 lg:px-20">
            <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#c889a5]">06 / Learning &amp; credentials</p>
                    <h2 className="font-serif text-5xl font-medium text-white sm:text-6xl">Certificates</h2>
                </div>
                <p className="max-w-xs text-sm leading-6 text-gray-500">Selected courses and credentials in software and security.</p>
            </div>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {displayedCert.map((data, index) => (
                    <article key={data.title} className="group flex min-h-44 flex-col justify-between rounded-xl border border-gray-800 bg-white/[0.015] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c889a5]/50 hover:bg-[#c889a5]/[0.025] md:p-8">
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="mb-2 font-serif text-xl font-medium text-white">{data.title}</h3>
                                <p className="text-sm text-gray-400">{data.issuer}</p>
                            </div>
                            <span className="shrink-0 text-xs tracking-wide text-[#c889a5]/70">0{index + 1}</span>
                        </div>
                        <div className="mt-8 flex items-center justify-between gap-4">
                            <span className="text-xs text-gray-500">{data.Date}</span>
                            <a href={data.Link} target="_blank" rel="noreferrer" className="text-sm text-gray-300 transition-colors hover:text-[#c889a5] hover:underline hover:underline-offset-4">Verify <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-8">
                <button onClick={() => setIsExpanded(!isExpanded)} className="rounded-full border border-[#c3a9ff]/30 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-gray-300 transition-all duration-300 hover:border-[#c3a9ff] hover:bg-[#c3a9ff] hover:text-black">
                    {isExpanded ? "Show less" : "Show all credentials"}</button>
            </div>
            </div>
        </section>
    );
}

export default Certificates;