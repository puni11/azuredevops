"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronsRightIcon, MousePointerClickIcon } from "@animateicons/react/lucide";

const personas = [
    
  {
    id: "beginners",
    tag: "NEW LEARNERS",
    tabTitle: "Beginners & Career Switchers",
    headline: "Starting Fresh? Build a Future-Proof Cloud Career.",
    copy: "No IT background? No problem. We start with the absolute basics of cloud computing and guide you step-by-step through Azure fundamentals and entry-level DevOps practices.",
    roles: ["Junior IT Associate", "Aspiring Cloud Engineer"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    quote: "I never thought I could break into tech, but this structured, step-by-step path made it possible.",
  },
  {
    id: "alumni",
    tag: "ALUMNI",
    tabTitle: "Former DevOps Students",
    headline: "Already Done Our DevOps Course? Add Azure & Go Further.",
    copy: "You've got the DevOps fundamentals. Now add Azure cloud + Azure DevOps pipelines to your skillset and qualify for cloud-focused roles that pay more. Alumni get special fast-track access.",
    roles: ["Azure DevOps Trainee", "Junior Cloud Engineer"],
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop",
    quote: "I wanted to upgrade my skills and Azure was the perfect next step for my career.",
  },
  {
    id: "linux",
    tag: "SYSADMINS",
    tabTitle: "Linux Administrators",
    headline: "Linux Admin? You're Closer to Cloud Than You Think.",
    copy: "Your server, networking, and scripting skills transfer directly. This course bridges the gap with Azure infrastructure, IaC, and DevOps automation — so you can move from on-prem admin to cloud engineer.",
    roles: ["Cloud Systems Administrator", "Azure Infrastructure Engineer"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
    quote: "Moving from on-prem to Azure felt like unlocking a whole new level in my infrastructure career.",
  },
  {
    id: "devops",
    tag: "MID-SENIOR",
    tabTitle: "DevOps Engineers",
    headline: "Already Doing DevOps? Make Azure Your Specialization.",
    copy: "CI/CD, containers, and automation experience? Layer in Azure DevOps, AKS, and Azure-native pipelines to become the engineer every cloud-first company is hiring for.",
    roles: ["Senior Azure DevOps Engineer", "Cloud Automation Specialist"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    quote: "Specializing in Azure-native pipelines gave me the exact edge I needed to land senior roles.",
  },
  {
    id: "network",
    tag: "INFRASTRUCTURE",
    tabTitle: "Network Engineers",
    headline: "Network Engineer? Cloud Networking Is Your Next Move.",
    copy: "Take your routing, firewall, and infrastructure expertise into Azure Virtual Networks, hybrid connectivity, and cloud security — skills that are in short supply right now.",
    roles: ["Cloud Network Engineer", "Azure Security Specialist"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    quote: "Translating my hardware routing skills directly to Azure Vnets was incredibly seamless.",
  },
];

export default function PersonaSection() {
  const [activeTab, setActiveTab] = useState(personas[0].id);

  const activePersona = personas.find((p) => p.id === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:px-6 lg:px-0 font-lexend">
      {/* Header Section */}
      <div className="mb-12">
        <h2 className="text-sm font-bold tracking-wide text-gray-400 uppercase mb-3">
          Who It Is For?
        </h2>
        <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">
          DevOps is reshaping every infrastructure role. <br className="hidden md:block" />
          Are you ready for yours?
        </h3>
        <p className="text-gray-800 max-w-3xl text-md sm:text-lg">
          The problem is not experience. It is that your current stack does not include the 
          cloud-native layer companies now expect from modern engineers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
        {/* Left Column: Accordion Tabs */}
        <div className="flex flex-col border-t border-gray-200">
          {personas.map((persona) => {
            const isActive = activeTab === persona.id;

            return (
              <div
                key={persona.id}
                className={`border-b border-gray-200 transition-colors duration-300 ${
                  isActive ? "bg-white" : "hover:bg-gray-50 cursor-pointer"
                }`}
                onClick={() => setActiveTab(persona.id)}
              >
                <div className="p-6 relative group">
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0078d4] to-[#fff]"
                    />
                  )}

                  <div className="flex items-center gap-4 mb-2">
                    <span className="bg-gray-900 text-white text-[10px] font-bold px-1.5 py-0.5 tracking-wider">
                      {persona.tag}
                    </span>
                  </div>
                  
                  {/* Title and Expansion Indicator Icon */}
                  <h4 className={`text-xl flex justify-between items-center font-semibold transition-colors duration-200 ${isActive ? "text-[#0078d4]" : "text-gray-800 group-hover:text-[#0078d4]"}`}>
                    {persona.tabTitle} 
                    <motion.div
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`flex-shrink-0 ml-4 ${isActive ? "text-[#0078d4]" : "text-gray-400 group-hover:text-[#0078d4]"}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </motion.div>
                  </h4>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-4">
                          <h5 className="font-bold text-gray-900">
                            {persona.headline}
                          </h5>
                          <p className="text-gray-800 leading-relaxed">
                            {persona.copy}
                          </p>

                          {/* Replaced CTA with Roles */}
                          <div className="pt-4">
                            <h6 className="text-xs font-bold tracking-widest text-[#0078d4] uppercase mb-3">
                              Target Roles
                            </h6>
                            <ul className="space-y-2">
                              {persona.roles.map((role, idx) => (
                                <li key={idx} className="flex gap-1 items-center text-sm text-gray-700">
                                 <ChevronsRightIcon
                                    size={18}
                                    duration={1}
                                    className="text-gray-700"
                                  />
                                  {role}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Image & Quote */}
        <div className="relative h-[400px] lg:h-auto min-h-[500px] w-full rounded-md overflow-hidden bg-gray-100 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <img
                src={activePersona.image}
                alt={activePersona.tabTitle}
                className="w-full h-full object-cover"
              />
              
              {/* Glassmorphism Quote Overlay matching image_0b0786.jpg style */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent backdrop-blur-[2px]">
                <div className="max-w-md">
                  <svg className="w-8 h-8 text-white/50 mb-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-white text-xl md:text-2xl font-medium italic leading-snug">
                    {activePersona.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}