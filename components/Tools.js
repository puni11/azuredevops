import React from 'react';

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const toolsList = [
  { name: "Microsoft Azure",     icon: `${CDN}/azure/azure-original.svg` },
  { name: "Azure Pipelines",     icon: `${CDN}/azuredevops/azuredevops-original.svg` },
  { name: "Terraform",           icon: `${CDN}/terraform/terraform-original.svg` },
  { name: "Kubernetes (AKS)",    icon: `${CDN}/kubernetes/kubernetes-plain.svg` },
  { name: "Azure Monitor",       icon: `${CDN}/azure/azure-original.svg` },
];

// Bicep and Azure Monitor don't have dedicated devicons — they share Azure branding.
// We'll style them with a tinted badge to differentiate.
const badgeTools = ["Azure Monitor", "Bicep"];

const ToolItem = ({ tool }) => (
  <div className="flex items-center gap-3 whitespace-nowrap px-4">
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: 8,
        background: badgeTools.includes(tool.name)
          ? (tool.name === "Bicep" ? 'rgba(0,100,180,0.12)' : 'rgba(0,160,120,0.12)')
          : 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        position: 'relative',
      }}
    >
      <img
        src={tool.icon}
        alt={tool.name}
        width={28}
        height={28}
        style={{
          objectFit: 'contain',
          filter: badgeTools.includes(tool.name)
            ? (tool.name === "Bicep"
                ? 'hue-rotate(190deg) saturate(1.4) brightness(0.9)'
                : 'hue-rotate(140deg) saturate(1.6) brightness(0.85)')
            : 'none',
        }}
      />
      {badgeTools.includes(tool.name) && (
        <span
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            fontSize: 7,
            fontWeight: 700,
            background: tool.name === "Bicep" ? '#0064b4' : '#00986e',
            color: '#fff',
            borderRadius: 3,
            padding: '1px 3px',
            lineHeight: 1,
            letterSpacing: 0,
          }}
        >
          {tool.name === "Bicep" ? "BCP" : "MON"}
        </span>
      )}
    </div>
    <span className="text-base md:text-lg text-gray-900 font-medium">{tool.name}</span>

    {/* Dot separator */}
    <span style={{ color: '#d1d5db', fontSize: 20, marginLeft: 8 }}>·</span>
  </div>
);

export const ToolsSection = () => {
  return (
    <div className="w-full font-lexend">
      <style>{`
        @keyframes scrollMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: flex;
          flex-shrink: 0;
          animation: scrollMarquee 30s linear infinite;
        }
        .marquee-wrapper:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <section className="marquee-wrapper relative w-full bg-white text-white py-0 md:py-5 shadow-sm overflow-hidden flex flex-col md:flex-row md:items-center">

        {/* Pinned heading */}
        <div className="relative md:absolute left-0 top-0 bottom-0 z-10 flex items-center justify-center md:justify-start px-4 py-3 md:py-0 md:px-8 lg:px-10 bg-white w-full md:w-auto border-b md:border-b-0 border-gray-100 shadow-sm md:shadow-[60px_20px_60px_-5px_rgba(255,255,255,255)]">
          <h4 className="font-bold text-black text-sm md:text-lg whitespace-nowrap tracking-wide text-center md:text-left">
            Tools you'll learn with us:
          </h4>
        </div>

        {/* Scrolling track */}
        <div className="flex w-full py-4 md:py-0 pl-0 md:pl-[260px] lg:pl-[320px]">

          <div className="animate-marquee items-center">
            {toolsList.map((tool, i) => (
              <ToolItem key={`a-${i}`} tool={tool} />
            ))}
          </div>

          <div className="animate-marquee items-center" aria-hidden="true">
            {toolsList.map((tool, i) => (
              <ToolItem key={`b-${i}`} tool={tool} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default ToolsSection;