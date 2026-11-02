import { FaGithub, FaLinkedin, FaEnvelope, FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

const currentYear = new Date().getFullYear();

function Footer() {
    return (
        <footer id="contact" data-reveal className="scroll-mt-24 border-t border-gray-800 px-6 py-16 sm:px-10 md:py-20 lg:px-20">
            <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">
                <div>
                    <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#91aac4]">07 / Get in touch</p>
                    <h2 className="mb-5 font-serif text-4xl font-medium text-white sm:text-5xl">Let&apos;s connect.</h2>
                    <p className="max-w-md text-sm leading-7 text-gray-400">Available for freelance work and full-time opportunities.</p>
                    <a href="mailto:hifxakhn@gmail.com" className="mt-6 inline-block border-b border-[#c889a5]/40 pb-1 text-sm text-gray-300 transition-colors hover:border-[#c889a5] hover:text-[#e5b3c9]">hifxakhn@gmail.com</a>
                </div>
                <div className="md:justify-self-end">
                    <div className="mb-6 space-y-2 text-sm text-gray-500">
                        <p>Islamabad, Pakistan</p>
                        <a href="tel:+923225208827" className="transition-colors hover:text-white">
                        +92 322 5208827
                        </a>
                    </div>
                    <div className="flex gap-3 text-lg text-gray-400">
                <a aria-label="Email" href="mailto:hifxakhn@gmail.com" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#c3a9ff]/60 hover:text-[#c3a9ff]">
                    <FaEnvelope />
                </a>

                <a aria-label="LinkedIn" href="https://linkedin.com/in/hifzakhan24" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#91aac4]/60 hover:text-[#91aac4]">
                    <FaLinkedin />
                </a>

                <a aria-label="GitHub" href="https://github.com/hifxakhan" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#c889a5]/60 hover:text-[#c889a5]">
                    <FaGithub />
                </a>

                <a aria-label="Upwork" href="https://www.upwork.com/freelancers/~01069e3fd92ebc1c53" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#91aac4]/60 hover:text-[#91aac4]">
                    <FaUpwork />
                </a>

                <a aria-label="Fiverr" href="https://www.fiverr.com/hifxakhan" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#c3a9ff]/60 hover:text-[#c3a9ff]">
                    <SiFiverr />
                </a>

                    </div>
                </div>
            </div>
            <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-gray-800 pt-5 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
                <p>© {currentYear} Hifza Khan</p>
                <a href="#home" className="w-fit transition-colors hover:text-white">Back to top ↑</a>
            </div>
        </footer>
    );
}

export default Footer;