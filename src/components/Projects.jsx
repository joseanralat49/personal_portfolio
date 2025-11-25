import { FaGithub,FaExternalLinkAlt } from "react-icons/fa";
import {useState} from "react";

function Projects() {
  const [zoomImage, setZoomImage] = useState(null);
  const projects = [
    {
      name: "Workout Logger",
      tools: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
      link: "https://github.com/joseanralat49/workoutApp",
      images: ["src/assets/images/pic1w.png","src/assets/images/pic2w.png","src/assets/images/pic3w.png","src/assets/images/pic4w.png","src/assets/images/pic5w.png","src/assets/images/pic6w.png"],
      icons: [<FaGithub size={22}/>]
    },
    {
      name: "Expense Tracker",
      tools: ["Python", "pandas", "tkinter"],
      link: "https://github.com/joseanralat49/expense_tracker/tree/main",
      images: ["src/assets/images/exp1.png","src/assets/images/exp2.png"],
      icons: [<FaGithub size={22}/>]
    },
    {
      name:"Personal Portfolio Website",
      tools:["React", "Tailwind CSS", "JavaScript", "HTML"],
      link: "",
      images:[],
      icons:[<FaExternalLinkAlt size={20}/>]
    }
  ];

  return (
    <section id="projects" className=" text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-7 transition-all duration-300 hover:bg-zinc-900 hover:border-zinc-700"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-30 flex gap-2"
                >
                  {project.icons.map((icon,i) => (
                    <span 
                    key={i}
                    className="hover:text-green-500 transition-colors"
                    >{icon}</span>
                  ))}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-4 max-h-0 opacity-0 group-hover:max-h-64 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                <div className="flex gap-2">
                  {project.images.map((image) => (
                    <img
                    key={image}
                    src={image}
                    alt={project.name}
                    className="w-1/2 h-64 object-contain"
                    onClick={()=> setZoomImage(image)}
                  />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
      {zoomImage && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50 cursor-pointer"
        onClick={()=>setZoomImage(null)}>
          <img
          src={zoomImage}
          alt="ZoomedImage"
          className="max-w-[90%] max-h-[90%] object-contain rounded-lg shadow-lg"/>
        </div>
      )}
    </section>
  );
}

export default Projects;
