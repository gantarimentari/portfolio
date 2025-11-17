'use client';

export default function Experience({ isVisible }) {
  const experiences = [
    {
      title: 'Software Engineering Technologies Student',
      company: 'Universitas Gadjah Mada',
      period: '2024 - Present',
      responsibilities: [
        'Studying software engineering fundamentals, algorithms, and data structures',
        'Participating in collaborative projects and team-based learning',
        'Building web applications using modern technologies',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-gray-900">
            <span className="text-pink-500">02.</span> Where I've Worked & Studied
          </h2>
          <div className="mt-8">
            <div className="border-l-2 border-pink-500 pl-6 sm:pl-8 space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[29px] sm:-left-[33px] top-0 w-4 h-4 bg-pink-500 rounded-full border-4 border-gray-50"></div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-pink-500 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-pink-500 mr-2 mt-1">▹</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

