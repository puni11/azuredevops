import { PhoneForwardedIcon, SquareArrowOutUpRightIcon, UsersIcon, UserStarIcon } from '@animateicons/react/lucide';

export const CTA = ({ isHomepage = true }) => {
  return (
    <div 
      className=" w-full mx-auto font-lexend overflow-hidden mb-12 rounded-md"
      style={{
        background: `
          linear-gradient(to bottom right, #0078d4 50%, #ffff 100%),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 1200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.0' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='120%25' filter='url(%23noiseFilter)' opacity='0.45'/%3E%3C/svg%3E")
        `,
        backgroundBlendMode: 'soft-light',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 7xl Container with 2-Column Grid */}
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-12 pt-10 gap-12 text-white">
        
        {/* Left Column: Text & CTA */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Become an Azure & Azure DevOps Certified Engineer
          </h2>
          
          <p className="text-base text-white mb-10 max-w-2xl">
            Accelerate your cloud career with hands-on projects, CI/CD pipelines, and expert guidance. Become a highly sought-after certified Azure professional today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 w-full mb-10 animate-roll">
            
            <a id='enroll_btn_cta' href={isHomepage ? 'https://rzp.io/rzp/sM9Ufce' : '#formSub'} target='_blank' className="group relative overflow-hidden flex items-center justify-center w-full sm:w-auto px-10 py-3.5 text-sm md:text-base font-bold text-gray-900 rounded-md cursor-pointer bg-gradient-to-b from-white to-gray-300 shadow-lg">
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <SquareArrowOutUpRightIcon
                  size={16}
                  duration={1}
                  color="#111"
                  className="group-hover:animate-bounce"
                />
                {isHomepage ? "Enroll Now" : "Book FREE Demo Class"}
              </span>
            </a>

            {isHomepage && (
              <a id='counselor_btn_cta' href='#formSub' target={isHomepage ? '_self' : '_blank'} className="group flex items-center justify-center bg-white/20 backdrop-blur-sm gap-2 w-full sm:w-auto cursor-pointer px-8 py-3.5 text-sm md:text-base font-bold text-white border border-white/20 rounded hover:bg-white/10 transition-all">
                <PhoneForwardedIcon
                  size={16}
                  duration={1}
                  color="#ffffff"
                  className="group-hover:animate-bounce transition-all duration-300"
              /> 
              Talk to a Counselor
            </a>
            )}
          </div>

          {/* Small detail text */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-8 gap-y-4 text-sm md:text-base font-medium">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 flex items-center">
                <UserStarIcon size={16} duration={1} color="#fff" />
              </span>
              <span>4.8/5 Rated By Learners</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="flex items-center">
                <UsersIcon size={16} duration={1} color="#fff" />
              </span>
              <span>10,000+ Learners Trained</span>
            </div>
          </div>
          
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 flex justify-center md:justify-end w-full relative mt-10 md:mt-0">
          {/* Subtle glow effect behind the image */}
          <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full w-3/4 h-3/4 m-auto"></div>
          
          <img 
            src="/git.png" 
            alt="Student learning Azure DevOps" 
            className=" z-10 w-full max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>

      </section>
    </div>
  );
};

export default CTA;