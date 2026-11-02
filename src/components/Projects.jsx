import ProjectCard from "./ProjectCard";

function Projects() {
    const ProjectData = [
        {
            title: "ClassMate - AI Virtual Classroom",
            description: "Full-stack platform with OpenAI-powered lecture summaries. Built security-first with SQL-injection-safe inputs, hashed passwords, and encrypted user data.",
            tech: ["React", "Flask", "PostgreSQL", "OpenAI API"],
            link: "https://github.com/hifxakhan/classmate-virtual-classroom-and-meeting-platform",
            live: "https://classmate-virtual-classroom-and-mee.vercel.app/",
        },
        {
            title: "CCTV Backup Application",
            description: "Full-stack system that automates scheduled off-site CCTV backups to Google Drive, featuring a React dashboard, Flask API, and OAuth authentication.",
            tech: ["React", "Flask", "OAuth", "Socket.IO", "Google Drive API"],
            link: "https://github.com/hifxakhan/cctv-backup-app",
            live: "https://cctv-backup-app.vercel.app/", 
        },
        {
            title: "Cloud Dictionary",
            description: "A serverless dictionary application for cloud computing terms, deployed on AWS Amplify with real-time search.",
            tech: ["JavaScript", "AWS Amplify", "Serverless"],
            link: "https://github.com/hifxakhan/cloud-dictionary"
        }
    ];

    return (
        <section id="projects" data-reveal className="scroll-mt-24 px-6 py-20 sm:px-10 md:py-24 lg:px-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#91aac4]">01 / Selected work</p>
                        <h2 className="font-serif text-5xl font-medium text-white sm:text-6xl">Projects</h2>
                    </div>
                    <p className="max-w-xs text-sm leading-6 text-gray-500">A few recent explorations in software and security.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {ProjectData.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            index={index}
                            title={project.title}
                            description={project.description}
                            tech={project.tech}
                            link={project.link}
                            live={project.live} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;