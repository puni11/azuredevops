import React from 'react';

export default function Certifications() {
  return (
    <div className='dark:bg-white'>
    <section id='certifications' className="max-w-7xl mx-auto pt-4 sm:pt-20 pb-12 px-6 sm:px-0 font-sans text-gray-900">
      
      {/* Section Header */}
      <div className="mb-12">
        <span className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 block">
          CERTIFICATIONS
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
          Walk Out With Skills That Map to Industry-Recognized Certifications.
        </h2>
        <p className="text-md text-gray-800 max-w-3xl">
          Our curriculum is engineered to comprehensively cover the objectives for the most in-demand cloud and DevOps exams. You'll build the exact skills needed to prove your expertise.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Card 1: AZ-104 */}
        <div className="flex flex-col border border-gray-200 bg-white shadow-sm overflow-hidden h-full">
          {/* Card Content Top */}
          <div className="p-8 pb-6 flex-grow">
            <span className="uppercase tracking-widest text-[10px] font-bold text-gray-500 mb-3 block">
              AZ-104
            </span>
            <h3 className="text-2xl font-bold mb-3">
              Microsoft Azure Administrator
            </h3>
            <p className="text-sm text-gray-800 mb-6 min-h-[40px]">
              Master managing cloud services that span storage, security, networking, and compute cloud capabilities. Build, configure, and monitor your Azure infrastructure.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">Compute</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">Storage</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">Networking</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">Identity</span>
            </div>
          </div>

        

          {/* Card Footer Bar */}
          <div className="bg-[#0B1A3A] text-white text-xs font-medium px-6 py-4">
            Learn resource management and deployment in enterprise Azure environments
          </div>
        </div>

        {/* Card 2: AZ-400 */}
        <div className="flex flex-col border border-gray-200 bg-white shadow-sm overflow-hidden h-full">
          {/* Card Content Top */}
          <div className="p-8 pb-6 flex-grow">
            <span className="uppercase tracking-widest text-[10px] font-bold text-gray-500 mb-3 block">
              AZ-400
            </span>
            <h3 className="text-2xl font-bold mb-3">
              Designing and Implementing Microsoft DevOps Solutions
            </h3>
            <p className="text-sm text-gray-800 mb-6 min-h-[40px]">
              Combine people, processes, and technologies to continuously deliver valuable products. Master CI/CD pipelines, source control, and agile practices.
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">CI/CD</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">Agile</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold border border-gray-200 px-3 py-1 text-gray-700">IaC</span>
            </div>
          </div>

     

          {/* Card Footer Bar */}
          <div className="bg-[#0B1A3A] text-white text-xs font-medium px-6 py-4">
            Design strategies for continuous delivery, infrastructure orchestration, and code quality
          </div>
        </div>

      </div>

      {/* Trademark Disclaimer */}
 

    </section>
    </div>
  );
}