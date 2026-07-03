'use client'
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  // Data derived from the Azure Fast Track Document
  const faqData = [
    {
      category: 'Program Details',
      questions: [
        {
          q: 'What is the duration of the fast track program?',
          a: 'The program is an intensive 60 hours fast track course. It includes 2 hours of daily sessions, totaling 60 hours of training.'
        },
        {
          q: 'Is the training online or in a classroom?',
          a: 'Our training is available exclusively in Online mode, providing the flexibility to learn from anywhere.'
        },
        {
          q: 'When does the next batch begin?',
          a: 'The upcoming batch is scheduled to start on 01 August.'
        }
      ]
    },
    {
      category: 'Eligibility & Audience',
      questions: [
        {
          q: 'Who can enroll in this Azure & DevOps course?',
          a: 'This program is highly suitable for Freshers, Working Professionals, System Administrators, Cloud Engineers, DevOps Engineers, Solution Architects, and IT Professionals looking to upskill.'
        },
        {
          q: 'Is this course beginner-friendly?',
          a: 'Yes! The training is structured to take you from Beginner to Advanced levels, ensuring a smooth learning curve even if you are new to the cloud.'
        }
      ]
    },
    {
      category: 'Curriculum & Tools',
      questions: [
        {
          q: 'What topics are covered in the curriculum?',
          a: 'The 4-week roadmap covers a comprehensive range of topics including Azure Fundamentals, Identity Management, Networking, Storage, Databases, Security, and Azure DevOps principles.'
        },
        {
          q: 'What tools and technologies will I learn?',
          a: 'You will get hands-on experience with industry-standard tools including Azure CLI, Git, GitHub, Azure Repos, Azure Pipelines, Terraform, Docker, and Azure Kubernetes Service (AKS).'
        },
        {
          q: 'Will there be practical hands-on projects?',
          a: 'Absolutely. The course utilizes a "Learn → Practice → Deploy → Automate → Monitor" approach. It includes practical labs, mock tests, and a complete End-to-End DevOps project utilizing modern CI/CD pipelines.'
        }
      ]
    },
    {
      category: 'Certification & Learning',
      questions: [
        {
          q: 'What certifications does this course prepare me for?',
          a: 'The curriculum is specifically designed to cover two major certifications: Microsoft Certified Azure Administrator Associate (AZ-104) and Microsoft Certified DevOps Engineer Expert (AZ-400).'
        }
      ]
    }
  ];

  // State to track which category is currently selected
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  
  // State to track which question accordion is open
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const activeCategory = faqData[activeCategoryIndex];

  const handleCategoryClick = (index) => {
    setActiveCategoryIndex(index);
    setOpenQuestionIndex(null); // Reset open questions when changing categories
  };

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  };

  return (
    <div className='dark:bg-white'>
    <section className="w-full max-w-7xl mx-auto px-6 sm:px-0 py-16 md:py-24 bg-white">
      
      {/* Header section */}
      <div className="mb-12">
        <h4 className="uppercase tracking-widest text-xs font-semibold text-gray-900 mb-3">
          Frequently Asked Questions
        </h4>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">
          Got Questions? We've Got Answers
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
        
        {/* Left Sidebar: Categories */}
        <div className="w-full md:w-1/3 flex flex-col border-l border-gray-200">
          {faqData.map((data, index) => {
            const isActive = activeCategoryIndex === index;
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`text-left px-6 py-4 font-medium transition-colors border-l-2 -ml-[1px] ${
                  isActive
                    ? 'bg-[#F0F5FF] text-[#003399] border-[#003399]' // Active styling (light blue bg, dark blue text/border)
                    : 'text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-300'
                }`}
              >
                {data.category}
              </button>
            );
          })}
        </div>

        {/* Right Content: Accordion Questions */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          {activeCategory.questions.map((item, index) => {
            const isOpen = openQuestionIndex === index;
            return (
              <div 
                key={index} 
                className="border border-gray-200 bg-white"
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-gray-50 focus:outline-none"
                >
                  <span className={`text-[15px] md:text-base font-medium ${isOpen ? 'text-[#003399]' : 'text-gray-900'}`}>
                    {item.q}
                  </span>
                  <span className="flex-shrink-0 ml-4 text-gray-500">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                
                {/* Accordion Answer Body */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-gray-600 text-sm md:text-base leading-relaxed border-t border-transparent">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    </div>
  );
}