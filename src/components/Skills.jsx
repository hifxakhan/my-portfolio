function Skills() {
  const skillGroups = [
    { 
      category: "Frontend", 
      accent: "#c3a9ff", 
      skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML/CSS"] 
    },
    { 
      category: "Backend", 
      accent: "#91aac4", 
      skills: ["Python", "Flask", "Node.js", "REST APIs", "WebSockets"] 
    },
    { 
      category: "Databases", 
      accent: "#c889a5", 
      skills: ["PostgreSQL", "MySQL", "MariaDB"] 
    },
    { 
      category: "Security & AI", 
      accent: "#c3a9ff", 
      skills: ["OpenAI API", "Penetration Testing", "Wireshark", "Burp Suite", "Nmap"] 
    },
    { 
      category: "Tools & Cloud", 
      accent: "#91aac4", 
      skills: ["Git", "GitHub", "AWS Amplify", "Linux", "Vercel"] 
    }
  ];

  return (
    <section id="skills" data-reveal className="scroll-mt-24 border-b border-gray-800 px-6 py-20 sm:px-10 md:py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section (Kept identical) */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#c3a9ff]">02 / What I work with</p>
            <h2 className="font-serif text-5xl font-medium text-white sm:text-6xl">Technical Skills</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-gray-500">A focused toolkit for building reliable digital products.</p>
        </div>

        {/* Grouped Tags Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-y border-gray-800 py-10">
          {skillGroups.map((group, index) => (
            <div key={index} className="flex flex-col gap-4">
              
              {/* Category Title */}
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">0{index + 1}</span>
                <h3 className="text-lg text-gray-200 font-serif">{group.category}</h3>
              </div>
              
              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="border border-gray-800 text-xs text-gray-400 px-3 py-1.5 transition-colors duration-300 hover:text-white hover:border-gray-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;