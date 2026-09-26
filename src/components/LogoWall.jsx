import React from "react";

const TECHNOLOGIES = [
  { name: "Go (Golang)", file: "go" },
  { name: "Laravel", file: "laravel" },
  { name: "PHP", file: "php" },
  { name: "React", file: "react" },
  { name: "TypeScript", file: "typeScript" },
  { name: "PostgreSQL", file: "postgresql" },
  { name: "MySQL", file: "mysql" },
  { name: "Docker", file: "docker" },
  { name: "Tailwind CSS", file: "tailwindcss" },
  { name: "Git", file: "git" },
];

export default function LogoWall() {
  // Duplicate list for seamless infinite loop
  const list = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <div className="relative overflow-x-hidden py-8 border-y border-[#ffffff10] select-none">
      {/* Side gradient masks for smooth entry and exit */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-[#101010] to-transparent z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-[#101010] to-transparent z-20"></div>

      {/* Infinite continuous marquee track */}
      <div className="animate-scroll">
        {list.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2.5 pr-12 md:pr-16 group transition-all duration-300"
            aria-hidden={index >= TECHNOLOGIES.length ? "true" : "false"}
          >
            <img
              src={`/svg/${tech.file}.svg`}
              alt={tech.name}
              className="h-6 sm:h-7 w-auto object-contain transition-transform group-hover:scale-110 opacity-85 group-hover:opacity-100"
              width="28"
              height="28"
              loading={index < TECHNOLOGIES.length ? "eager" : "lazy"}
              decoding="async"
            />
            <span className="text-sm sm:text-base font-medium text-[#f3f3f398] group-hover:text-white transition-colors whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
