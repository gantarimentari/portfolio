'use client';

import Image from 'next/image';

export default function About({ isVisible }) {
  const technologies = [
    'JavaScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Git & GitHub',
  ];

  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            <span className="text-pink-500">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Hello! I'm Larasati, a software engineering student based in Yogyakarta, Indonesia. I have a strong passion for building exceptional digital experiences through clean code and thoughtful design.
              </p>
              <p>
                Through various academic and personal projects, I have strengthened my problem-solving abilities, technical thinking, and adaptability when facing challenges. I rely on research, analysis, and experimentation to understand issues and implement the right solutions.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4 text-sm sm:text-base">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-pink-500 mr-2">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative order-first md:order-last">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 border-2 border-pink-500 rounded-lg transform rotate-6 hover:rotate-3 transition-transform duration-300"></div>
                <div className="relative bg-gray-800 rounded-lg p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-square bg-gradient-to-br from-pink-400 to-yellow-400 rounded-lg overflow-hidden">
                    <Image
                      src="/potoku.jpg"
                      alt="My Photo"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

