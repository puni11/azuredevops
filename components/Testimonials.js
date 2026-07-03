import React from 'react';
import { 
  Star, 
  Quote, 
  ArrowRight,
  PlayCircle 
} from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Kannika Parashar",
      linkedin: "https://www.linkedin.com/in/kannikaparashar/",
      beforeRole: "Support Engineer",
      afterRole: "Azure Cloud Administrator",
      quote: "I was stuck answering support tickets for legacy systems. This course gave me the exact hands-on AZ-104 labs I needed to confidently architect Azure solutions. I transitioned internally to the Cloud Infrastructure team within 4 months.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGd_ZwWqHzohw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684495140288?e=1784160000&v=beta&t=5o04zlz21dZvJbqn3-tMrosbeapfqDwgUV6q6uGkU5o"
    },
    {
      name: "Moulika Jangra",
      linkedin: "https://www.linkedin.com/in/moulika-jangra-4a2306270/",
      beforeRole: "QA Tester",
      afterRole: "DevOps Engineer",
      quote: "Moving from manual testing to automated CI/CD pipelines felt impossible. The instructor's focus on AZ-400 real-world projects helped me build actual pipelines for my portfolio. I just landed a dedicated DevOps role.",
      image: "/mou.jpeg"
    },
    {
      name: "Yashraj Monani",
      linkedin: "https://www.linkedin.com/in/yashrajmonani95/",
      beforeRole: "Linux SysAdmin",
      afterRole: "Azure Cloud Administrator",
      quote: "I knew on-prem servers inside out, but enterprise cloud was a gap. The 1:1 mentorship and practical approach to Infrastructure as Code (Terraform + Azure) changed everything. I am now leading cloud migrations.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQELnTboT9SYyQ/profile-displayphoto-crop_800_800/B56ZvlXJEiIQAI-/0/1769079620482?e=1784160000&v=beta&t=C-fxKwKtDTfYLOwf9BMYvWIgkRRLM1qlP9U8d9FvOzg"
    }
  ];

  return (
    <div className='dark:bg-white'>
    <section className="max-w-7xl mx-auto px-6 py-12 text-gray-900 ">
      
      {/* Section Header */}
      <div className=" mb-16">
        <span className="uppercase tracking-widest text-xs font-bold text-gray-400 mb-4 block">
          SUCCESS STORIES
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-black max-w-4xl">
          From Old Role to New Role — Real Career Moves From Real Students.
        </h2>
        <p className="text-lg text-gray-800 max-w-2xl ">
          Don't just take our word for it. See how our hands-on labs and exam-aligned curriculum have transformed the careers of tech professionals.
        </p>
      </div>

  

      {/* Text Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white rounded-md p-8 shadow-lg shadow-gray-200/50 border border-gray-100 flex flex-col relative"
          >
            {/* Background Quote Icon */}
            <div className="absolute top-6 right-6 text-gray-100">
              <Quote size={60} className="rotate-180" />
            </div>

            {/* Profile & LinkedIn */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-14 h-14 rounded-sm border-2 border-blue-50"
              />
              <div>
                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                  {testimonial.name}
                  <a 
                    href={testimonial.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                    title={`View ${testimonial.name}'s LinkedIn Profile`}
                  >
                    {/* <Linkedin size={16} /> */}
                  </a>
                </h4>
                {/* 5-Star Rating */}
                <div className="flex gap-1 mt-1 text-yellow-400">
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                  <Star size={14} fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Career Transition Badge */}
            <div className="bg-gray-50 border border-gray-100 rounded-xs p-4 mb-6 relative z-10 flex flex-col gap-1.5">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Career Shift</span>
              <div className="flex items-center gap-2 text-sm font-medium">
                <span className="text-gray-600 line-through decoration-gray-400">{testimonial.beforeRole}</span>
                <ArrowRight size={14} className="text-blue-600 shrink-0" />
                <span className="text-blue-700 font-bold">{testimonial.afterRole}</span>
              </div>
            </div>

            {/* Quote */}
            <p className="text-gray-800 leading-relaxed text-sm flex-grow relative z-10">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>

    </section>
    </div>
  );
}