import React from 'react';

// Import images...
import abhinavImg from '../../assets/abhinav1.jpg';
import pinkyImg from '../../assets/pinky.jpg';
import sitaImg from '../../assets/sita.jpg';

const TestimonialCard = ({ name, role, text, image, stars = 5 }) => {
  return (
    /* FIXED: Removed rigid w-[380px] and used max-w-[380px] with w-full so it shrinks seamlessly on tiny screens */
    <div className="relative flex flex-col bg-white rounded-[32px] shadow-lg overflow-hidden w-full max-w-[380px] h-[440px] sm:h-[420px] border border-gray-100 mx-auto transition-transform hover:scale-[1.02] duration-300">
      
      {/* Top Section - Text */}
      <div className="p-6 sm:p-8 pb-4 flex-grow">
        <p className="text-black text-[14px] sm:text-[15px] leading-relaxed font-sans">
          {text}
        </p>
      </div>

      {/* Avatar - Positioned to overlap the wave */}
      <div className="relative z-20 px-6 sm:px-8 flex">
        <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`;
            }}
          />
        </div>
      </div>

      {/* Bottom Section - Identity & Wave */}
      <div className="relative -mt-10 sm:relative sm:-mt-12 pt-12 sm:pt-14 pb-6 sm:pb-8 px-6 sm:px-8 bg-gradient-to-br from-[#A5C9FD] via-[#6395F9] to-[#3B82F6]">
        {/* SVG Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[98%]">
          <svg 
            viewBox="0 0 500 150" 
            preserveAspectRatio="none" 
            className="relative block w-full h-[50px] sm:h-[70px]"
          >
            <path 
              d="M0.00,49.98 C149.99,150.00 349.89,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
              className="fill-[#A5C9FD]"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0 relative z-10">
          <div>
            <h3 className="text-black text-xl sm:text-2xl font-bold tracking-tight">
              {name}
            </h3>
            <p className="text-white text-xs sm:text-sm font-medium mt-0.5 sm:mt-1">
              {role}
            </p>
          </div>
          
          <div className="flex gap-0.5 pb-1">
            {[...Array(stars)].map((_, i) => (
              <svg 
                key={i} 
                viewBox="0 0 24 24" 
                width="14" 
                height="14" 
                className="fill-orange-400 sm:w-[16px] sm:h-[16px]"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function StudentsAchievements() {
  const testimonials = [
    {
      name: "Abhinav Jha",
      role: "Preparing for UPSC",
      text: "I am coming here from past one year and there is not a single instance where i found something unusual or complaining about this library, environment is cozy & bit relaxed perfect place for study.",
      image: abhinavImg,
    },
    {
      name: "Pinky Yadav",
      role: "Preparing for UPSC",
      text: "I am preparing for UPSC CSE coming here from last 2 years having great experience. Ambience is peaceful and cozy, such a nice place to study peacefully along with that staff is very cooperative.",
      image: pinkyImg,
    },
    {
      name: "Sita Choudhary",
      role: "Data Analytics",
      text: "The main reason preparing here is the calm and smooth ambience which helps me during my study. It has truly become my go-to place for achieving my daily learning goals.",
      image: sitaImg,
    }
  ];

  return (
    <section className="w-full bg-white py-10 md:py-16 px-4">
      <div className="w-full max-w-[1298px] mx-auto">
        
        {/* FIXED: Changed leading-none to leading-tight or custom classes so line-height doesn't collapse and overlap long titles */}
        <div className="flex flex-col items-center text-center gap-3 mb-10 md:mb-[50px] mx-auto max-w-[550px]">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-black leading-tight m-0">
            Students Achievements
          </h2>
          <p className="text-sm sm:text-[15px] font-normal text-gray-600 leading-normal m-0">
            A track record of proven success.
          </p>
        </div>

        {/* Responsive Grid display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 justify-items-center">
          {testimonials.map((item, index) => (
            <TestimonialCard 
              key={index}
              name={item.name}
              role={item.role}
              text={item.text}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}