function Navbar() {
    const links = [
        { label: "Home", href: "#home" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills", desktopOnly: true },
        { label: "Experience", href: "#experience", desktopOnly: true },
        { label: "About", href: "#about" },
        { label: "Education", href: "#education", desktopOnly: true },
        { label: "Certificates", href: "#certificates", desktopOnly: true },
        { label: "Contact", href: "#contact" },
        { label: "Resume", href: "/CV.pdf", download: true },
    ];

    return (
        <nav aria-label="Main navigation" className="fixed left-3 right-3 top-3 z-50 flex items-center justify-between gap-5 rounded-2xl border border-white/10 bg-[#09080d]/75 px-4 py-4 text-[10px] tracking-[0.1em] text-gray-300 shadow-[0_12px_42px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-7 sm:text-xs lg:left-8 lg:right-8 lg:px-10">
            <a href="#home" className="font-serif text-xl text-white transition-colors hover:text-[#c3a9ff]" aria-label="Hifza Khan, home">HK.</a>
            <div className="flex max-w-[calc(100vw-5rem)] items-center gap-4 overflow-x-auto whitespace-nowrap [scrollbar-width:none] sm:max-w-none sm:gap-6 lg:gap-8 [&::-webkit-scrollbar]:hidden">
                {links.map((link) => (
                    <a key={link.label} href={link.href} download={link.download || undefined} className={`${link.desktopOnly ? "hidden lg:inline" : ""} transition-colors duration-200 hover:text-[#c3a9ff]`}>
                        {link.label}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;