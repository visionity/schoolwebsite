// pages/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Shaping Tomorrow's Leaders",
      subtitle: "Excellence in Education Since 1995",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Discover Your Potential",
      subtitle: "Innovative Teaching Methods for Holistic Development",
      image: "/api/placeholder/1920/1080"
    },
    {
      title: "Join Our Community",
      subtitle: "Creating a Supportive Environment for Every Student",
      image: "/api/placeholder/1920/1080"
    }
  ];

  const announcements = [
    { id: 1, title: "Annual Sports Day", date: "May 15, 2025", description: "Join us for our annual sports day celebration with exciting competitions and events." },
    { id: 2, title: "Science Exhibition", date: "June 5, 2025", description: "Students will showcase their innovative science projects in our annual exhibition." },
    { id: 3, title: "Parent-Teacher Meeting", date: "April 28, 2025", description: "Discuss your child's progress with our faculty members." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>School Name - Excellence in Education</title>
        <meta name="description" content="Welcome to our school website. Discover our programs, faculty, and facilities." />
      </Head>

      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="object-cover w-full h-full"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
              <h1 
                className={`text-4xl md:text-6xl font-bold mb-4 transform transition-all duration-700 ${
                  currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.title}
              </h1>
              <p 
                className={`text-xl md:text-2xl max-w-2xl transform transition-all duration-700 delay-100 ${
                  currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                {slide.subtitle}
              </p>
              <div
                className={`mt-8 flex flex-col sm:flex-row gap-4 transform transition-all duration-700 delay-200 ${
                  currentSlide === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-300">
                  Apply Now <span className="ml-2">→</span>
                </a>
                <a href="#" className="bg-transparent border-2 border-white hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors duration-300">
                  Virtual Tour
                </a>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
  <div className="absolute top-1/4 right-10 w-20 h-20 bg-yellow-100 rounded-full opacity-40"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Heading section with enhanced animation */}
    <div className="text-center mb-20 relative">
      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3 hover:bg-blue-200 transition-colors duration-300">Excellence in Education</span>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
        Welcome to Our School
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
      </h2>
      
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 hover:w-32 transition-all duration-500"></div>
      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We provide a nurturing environment where students can excel academically, develop critical thinking skills, and grow into responsible global citizens.
      </p>
    </div>

    {/* Feature cards with enhanced animations and effects */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
      {[
        { 
          icon: "📚", 
          title: "Academic Excellence", 
          description: "Rigorous curriculum designed to challenge and inspire students.",
          color: "bg-blue-500",
          shadow: "shadow-blue-200"
        },
        { 
          icon: "👨‍🏫", 
          title: "Experienced Faculty", 
          description: "Dedicated teachers committed to bringing out the best in every child.",
          color: "bg-green-500",
          shadow: "shadow-green-200"
        },
        { 
          icon: "🏆", 
          title: "Holistic Development", 
          description: "Focus on academic, physical, social, and emotional growth.",
          color: "bg-yellow-500",
          shadow: "shadow-yellow-200"
        },
        { 
          icon: "🏫", 
          title: "Modern Facilities", 
          description: "State-of-the-art infrastructure to support diverse learning activities.",
          color: "bg-purple-500",
          shadow: "shadow-purple-200"
        }
      ].map((feature, index) => (
        <div
          key={index}
          className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group hover:-translate-y-2 relative ${feature.shadow}`}
          style={{animationDelay: `${index * 0.1}s`}}
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
            <div className={`w-8 h-8 ${feature.color} rotate-45 transform origin-bottom-left translate-x-4 -translate-y-4`}></div>
          </div>
          
          {/* Icon with animated background */}
          <div className="relative mb-6 inline-block">
            <div className={`absolute inset-0 rounded-full ${feature.color} opacity-20 scale-0 group-hover:scale-150 transition-transform duration-700`}></div>
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-3xl shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
          </div>
          
          {/* Title with animated underline */}
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300 relative inline-block">
            {feature.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
          </h3>
          
          <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {feature.description}
          </p>
          
          {/* Read more link with animation */}
          <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:text-blue-800">
            Learn more 
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      ))}
    </div>
    
    {/* Additional stats row */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
      {[
        { number: "25+", label: "Years of Excellence" },
        { number: "100%", label: "University Placement" },
        { number: "50+", label: "Academic Programs" },
        { number: "15:1", label: "Student-Teacher Ratio" }
      ].map((stat, index) => (
        <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg p-4 hover:bg-blue-50 transition-colors duration-300">
          <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
          <div className="text-gray-600 text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
  
  {/* Add CSS for animations */}
  <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .grid > div {
      animation: fadeInUp 0.5s ease-out forwards;
      opacity: 0;
    }
  `}</style>
</section>

      {/* Statistics Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "1500+", label: "Students" },
              { value: "120+", label: "Skilled Teachers" },
              { value: "25+", label: "Years of Excellence" },
              { value: "95%", label: "Success Rate" }
            ].map((stat, index) => (
              <div key={index} className="p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* Enhanced Announcements Section */}
<section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-yellow-300 opacity-10 blur-xl"></div>
  <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-blue-400 opacity-10 blur-xl"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-12">
      <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-3">Stay Updated</span>
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative inline-block">
        Latest Announcements
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 absolute bottom-0 left-0 transform scale-x-0 transition-transform duration-500 hover:scale-x-100"></div>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-4">Stay informed about upcoming events, achievements, and important information.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {announcements.map((item, index) => (
        <div
          key={item.id}
          className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
          style={{animationDelay: `${index * 0.15}s`}}
        >
          {/* Color bar at top of card */}
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          
          <div className="p-8 relative">
            {/* Date badge */}
            <div className="absolute top-0 right-0 transform translate-y-4 -translate-x-4 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500">
              <div className="flex flex-col items-center justify-center h-16 w-16 bg-blue-100 group-hover:bg-blue-600 text-blue-700 group-hover:text-white rounded-full shadow-md transition-colors duration-300">
                <span className="text-sm font-semibold">{item.date.split(',')[0]}</span>
                <span className="text-xs">{item.date.split(' ')[0]}</span>
              </div>
            </div>
            
            {/* Content */}
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full mb-3">Announcement</span>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
            
            {/* Read more link with animated arrow */}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors duration-300 relative pl-0 group-hover:pl-2 overflow-hidden">
              <span className="relative z-10">Read More</span>
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </a>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-12">
      <a href="#" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1 group">
        <span>View All Announcements</span>
        <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </a>
    </div>
  </div>
  
  {/* Animation styles */}
  <style jsx>{`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    .grid > div {
      animation: fadeInUp 0.6s ease-out forwards;
      opacity: 0;
    }
  `}</style>
</section>

{/* New Notice Board Section */}
<section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 relative">
  {/* Decorative paper texture background */}
  <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48L2c+PC9zdmc+')]"></div>
  
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row items-start gap-12">
      {/* Left side heading */}
      <div className="md:w-1/3 sticky top-24 self-start">
        <span className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-3">Important</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">School Notice Board</h2>
        <p className="text-gray-600 mb-8">Important announcements, circulars, and notices from the school administration.</p>
        
        <div className="p-6 bg-white rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Use the Notice Board</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Check regularly for updates</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Download attachments if available</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2">•</span>
              <span>Note important deadlines</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Right side notices */}
      <div className="md:w-2/3 space-y-6">
        {[
          {
            id: 1,
            title: "End of Term Examination Schedule",
            date: "April 15, 2025",
            priority: "high",
            description: "The final examination schedule for all classes has been released. Please check the attached timetable.",
            hasAttachment: true
          },
          {
            id: 2,
            title: "Annual Day Celebration",
            date: "April 28, 2025",
            priority: "medium",
            description: "All parents are cordially invited to attend our Annual Day Celebration. The event will start at 5:30 PM in the school auditorium.",
            hasAttachment: false
          },
          {
            id: 3,
            title: "Summer Vacation Announcement",
            date: "May 5, 2025",
            priority: "medium",
            description: "Summer vacation will commence from May 20th. School will reopen on July 10th for the new academic session.",
            hasAttachment: false
          },
          {
            id: 4,
            title: "Fee Structure Update",
            date: "May 10, 2025",
            priority: "high",
            description: "There has been a revision in the fee structure for the upcoming academic year. Please refer to the attached document for details.",
            hasAttachment: true
          }
        ].map((notice, index) => (
          <div 
            key={notice.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            style={{animationDelay: `${index * 0.15}s`}}
          >
            <div className="flex flex-col md:flex-row">
              {/* Left date panel */}
              <div className="md:w-24 bg-gray-50 p-4 flex flex-row md:flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-100">
                <div className="font-bold text-gray-800 text-xl">
                  {notice.date.split(',')[0].split(' ')[0]}
                </div>
                <div className="text-gray-500 text-sm ml-2 md:ml-0">{notice.date.split(' ')[0]}</div>
              </div>
              
              {/* Right content panel */}
              <div className="flex-1 p-6">
                <div className="flex items-center mb-3">
                  <span className={`w-2 h-2 rounded-full mr-2 ${
                    notice.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></span>
                  <span className={`text-xs font-medium ${
                    notice.priority === 'high' ? 'text-red-600' : 'text-yellow-600'
                  }`}>
                    {notice.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">{notice.title}</h3>
                <p className="text-gray-600 mb-4">{notice.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{notice.date}</span>
                  {notice.hasAttachment && (
                    <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-300">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      Download Attachment
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* "Load more" button */}
        <div className="text-center pt-6">
          <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors duration-300">
            Load More Notices
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  {/* Animation styles */}
  <style jsx>{`
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    .space-y-6 > div {
      animation: slideInRight 0.6s ease-out forwards;
      opacity: 0;
    }
  `}</style>
</section>

      {/* Testimonials Section */}
     {/* Testimonials Section with Animation and Enhanced Design */}
<section className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        What Parents & Students <span className="text-blue-600">Say</span>
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover what our community thinks about their experience with us
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {[
        {
          quote: "The faculty's dedication to academic excellence and personal attention has made a tremendous difference in my child's educational journey.",
          author: "Sarah Johnson",
          role: "Parent",
          image: "/api/placeholder/100/100",
          color: "bg-blue-100"
        },
        {
          quote: "I've learned not just academic subjects but important life skills. The teachers are supportive and always available to help.",
          author: "Michael Chen",
          role: "Student, Grade 10",
          image: "/api/placeholder/100/100",
          color: "bg-green-100"
        },
        {
          quote: "The school's focus on holistic development has helped my daughter grow into a confident and responsible individual.",
          author: "Lisa Rodriguez",
          role: "Parent",
          image: "/api/placeholder/100/100",
          color: "bg-purple-100"
        }
      ].map((testimonial, index) => (
        <div 
          key={index}
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden group"
        >
          <div 
            className={`absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full ${testimonial.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
          ></div>
          <div className="text-blue-600 text-6xl absolute top-4 left-4 opacity-10 group-hover:opacity-30 transition-opacity duration-500">"</div>
          <p className="text-gray-700 mb-8 relative z-10 text-lg leading-relaxed italic">{testimonial.quote}</p>
          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
              <img 
                src={testimonial.image} 
                alt={testimonial.author}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <div className="font-semibold text-gray-800 text-lg">{testimonial.author}</div>
              <div className="text-blue-600 text-sm font-medium">{testimonial.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-16 text-center">
      <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-flex items-center gap-2 group">
        See More Testimonials
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  </div>
</section>

{/* Call to Action with Parallax Effect */}
<section className="py-24 px-4 md:px-6 lg:px-8 bg-blue-700 text-white relative overflow-hidden">
  <div className="absolute inset-0 z-0">
    <div className="absolute inset-0 bg-blue-800 opacity-60"></div>
    <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center"></div>
  </div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Ready to Join Our <span className="text-yellow-300">Educational Journey</span>?
      </h2>
      <p className="text-xl max-w-3xl mx-auto mb-12 text-blue-50 leading-relaxed">
        Take the first step towards a brighter future for your child. Apply now or schedule a visit to our campus.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="#" className="group bg-white text-blue-700 hover:bg-yellow-300 px-10 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2">
          <span>Apply Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a href="#" className="group bg-transparent border-2 border-white hover:bg-white/20 px-10 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Schedule a Visit</span>
        </a>
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-6">
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>98% Graduate Rate</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>95% College Acceptance</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Award-Winning Faculty</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Instagram Feed with Hover Effects */}
<section className="py-24 px-4 md:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Campus <span className="text-blue-600">Life</span>
      </h2>
      <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Experience the vibrant atmosphere through daily activities and special moments at our school.
      </p>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {[
        { title: "Science Fair", tag: "Academic" },
        { title: "Basketball Tournament", tag: "Sports" },
        { title: "Art Exhibition", tag: "Arts" },
        { title: "Robotics Workshop", tag: "STEM" },
        { title: "Annual Day Celebration", tag: "Events" },
        { title: "Community Service", tag: "Values" }
      ].map((item, index) => (
        <div 
          key={index}
          className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer"
        >
          <img 
            src={`/api/placeholder/400/400`}
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <span className="inline-block px-2 py-1 bg-blue-600 text-white text-xs rounded-full mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{item.tag}</span>
            <div className="text-white text-base font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">{item.title}</div>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors duration-300">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Photo Gallery</h3>
        <p className="text-gray-600 mb-4">Explore our extensive collection of school memories</p>
        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center gap-1 group">
          View Gallery
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors duration-300">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Video Tours</h3>
        <p className="text-gray-600 mb-4">Watch virtual tours of our campus facilities</p>
        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center gap-1 group">
          Watch Videos
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <div className="bg-blue-50 rounded-xl p-6 text-center hover:bg-blue-100 transition-colors duration-300">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Events Calendar</h3>
        <p className="text-gray-600 mb-4">Stay updated with upcoming school events</p>
        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center gap-1 group">
          View Calendar
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>

    <div className="text-center mt-12">
      <a href="#" className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 font-medium text-lg gap-2 group">
        Follow us on Instagram 
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </a>
    </div>
  </div>
</section>

{/* Newsletter Section with Animation */}
<section className="py-24 px-4 md:px-6 lg:px-8 bg-gray-100">
  <div className="max-w-7xl mx-auto">
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full -mt-20 -mr-20 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-100 rounded-full -mb-20 -ml-20 opacity-50"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="md:w-1/2">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">Stay Connected</span>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">Subscribe to Our Newsletter</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Stay updated with the latest news, events, and announcements from our school community.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">Weekly Updates</div>
              <div className="text-sm text-gray-500">Stay informed about school activities</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">Special Announcements</div>
              <div className="text-sm text-gray-500">Important notifications and events</div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 w-full">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-sm">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Your name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">I'm a parent/guardian</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                <span>Subscribe Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4 text-center">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}