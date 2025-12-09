function Experience() {
  const experiences = [
    {
      role: "Programmer",
      company: "MiUni LLC",
      location: "Mayagüez",
      period: "Aug 2025 - Present",
      description:
        "Building cross-platform apps in Flutter with Firebase, focusing on real products for university life and local communities.",
      stack: ["Flutter", "Dart", "Firebase", "Clean Architecture"],
    },
    {
      role: "Student Researcher – Embedded Systems",
      company: "Embedded Systems Research Group",
      location: "UPR Mayagüez",
      period: "Aug 2025 – Present",
      description:
        "Developing C/C++ IoT and smart-grid systems for Puerto Rico’s energy infrastructure, integrating hardware, networking, and data.",
      stack: ["C/C++", "Embedded Systems", "IoT", "Python"],
    },
    {
      role: "Reliability Engineering Intern",
      company: "LUMA Energy",
      location: "San Juan, Puerto Rico",
      period: "Summer 2025",
      description:
        "Analyzed outage data, reliability metrics, and automated reporting workflows to support grid reliability and decision-making.",
      stack: ["Data Analysis", "Excel/Power BI", "Automation"],
    },
    {
      role: "Recovery Member",
      company: "Draco Rocketry Team",
      location: "UPR Mayagüez",
      period: "2023 – 2024",
      description:
        "Contributed to avionics and recovery systems for a high-power rocket, working with sensors, telemetry, and flight safety.",
      stack: ["Sensors", "Team Engineering"],
    },
  ];

  return (
    <section id="experience" className=" text-white py-15">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex justify-between">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Experience
        </h2>
        <a 
        href='/ResumeA.pdf'
        download
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl shadow-md shadow-green-500 hover:shadow-green-900 hover:shadow-xl bg-green-600 hover:bg-green-900 hover:text-green-500 h-10 px-4 flex 
        items-center w-44 font-semibold transition-colors ease-in  animate-bounce"
        >
          Download Resume
        </a>
        </div>

        <div className="space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.role + exp.company}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 md:p-7"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-400">
                    {exp.company} · {exp.location}
                  </p>
          
                </div>

                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>

              <p className="mt-4 text-sm md:text-base text-gray-300">
                {exp.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs bg-zinc-800 text-gray-200"
                  >
                    {tag}
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

export default Experience;
