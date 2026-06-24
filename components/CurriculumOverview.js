'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpenIcon, ChevronDownIcon, CircleCheckIcon, DownloadIcon } from '@animateicons/react/lucide';

export default function CurriculumOverview() {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? null : index);
  };

  const modules = [
    {
      title: " 1: Azure Fundamentals & Core Services",
      topics: [
        "Introduction to Cloud Computing, Azure Global Infrastructure, Regions and Availability Zones.",
        "Resource Groups, Azure Portal and Azure CLI.",
        "Azure App Services, Azure Container Instances, Azure Functions, and Azure Automation."
      ]
    },
    {
      title: " 2: Azure Administration (VMs, Storage, Networking, IAM)",
      topics: [
        "Microsoft Entra ID (Azure AD), Users and Groups, Administrative Units, Subscriptions and Management Groups.",
        "Role-Based Access Control (RBAC), Resource Locks, Tags, and Azure Policy.",
        "Azure Virtual Machines, Availability Sets, Availability Zones, VM Scale Sets, Managed Disks, Images and Snapshots, and Azure Bastion.",
        "Virtual Networks (VNet), Subnets, Network Security Groups (NSG), Application Security Groups (ASG), VNet Peering, Route Tables, and DNS.",
        "Azure Load Balancer, Application Gateway, Web Application Firewall (WAF), Azure Firewall, NAT Gateway, VPN Gateway, and ExpressRoute.",
        "Storage Accounts, Blob Storage, Azure Files, Queue and Table Storage, Storage Replication, Shared Access Signature (SAS), and Lifecycle Management."
      ]
    },
    {
      title: " 3: Infrastructure as Code (ARM/Bicep/Terraform)",
      topics: [
        "Infrastructure as Code concepts, ARM Templates, Bicep, and Azure CLI.",
        "Terraform with Azure, Variables, State Files, and Resource Provisioning."
      ]
    },
    {
      title: " 4: Azure DevOps — Boards, Repos, Pipelines, Artifacts",
      topics: [
        "DevOps Fundamentals, Agile and Scrum methodologies.",
        " Azure Repos, Branching Strategies, and Pull Requests."
      ]
    },
    {
      title: " 5: CI/CD Pipeline Design & Release Management",
      topics: [
        "CI/CD Concepts, Azure Pipelines, YAML Pipelines, and Build Agents.",
        "Continuous Integration and Continuous Delivery, Release Pipelines, and Deployment Strategies.",
        "Azure Container Registry (ACR).",
        "Azure Kubernetes Service (AKS), Deployments, Services, and Helm Charts."
      ]
    },
    {
      title: " 6: Monitoring, Security & Governance",
      topics: [
        "Azure SQL Database, Azure Database for MySQL, and Azure Cosmos DB.",
        "Azure Monitor, Log Analytics Workspace, Alerts and Metrics, Application Insights, Diagnostic Logs, and Resource Health.",
        "Recovery Services Vault, Azure Site Recovery, Business Continuity and Disaster Recovery, and Azure Backup.",
        "Microsoft Defender for Cloud, Azure Key Vault, and Managed Identity."
      ]
    },
    {
      title: " 7: Capstone Project + Certification Prep",
      topics: [
        "AZ-104 Practical Labs, Mock Test, and AZ-104 Real-Time Project covering High Availability Architecture, Backup, and Monitoring Implementation.",
        "End-to-End DevOps Project covering Azure Repos, Azure Pipelines, Terraform Infrastructure Provisioning, Azure Container Registry, and AKS Deployment.",
        "Complete CI/CD Pipeline integration using Azure Monitor and Log Analytics.",
        "Certification coverage: Microsoft Certified: Azure Administrator Associate (AZ-104) and Microsoft Certified: DevOps Engineer Expert (AZ-400)."
      ]
    }
  ];

  // Extracted card rendering logic to keep the JSX clean
  const renderModuleCard = (module, actualIndex) => {
    const isOpen = openModule === actualIndex;
    
    return (
      <div 
        key={actualIndex} 
        className={`bg-white border transition-all duration-300 rounded-sm overflow-hidden animate-roll ${
          isOpen ? 'border-[#000000]' : 'border-slate-200/80 hover:shadow-md hover:border-slate-300'
        }`}
      >
        <button
          onClick={() => toggleModule(actualIndex)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors focus:outline-none"
        >
          <span className={`text-lg md:text-md font-normal pr-4 transition-colors ${isOpen ? 'text-[#0078D4]' : 'text-slate-900'}`}>
            {module.title}
          </span>
          <div className={`px-1 py-1 rounded-full transition-all duration-300 flex items-center ${isOpen ? 'rotate-180 bg-blue-50 text-[#0078D4]' : 'bg-slate-50 text-slate-500'}`}>
            <ChevronDownIcon className="w-5 h-5" />
          </div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="p-6 pt-0 border-t border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
                <ul className="space-y-4 mt-4">
                  {module.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-slate-600 leading-relaxed group">
                      <CircleCheckIcon className="w-5 h-5 text-[#0078D4] mr-4 flex-shrink-0 mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:text-slate-900 transition-colors">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section id='curriculum' className=" py-20 border-t border-slate-200 font-lexend">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header Area */}
        <div className="text-left sm:text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6 max-w-3xl mx-auto">
            A Curriculum Built Around Real 
              Deployment Work, Not Just Theory
          </h2>
          <p className="text-md text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Master the 60-hour One-Month Fast Track Training Program through hands-on labs, real deployment pipelines, and expert guidance.
          </p>
        </div>

        {/* Layout: 3 Left, 3 Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Left Column (Modules 1-3) */}
          <div className="space-y-6">
            {modules.slice(0, 3).map((module, idx) => renderModuleCard(module, idx))}
          </div>

          {/* Right Column (Modules 4-6) */}
          <div className="space-y-6">
            {modules.slice(3, 6).map((module, idx) => renderModuleCard(module, idx + 3))}
          </div>
        </div>

        {/* 7th Module Centered at the Bottom */}
        <div className="max-w-7xl mx-auto mb-12 animate-roll">
          <div className="relative">
            {/* Optional stylistic flair for the capstone module */}
            <div className="absolute -inset-1 blur opacity-20"></div>
            <div className="relative">
              {renderModuleCard(modules[6], 6)}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex justify-center">
           <motion.a
           href='#formSub'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-2 shadow-2xl overflow-hidden rounded-md bg-gradient-to-b from-[#2380c6] to-[#3a8fd0] backdrop-blur-sm border border-white/20 px-6 py-2.5 font-semibold text-white transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                    <span className="relative z-10 flex items-center gap-2 text-sm">
                       <DownloadIcon size={16} />
                      Download Brochure
                     
                    </span>
                  </motion.a>
        </div>

      </div>
    </section>
  );
}