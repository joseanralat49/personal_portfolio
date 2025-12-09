function Skills() {
  const sections = [
 {
      title: "Mobile & Frontend",
      skills: [
        { name: "Flutter", level: 5 },
        { name: "Dart", level: 5 },
        { name: "React", level: 3 },
        { name: "Tailwind CSS", level: 3 },
        { name: "UI/UX & Product Thinking", level: 4 },
      ],
    },
    {
      title: "Languages & Core",
      skills: [
        { name: "C/C++", level: 4 },
        { name: "Python", level: 4 },
        { name: "Java", level: 3 },
        { name: "JavaScript", level: 3 },
        {name: "HTML", level:4},
        { name: "OOP / Data Structures", level: 4 },
      ],
    },
    {
      title: "Backend, Data & Cloud",
      skills: [
        { name: "Firebase / Firestore", level: 4 },
        { name: "FastAPI", level: 3 },
        { name: "REST APIs", level: 4 },
        { name: "Backend Development", level: 4 },
        { name: "pandas", level: 3 },
        { name: "NumPy", level: 3 },
        { name: "Matplotlib", level: 3 },
        { name: "Vercel", level: 3 },
        { name: "Git / GitHub", level: 5 },
      ],
    },
    {
      title: "Tools & Practices",
      skills: [
        { name: "Android Studio", level: 5 },
        { name: "VS Code", level: 5 },
        { name: "XCode", level: 3 },
        { name: "Clean Architecture", level: 5 },
        { name: "Microsoft Office", level: 4 },
        { name: "BLoC", level: 4 },
        { name: "CAD Design", level: 3 },
      ],
    },
  ];

  const renderStars = (level) => {
    const total = 5;
    return (
      <div className="flex gap-0.5">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={
              i < level ? "text-green-400 text-xs" : "text-zinc-700 text-xs"
            }
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section id="skills" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Skills
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 md:p-6"
            >
              <h3 className="text-lg font-semibold mb-4">
                {section.title}
              </h3>

              <div className="space-y-3">
                {section.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="text-sm text-gray-200">
                      {skill.name}
                    </span>
                    {renderStars(skill.level)}
                  </div>
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
