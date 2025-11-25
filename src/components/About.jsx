import React from "react";

function About() {
  return (
    <section id="about" className="text-white py-4">
      <div className="max-w-6xl mx-auto px-4 md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-2 text-left flex flex-col">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">
            Josean Ralat — Portfolio
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold">
            Turning Ideas
            <br /> Into Reality
          </h1>

          <p className="text-gray-400 text-justify">
            I’m a Computer Engineering student focused on building real-world apps and
            websites. I love creating tools people actually use. I work as a programmer at
            MiUni LLC building cross-platform apps in Flutter with Firebase, and as a
            member of an Embedded Systems Research Group developing C/C++ IoT systems for
            Puerto Rico’s smart grid. Previously, I interned on LUMA Energy’s Reliability
            Team and contributed to Draco’s NASA Student Launch team, which sharpened my
            mindset around data, safety, and real-world engineering.
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-8">
            <img
              className="h-40 w-40 hover:animate-pulse"
              src="/images/logo-ucm.png"
              alt="Logo of UCM"
            />
            <img
              className="h-40 w-40 hover:animate-pulse"
              src="/images/logo-uprm.png"
              alt="Logo of UPRM"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
