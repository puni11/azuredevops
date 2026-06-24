import React from 'react';

export default function CareerStats() {
  return (
    <section className="relative w-full bg-[#0055FF] overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 px-6 text-white"
     style={{
            background: `
              linear-gradient(to bottom right, #0078d4 50%, #ffff 100%),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 900 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='10.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")
            `,
            backgroundBlendMode: 'soft-light',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
    >
      
      {/* Background Soft Glow (Top Left) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Half: Text & Roles List */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16 md:mb-24">
          
          {/* Left Column: Headings */}
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.15em] text-xs font-semibold text-white/80 mb-4 block">
              One-Month Fast Track Training Program
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold leading-[1.15] tracking-tight">
              Master Azure Administrator (AZ-104) 
              & Azure DevOps Engineer Expert <br className="hidden md:block" />
              (AZ-400).
            </h2>
          </div>

          {/* Right Column: Roles */}
          <div className="flex flex-col gap-4 lg:gap-3 lg:mt-10 lg:min-w-[350px]">
            <h3 className="text-xl md:text-2xl font-medium text-white/90">Cloud Engineers</h3>
            <h3 className="text-xl md:text-2xl font-medium text-white/90">System Administrators</h3>
            <h3 className="text-xl md:text-2xl font-medium text-white/90">Solution Architects</h3>
          </div>
          
        </div>

        {/* Bottom Half: Stats Grid Box */}
        <div className="bg-white text-gray-900 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-200 shadow-2xl">
          
          {/* Stat Box 1 */}
          <div className="flex flex-col p-8 lg:p-10 min-h-[280px]">
            <h4 className="text-5xl lg:text-6xl font-light mb-6">60</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-8 flex-grow">
              Total Training Hours delivered through intensive 2-hour daily sessions over the course of 1 month (30 days).
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-auto">
              ONLINE / CLASSROOM MODE
            </p>
          </div>

          {/* Stat Box 2 */}
          <div className="flex flex-col p-8 lg:p-10 min-h-[280px]">
            <h4 className="text-5xl lg:text-6xl font-light mb-6">2</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-8 flex-grow">
              Major certifications covered: Microsoft Certified Azure Administrator Associate (AZ-104) and DevOps Engineer Expert (AZ-400).
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-auto">
              CERTIFICATIONS COVERED
            </p>
          </div>

          {/* Stat Box 3 */}
          <div className="flex flex-col p-8 lg:p-10 min-h-[280px]">
            <h4 className="text-5xl lg:text-6xl font-light mb-6">4</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-8 flex-grow">
              Weeks of comprehensive roadmap spanning Azure Fundamentals, Networking, Storage, Databases, Security, and Azure DevOps.
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-auto">
              BEGINNER TO ADVANCED LEVEL
            </p>
          </div>

          {/* Stat Box 4 */}
          <div className="flex flex-col p-8 lg:p-10 min-h-[280px]">
            <h4 className="text-5xl lg:text-6xl font-light mb-6">1</h4>
            <p className="text-sm text-gray-700 leading-relaxed mb-8 flex-grow">
              Complete End-to-End DevOps Project utilizing, Azure Repos, Pipelines, Terraform, and AKS.
            </p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-auto">
              REAL-WORLD HANDS-ON PROJECTS
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}