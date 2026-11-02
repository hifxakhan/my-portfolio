function ProjectCard({ title, description, tech, link, live }) {
  return (
    <div className="group flex flex-col border border-gray-800 bg-[#050505] overflow-hidden hover:border-gray-500 transition-colors">
      
      {/* The Live Website Preview */}
      {live && (
        <div className="relative w-full h-56 border-b border-gray-800 overflow-hidden bg-[#0a0a0a]">
          <iframe 
            src={live} 
            title={`${title} Live Preview`}
            className="w-[200%] h-[200%] origin-top-left scale-50 border-none opacity-60 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            // pointer-events-none is important! It stops the mouse from scrolling the iframe when you are trying to scroll the page.
          />
          {/* Optional: A subtle overlay to make it look like a window */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-80"></div>
        </div>
      )}

      {/* The Content Section */}
      <div className="p-6 flex flex-col flex-grow z-10">
        <h3 className="text-xl font-serif text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((s) => (
            <span key={s} className="text-xs text-gray-500 border border-gray-800 px-2 py-1">
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-sm font-medium text-white border-b border-white hover:text-gray-400 hover:border-gray-400 transition-colors pb-0.5">
              Open Live Site ↗
            </a>
          )}
          <a href={link} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-400 hover:text-white transition-colors pb-0.5">
            Source Code →
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;