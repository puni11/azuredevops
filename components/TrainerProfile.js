import React from 'react';
import { 
  Briefcase, 
  Award, 
  Users, 
  Terminal,  
  CheckCircle2 
} from 'lucide-react';
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-4 h-4"
    fill="currentColor"
  >
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-341C24.3 107 0 82.7 0 53.8A53.79 53.79 0 0 1 53.84 0c29.54 0 53.84 24.3 53.84 53.8 0 28.9-24.3 53.2-53.84 53.2zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.7-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
);
export default function TrainerProfile() {
  return (
    <section id='instructor' className="bg-gradient-to-b from-sky-50/80 via-white to-white border-b-1 border-gray-200 px-6 py-20 text-gray-900">
      <div className='max-w-7xl mx-auto'>
      {/* Section Header */}
      <div className="mb-12">
        <span className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 block">
          MEET YOUR INSTRUCTOR
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-black">
          Learn From Someone Who's Actually Done the Job.
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl">
          Skip the theoretical slide-readers. Get trained by an active industry practitioner who builds enterprise cloud architectures every single day.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-sm shadow-xl shadow-blue-900/5 border border-gray-100 overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Column: Photo Area */}
        <div className="md:w-2/5 relative p-8 md:p-12 flex items-center justify-center bg-gray-50 border-r border-gray-100 overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          </div>
          
          <div className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-sm overflow-hidden shadow-lg border-4 border-white">
            <img 
              src="/kunali.jpeg" 
              alt="Trainer Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
          
          {/* Header & LinkedIn */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">Mr. Kunal Parihar</h3>
              <p className="text-sm text-blue-800 font-medium">Cloud Infrastructure Engineer | Terraform Automation Expert | CI/CD Pipeline Architect </p>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/kunal-singh-35975923a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#0A66C2] text-white text-xs font-semibold rounded-sm hover:bg-[#004182] transition-colors w-40"
            >
             <LinkedInIcon />
              See Profile
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xs bg-gray-50 flex items-center justify-center text-gray-800 shrink-0">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">8+ Years Experience</p>
                <p className="text-sm text-gray-600">Enterprise Azure & DevOps Infra</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xs bg-gray-50 flex items-center justify-center text-gray-800 shrink-0">
                <Users size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">15,000+ Students</p>
                <p className="text-sm text-gray-600">Trained globally across 40+ cohorts</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:col-span-2">
              <div className="w-10 h-10 rounded-xs bg-gray-50 flex items-center justify-center text-gray-600 shrink-0">
                <Award size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Active Certifications</p>
                <div className="flex flex-wrap gap-2 mt-2">
  {[
    "RHCSA",
    "Red Hat Containers Specialist",
    "Red Hat Automation Platform Specialist",
    "AWS Solutions Architect Associate",
    "AZ-104",
    "AZ-400",
    "AZ-305",
    "Red Hat Enterprise Linux Diagnostics & Troubleshooting",
    "LFS101 - Introduction to Linux",
  ].map((cert) => (
    <span
      key={cert}
      className="flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md border border-gray-200"
    >
      <CheckCircle2 size={12} className="text-green-600" />
      {cert}
    </span>
  ))}
</div>
              </div>
            </div>

          </div>

          {/* Teaching Style Quote */}
          <div className="bg-[#0B1A3A] rounded-md p-6 relative overflow-hidden">
            {/* Decorative Quote Mark */}
            <div className="absolute -top-4 -right-2 text-8xl text-white/5 font-serif leading-none select-none">
              "
            </div>
            
            <div className="relative z-10 flex gap-4">
              <Terminal className="text-yellow-50 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-white font-bold mb-2">Teaching Philosophy</h4>
                <p className="text-white/80 text-sm leading-relaxed italic">
                  "Known for hands-on labs over slide decks. I believe you don't learn cloud by watching; you learn by doing. Every session ends with something deployed, broken, and fixed—not just discussed."
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}