import { SparklesIcon } from "@animateicons/react/lucide";


export default function CourseFeatures() {
  // Content sourced directly from the provided training syllabus.
  const features = [
    {
      id: 1,
      title: "Beginner to Advanced",
      copy: "Start with Azure Global Infrastructure and progress to Expert level over a 1 Month (30 Days) fast track.",
    },
    {
      id: 2,
      title: "Production-First Learning",
      copy: "Complete an End-to-End DevOps Project covering GitHub, YAML Pipelines, Terraform, and AKS deployment.",
    },
    {
      id: 3,
      title: "Learn → Practice → Deploy",
      copy: "Build real-world Azure and DevOps skills with 2 Hours Daily of hands-on practical labs and monitoring implementation.",
    }
  ];

  // Base64 encoded SVG noise filter for the hover grain effect
  const grainBackground = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E`;

  return (
    <section className="w-full pb-16 px-6 sm:px-0 flex justify-center">
      <div className="max-w-7xl w-full  bg-white  border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`relative group p-10 flex flex-col items-start overflow-hidden transition-colors duration-300 ${
                index !== features.length - 1 ? "md:border-r border-gray-200" : ""
              } ${index !== 0 ? "border-t md:border-t-0 border-gray-200" : ""}`}
            >
              {/* Grain Hover Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-[0.15] transition-opacity duration-500 pointer-events-none mix-blend-multiply"
                style={{ 
                  backgroundImage: `url("${grainBackground}")`,
                  backgroundRepeat: "repeat" 
                }}
              />

              {/* Content Wrapper (Z-index ensures it sits above the grain) */}
              <div className="relative z-10">
                <div className="mb-4 text-[#008f8f]">
                  <SparklesIcon
  size={28}
  duration={1}
  color="#111"
/>

                </div>
                
                <h3 className="text-xl sm:text-2xl font-semibold text-[#070707] mb-3 tracking-tight">
                  {feature.title}
                </h3>
                
                <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                  {feature.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}