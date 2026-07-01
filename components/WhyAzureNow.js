'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  LabelList,
} from 'recharts';
import { SquareArrowOutUpRightIcon } from '@animateicons/react/lucide';

const BLUE = '#0078D4';
const SKY = '#38BDF8';

export default function AzureCareerPaths() {
  const [activeTab, setActiveTab] = useState(0);
  const rolesData = [
    {
      designation: "Lead Azure Cloud Architect",
      salaries: [
        { level: "Entry-Level", min: 9, max: 13 },
        { level: "Mid-Level", min: 19, max: 26 },
        { level: "Senior-Level", min: 36, max: 48 },
      ],
      companies: ["Microsoft", "Accenture", "TCS", "Cognizant", "Infosys"],
      desc: "Designs full-scale cloud infrastructure using Azure; ensures performance, scalability, and robust security architectures."
    },
    {
      designation: "Sr. Azure DevOps Engineer",
      salaries: [
        { level: "Entry-Level", min: 7, max: 9 },
        { level: "Mid-Level", min: 15, max: 19 },
        { level: "Senior-Level", min: 26, max: 34 },
      ],
      companies: ["IBM", "Wipro", "HCLTech", "Deloitte", "Capgemini"],
      desc: "Implements CI/CD pipelines, manages infrastructure as code, and automates deployment processes using Azure DevOps."
    },
    {
      designation: "Azure Platform Engineer",
      salaries: [
        { level: "Entry-Level", min: 6, max: 8 },
        { level: "Mid-Level", min: 13, max: 17 },
        { level: "Senior-Level", min: 23, max: 30 },
      ],
      companies: ["Amazon", "Tech Mahindra", "Oracle", "Mindtree", "LTI"],
      desc: "Builds and maintains internal developer platforms and manages containerized applications via AKS (Azure Kubernetes Service)."
    },
    {
      designation: "Site Reliability Engineer",
      salaries: [
        { level: "Entry-Level", min: 9, max: 11 },
        { level: "Mid-Level", min: 16, max: 21 },
        { level: "Senior-Level", min: 29, max: 37 },
      ],
      companies: ["Google", "Flipkart", "Swiggy", "Zomato", "Uber"],
      desc: "Bridges the gap between development and operations by applying software engineering principles to system administration."
    },
    {
      designation: "Cloud Security Specialist",
      salaries: [
        { level: "Entry-Level", min: 8, max: 10 },
        { level: "Mid-Level", min: 15, max: 20 },
        { level: "Senior-Level", min: 26, max: 32 },
      ],
      companies: ["Cisco", "Palo Alto", "CrowdStrike", "TCS", "Infosys"],
      desc: "Secures cloud networks, manages identity and access protocols (Entra ID), and monitors compliance across Azure environments."
    }
  ];

  const activeData = rolesData[activeTab];

  const chartData = activeData.salaries.map((s) => ({
    level: s.level,
    "Minimum Salary": s.min,
    "Maximum Salary": s.max,
  }));

  const entry = activeData.salaries[0];
  const mid = activeData.salaries[1];
  const senior = activeData.salaries[2];
  const summaryText = `₹${entry.min}–${entry.max} LPA (Entry-Level), ₹${mid.min}–${mid.max} LPA (Mid-Level), ₹${senior.min}+ LPA (Senior-Level)`;

  return (
    <section className="relative bg-gradient-to-b from-sky-50/80 via-white to-white py-16 px-6 md:px-8 overflow-hidden">

      {/* Grain texture keyframes — same stepped-flicker technique used on the
          hero, tuned down for a light background via mix-blend-mode: multiply
          at low opacity, so it reads as paper grain rather than static. */}
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

      <div className="relative max-w-7xl mx-auto font-lexend">

        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold  text-slate-900 tracking-tight mb-4">
            High-Paying Careers for Azure Professionals
          </h2>
          <p className="text-slate-800 max-w-4xl">
            Master Cloud Infrastructure with the industry's most comprehensive Azure Program.
            Become a production-ready engineer through hands-on Azure DevOps, AKS, Terraform, and CI/CD pipelines.
            Build 10+ real deployments, earn industry certifications, and prepare for top cloud interviews with expert-led guidance.
          </p>
          <a id='enroll-now-high-pay' href='https://rzp.io/rzp/sM9Ufce' className="group mt-6 relative overflow-hidden flex items-center justify-center w-fit md:w-fit px-18 py-3 text-sm md:text-base font-normal text-gray-50 rounded-sm cursor-pointer bg-gradient-to-b from-sky-400 to-sky-600 shadow-lg">
          
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
          
            <span className="relative z-10 flex items-center justify-center gap-2">
              <SquareArrowOutUpRightIcon
                size={16}
                duration={1}
                color="#fff"
                className="group-hover:animate-bounce"
              />
              Enroll Now
            </span>
          
          </a>
        </div>

        {/* Desktop Column Headers */}
        <div className="hidden lg:grid grid-cols-12 gap-0 mb-4 text-center font-semibold text-slate-600">
          <div className="col-span-4 text-left pl-6">Designation</div>
          <div className="col-span-5">Annual Salary</div>
          <div className="col-span-3 text-left pl-6">Hiring Companies</div>
        </div>

        {/* Main Content Box (Sharp corners, flat design) */}
        <div className="border border-slate-300 rounded-none bg-white flex flex-col lg:flex-row shadow-sm">

          {/* Left Column: Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-300">
            {rolesData.map((role, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-5 font-semibold transition-colors duration-200 border-b border-slate-200 last:border-b-0 rounded-none
                  ${activeTab === index
                    ? 'bg-white text-[#0078D4] border-l-4 border-l-[#0078D4]'
                    : 'bg-sky-50/60 text-slate-700 hover:bg-sky-50 border-l-4 border-l-transparent'
                  }`}
              >
                {role.designation}
              </button>
            ))}
          </div>

          {/* Right Column: Dynamic Content (Chart & Companies) */}
          <div className="w-full lg:w-2/3 p-6 md:p-8 bg-white overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col lg:flex-row gap-8 h-full"
              >

                {/* Chart Section */}
                <div className="w-full lg:w-3/5 flex flex-col">
                  <h4 className="text-sm font-bold text-center text-slate-800 mb-2 uppercase tracking-wider">
                    {activeData.designation} Salary By Experience
                  </h4>

                  <div className="w-full" style={{ height: 280 }}>
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={chartData}
                        margin={{ top: 24, right: 8, left: 4, bottom: 8 }}
                        barGap={6}
                        barCategoryGap="28%"
                      >
                        <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" />
                        <XAxis
                          dataKey="level"
                          tick={{ fontSize: 11, fill: '#64748b' }}
                          axisLine={{ stroke: '#cbd5e1' }}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fontSize: 11, fill: '#64748b' }}
                          axisLine={{ stroke: '#cbd5e1' }}
                          tickLine={false}
                          width={36}
                          label={{
                            value: 'Salary (₹ LPA)',
                            angle: -90,
                            position: 'insideLeft',
                            style: { fontSize: 10, fill: '#64748b', textAnchor: 'middle' },
                          }}
                        />
                        <Tooltip
                          formatter={(value) => [`₹${value} LPA`, '']}
                          contentStyle={{ fontSize: 12, borderRadius: 0, borderColor: '#cbd5e1' }}
                        />
                        <Legend
                          verticalAlign="top"
                          height={28}
                          iconType="circle"
                          wrapperStyle={{ fontSize: 11, color: '#475569' }}
                        />
                        <Bar dataKey="Minimum Salary" fill={SKY} maxBarSize={32}>
                          <LabelList
                            dataKey="Minimum Salary"
                            position="top"
                            formatter={(v) => `${v}`}
                            style={{ fontSize: 10, fill: '#0369a1', fontWeight: 600 }}
                          />
                        </Bar>
                        <Bar dataKey="Maximum Salary" fill={BLUE} maxBarSize={32}>
                          <LabelList
                            dataKey="Maximum Salary"
                            position="top"
                            formatter={(v) => `${v}`}
                            style={{ fontSize: 10, fill: '#0078D4', fontWeight: 600 }}
                          />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 mt-1">
                    Source: Glassdoor, AmbitionBox, Naukri — 2026 estimates
                  </p>
                  <p className="text-xs text-center text-slate-500 mt-3 font-medium">
                    {summaryText}
                  </p>
                </div>

                {/* Companies & Description Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-8">

                  <div className="flex flex-wrap gap-3 mb-6">
                    {activeData.companies.map((company, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-sky-50 text-slate-800 text-sm font-semibold border border-sky-200 rounded-none"
                      >
                        {company}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    Along with a growing network of startups and leading organizations worldwide.
                  </p>

                  <div className="bg-sky-50/70 p-4 border border-sky-100 rounded-none">
                    <p className="text-sm text-slate-700 font-medium">
                      {activeData.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}