'use client';

export default function Hero({ isVisible }) {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg sm:text-xl text-pink-500 font-medium mb-4">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-gray-900">
            Larasati Ayu Gantari
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-gray-700">
            I build things for the web.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            I am a Software Engineering student at <span className="text-pink-500 font-semibold">Universitas Gadjah Mada</span> with a strong interest in web development. I enjoy working collaboratively in teams, sharing ideas, and building solutions together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a 
              href="#contact" 
              className="inline-block px-8 py-4 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 hover:shadow-lg hover:scale-105 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="inline-block px-8 py-4 bg-transparent text-gray-700 rounded-lg font-semibold hover:bg-gray-100 border-2 border-gray-300 hover:border-pink-500 transition-all duration-300 text-center"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

