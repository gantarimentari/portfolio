'use client';

import Image from 'next/image';

export default function Projects({ isVisible }) {
  const projects = [
    {
      title: 'Company Profile drh.Fanina',
      description: 'Web Company Profile for Drh. Fanina is a project I am currently developing to create a professional website for a veterinary practitioner. The site is designed to showcase service information, doctor profiles, and clinic contact details in a clear and user-friendly way. The main focus is on delivering a modern, clean, and accessible interface that helps pet owners quickly find the information they need.As the Front-End Developer, I am responsible for the end-to-end UI implementation—starting from translating the Figma design into responsive layouts, building the components, and integrating essential content and features to support Drh. Fanina\'s branding.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com/gantarimentari/compro-PAD',
      image: '/fanina.png',
    },
    {
      title: 'Pawfriend',
      description: 'Pawfriend is a web application project developed for my Web Programming Practicum course. The project focuses on creating an online platform that provides pet-related products and basic service features. Built using HTML, CSS, Bootstrap, and PHP, Pawfriend showcases essential pages such as product listings, service information, and simple user interactions.As the Front-End developer in this project, I worked on designing the interface, structuring the layout, and ensuring the website remains clean, responsive, and easy to navigate..',
      tech: ['HTML', 'JavaScript', 'CSS', 'Bootstrap', 'PHP'],
      github: 'https://github.com/gantarimentari/proyekPPW1-PawFriend',
      image: '/laptoppawfriend.png',
    },
    {
      title: 'PacMan 2.0',
      description: 'Pacman 2.0 is an upgraded version of the classic Pacman game that I developed with additional gameplay mechanics. Unlike the original Pacman where touching a ghost immediately ends the game, Pacman 2.0 introduces a more interactive and educational challenge system. In this version, when the player encounters a ghost, the game doesn\'t end right away. Instead, the player is given a multiple-choice question. If the player answers correctly, they keep all remaining lives and can continue the game. If the player answers incorrectly, they lose one of their three available lives.The game continues until all three lives are used up. This mechanic adds strategy, learning elements, and increased player engagement compared to the classic Pacman.',
      tech: ['Java'],
      github: 'https://github.com/gantarimentari/pacman2.0-OOP',
      image: '/pacman2.0.png',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-pink-500">03.</span> Some Things I've Built
          </h2>
          <div className="mt-12 space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative grid md:grid-cols-12 gap-4 items-center"
              >
                <div className={`md:col-span-7 relative z-10 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
                <div className={`md:col-span-5 relative z-20 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="text-sm text-pink-500 font-mono mb-2">Featured Project</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-pink-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-3 mb-4 text-sm font-mono text-gray-600">
                    {project.tech.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-500 transition-colors"
                      aria-label="GitHub"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

