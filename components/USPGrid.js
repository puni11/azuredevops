import React from 'react';
import { 
  Terminal, 
  Target, 
  Users, 
  Briefcase, 
  Infinity, 
  CloudCheck
} from 'lucide-react';

export default function USPGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-gray-900">
      
      {/* Section Header */}
      <div className="mb-12">
        <span className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 block">
          WHY CHOOSE US
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
          Engineered for Career Transformation.
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl ">
          We don't just teach theory; we build practitioners. Here is what makes our training program different.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-6">
        
        {/* Card 1: Highlighted Feature (Spans 2 columns on desktop) */}
        <div className="md:col-span-2 bg-gradient-to-br from-[#0B1A3A] to-blue-900 rounded-sm p-8 md:p-10 text-white shadow-xl relative overflow-hidden group flex flex-col justify-end min-h-[250px]"
        style={{
            background: `
              linear-gradient(to bottom right, #0078d4 50%, #ffff 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 1600 4000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'soft-light',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Decorative background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-xs blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          
          <div className="relative z-10">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-sm flex items-center justify-center text-yellow-50 mb-6 border border-white/20">
              <Terminal size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Live, Hands-On Labs
            </h3>
            <p className="text-blue-50 text-lg max-w-lg leading-relaxed">
              Stop watching and start building. Participate in 100% live classes focusing on real-time enterprise labs, not just pre-recorded theory. 
            </p>
          </div>
        </div>

  
  <div className="relative h-80 overflow-hidden rounded-sm shadow-lg group cursor-pointer">

    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80')",
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">

      <div className="w-12 h-12 mb-4 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
        <CloudCheck size={24} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        Exam-Aligned Curriculum
      </h3>

      <p className="text-sm text-gray-200 leading-relaxed">
        Syllabus meticulously mapped to official
        <span className="font-semibold text-white"> AZ-104</span> and
        <span className="font-semibold text-white"> AZ-400</span> exam
        objectives.
      </p>

    </div>
  </div>

  {/* Card 2 */}
  <div className="relative h-80 overflow-hidden rounded-sm shadow-lg group cursor-pointer">

    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80')",
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">

      <div className="w-12 h-12 mb-4 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
        <Users size={24} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        1:1 Mentor Support
      </h3>

      <p className="text-sm text-gray-200 leading-relaxed">
        Small batch sizes guarantee personalized attention,
        helping you overcome challenges faster during real-world
        cloud and DevOps deployments.
      </p>

    </div>
  </div>

  {/* Card 3 */}
  <div className="relative h-80 overflow-hidden rounded-sm shadow-lg group cursor-pointer">

    <div
      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
      }}
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-40% to-transparent" />

    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">

      <div className="w-12 h-12 mb-4 rounded-md bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
        <Briefcase size={24} />
      </div>

      <h3 className="text-xl font-semibold text-white mb-2">
        Career & Interview Prep
      </h3>

      <p className="text-sm text-gray-200 leading-relaxed">
        Dedicated resume-building sessions, LinkedIn optimization,
        job assistance, and technical mock interviews to boost
        placement success.
      </p>

    </div>
  </div>
        {/* Card 5: Lifetime Access */}
      <div className="relative overflow-hidden rounded-sm p-8 border border-gray-100 shadow-lg shadow-gray-200/40 flex flex-col h-[320px] group hover:border-blue-200 transition-colors">

  {/* Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="https://stream.mux.com/BuGGTsiXq1T00WUb8qfURrHkTCbhrkfFLSv4uAOZzdhw.m3u8" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />

  {/* Icon Top */}
  <div className="relative z-10">
    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
      <Infinity size={26} />
    </div>
  </div>

  {/* Content Bottom */}
  <div className="relative z-10 mt-auto">
    <h3 className="text-xl font-semibold mb-2 text-white">
      Lifetime Access
    </h3>

    <p className="text-gray-200 text-sm leading-relaxed">
      Never lose your resources. Get lifetime access to class recordings,
      updated materials, and our alumni community.
    </p>
  </div>

</div>

      </div>
    </section>
  );
}