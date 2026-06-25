import React from 'react';

const pipelineProjects = [
  {
    id: 1,
    title: "Basic CI/CD Pipeline",
    subtitle: "for .NET App",
    description: "Build & deploy to Azure App Service",
    topColor: "bg-[#1a0b2e]", 
    bottomColor: "bg-[#11071f]"
  },
  {
    id: 2,
    title: "React Frontend",
    subtitle: "Deployment",
    description: "npm build pipeline, deploy to Azure Static Web App",
    topColor: "bg-[#0078d4]", 
    bottomColor: "bg-[#ffffff]"
  },
  {
    id: 3,
    title: "Java App",
    subtitle: "Pipeline",
    description: "Maven/Gradle build + deploy to Azure Web Apps",
    topColor: "bg-[#1c1114]", 
    bottomColor: "bg-[#120a0d]"
  },
  {
    id: 4,
    title: "Multi-Stage",
    subtitle: "Pipeline",
    description: "CI/CD for Dev → QA → Prod environments",
    topColor: "bg-[#1a0b2e]", 
    bottomColor: "bg-[#11071f]"
  },
  {
    id: 5,
    title: "Container Deployment",
    subtitle: "Pipeline",
    description: "Docker build, push to ACR, deploy to Azure Web App for Containers",
    topColor: "bg-[#a60099]",
    bottomColor: "bg-[#7a0071]"
  },
  {
    id: 6,
    title: "IaC + App Deployment",
    subtitle: "Pipeline",
    description: "Provision infra (ARM/Terraform) + deploy application",
    topColor: "bg-[#1c1114]",
    bottomColor: "bg-[#120a0d]"
  },
  {
    id: 7,
    title: "Kubernetes",
    subtitle: "Pipeline",
    description: "CI/CD deploying containerized app to AKS (YAML provided)",
    topColor: "bg-[#1a0b2e]",
    bottomColor: "bg-[#11071f]"
  },
  {
    id: 8,
    title: "Final Capstone",
    subtitle: "Project",
    description: "End-to-end DevOps workflow integrating Repos, Boards, Pipelines, IaC, Containers, and gated approvals.",
    topColor: "", 
    bottomColor: "" 
  }
];

export default function ProjectsSection() {
  return (
    <section className="relative bg-gradient-to-b from-sky-50/80 via-white to-white py-16 px-6 md:px-8 overflow-hidden">
      <style>{`
        @keyframes acp-grain-shift {
          0%, 100% { transform: translate(0%, 0%); }
          10% { transform: translate(-4%, -6%); }
          20% { transform: translate(-8%, 3%); }
          30% { transform: translate(5%, -10%); }
          40% { transform: translate(-3%, 9%); }
          50% { transform: translate(-9%, 4%); }
          60% { transform: translate(8%, 0%); }
          70% { transform: translate(0%, 8%); }
          80% { transform: translate(3%, -5%); }
          90% { transform: translate(-6%, 3%); }
        }
        .acp-grain-overlay {
          animation: acp-grain-shift 1.2s steps(8) infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .acp-grain-overlay { animation: none; }
        }
      `}</style>

      <div
        className="acp-grain-overlay pointer-events-none absolute"
        style={{
          top: '-50%',
          left: '-50%',
          width: '200%',
          height: '200%',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 900 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.0' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '260px 260px',
          mixBlendMode: 'multiply',
          opacity: 0.55,
        }}
      />
      <div className="max-w-7xl mx-auto w-full">
          <div className="mb-12">
        <span className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 block">
          PROJECTS
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-black">
          Project Completed in Microsoft Azure Devops Course
        </h2>
        <p className="text-md text-gray-800 max-w-3xl">
          Students will complete 8 progressive projects (all pipelines they
build in class, plus integrated capstones).
        </p>
      </div>
        {/* Set to grid-cols-2 to give the cards wide breathing room like the image */}
        <div className="grid grid-cols-1 md:grid-cols-4">
          {pipelineProjects.map((project) => (
            <div 
              key={project.id} 
              className="flex flex-col bg-white border border-gray-100 overflow-hidden"
            >
              {/* Main Content Body */}
              <div className="flex-grow p-8 md:p-6">
                {/* Top ID / Identifier */}
                <p className="text-xs font-bold text-slate-800 mb-4 uppercase">
                  PROJECT 0{project.id}
                </p>
                
                {/* Title */}
                <h4 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">
                  {project.title}
                </h4>
                
                {/* Description Body */}
                <p className="text-gray-800 mb-8 text-base leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags Section (Reusing 'subtitle' to match the image's layout) */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-0.5 border border-gray-200 text-[11px] font-bold text-slate-800 tracking-wider uppercase">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Bottom Dark Footer */}
              <div className="bg-[#0b1324] px-8 py-5 mt-auto">
                <p className="text-white text-xs font-semibold tracking-wide">
                  Review & Deploy Pipeline Configuration
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}