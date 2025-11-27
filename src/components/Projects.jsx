import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const [zoomImage, setZoomImage] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Workout Logger",
      tools: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
      links: ["https://github.com/joseanralat49/workoutApp"],
      images: [
        "/images/pic1w.png",
        "/images/pic2w.png",
        "/images/pic3w.png",
        "/images/pic4w.png",
        "/images/pic5w.png",
        "/images/pic6w.png",
      ],
      icons: [<FaGithub size={22} key="gh" />],
      video: "",
    },
    {
      name: "Expense Tracker",
      tools: ["Python", "pandas", "tkinter"],
      links: ["https://github.com/joseanralat49/expense_tracker/tree/main"],
      images: ["/images/exp1.png", "/images/exp2.png"],
      icons: [<FaGithub size={22} key="gh" />],
      video: "",
    },
    {
      name: "Personal Portfolio Website",
      tools: ["React", "Tailwind CSS", "JavaScript", "HTML"],
      links: ["https://josean-ralat-portfolio.vercel.app", "https://github.com/joseanralat49/personal_portfolio"],
      images: [],
      icons: [
        <FaExternalLinkAlt size={20} key="ext" />,
        <FaGithub size={22} key="gh"/>
      ],
      video: "/personalportfoliovid.mp4",
    },
  ];

  return (
    <section id="projects" className="text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-7 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <div 
                className="flex gap-4"
                >
                { project.links.map((link, i) => (
                <a
                  key={link}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors"
                >
                  {project.icons[i]}
                </a>))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {project.images.length > 0 && (
                <div className="mt-4 overflow-hidden">
                  <div
                    className={`
                      ${
                        hoveredProject === index ? "max-h-[400px] opacity-100"
                        :
                        "max-h-0 opacity-0"
                      }
                      transition-all duration-300
                      flex
                      `
                    }
                  >
                    {project.images.map((image) => (
                      <img
                        key={image}
                        src={image}
                        alt={project.name}
                        className="w-full h-40 object-cover rounded-md border border-zinc-800 cursor-pointer"
                        onClick={() => setZoomImage(image)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {project.video && (
                <div className="mt-4 overflow-hidden">
                  <div
                    className={`
                      ${
                        hoveredProject == index ? "max-h-[400px] opacity-100"
                        :
                        "max-h-0 opacity-0"
                      }
                      transition-all duration-300
                      flex
                    `}
                  >
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      controls
                      className="w-full h-auto rounded-md border border-zinc-800"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setZoomImage(null)}
        >
          <img
            src={zoomImage}
            alt="Zoomed"
            className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}

export default Projects;
