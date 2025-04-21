// components/AdmissionsSection.jsx
// import { useState, useEffect } from 'react';
// import { ArrowRight, Check, Calendar, BookOpen, GraduationCap, FileText } from 'lucide-react';

// export default function Admissions() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState('process');
  
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//       }
//     }, { threshold: 0.2 });
    
//     const section = document.querySelector('#admissions-section');
//     if (section) observer.observe(section);
    
//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   const admissionsProcess = [
//     { id: 1, title: 'Submit Application', icon: <FileText className="w-8 h-8 text-blue-500" />, description: 'Complete the online application form with all necessary details and documentation.' },
//     { id: 2, title: 'Entrance Assessment', icon: <BookOpen className="w-8 h-8 text-blue-500" />, description: 'Students will be assessed on academic capabilities and potential.' },
//     { id: 3, title: 'Interview', icon: <GraduationCap className="w-8 h-8 text-blue-500" />, description: 'Meet with our admissions team for a personal interview.' },
//     { id: 4, title: 'Decision', icon: <Check className="w-8 h-8 text-blue-500" />, description: 'Receive your admission decision within two weeks after completing all steps.' },
//   ];

//   const programs = [
//     { id: 1, name: 'Primary School', ages: '5-11', fees: '$5,000 - $7,000' },
//     { id: 2, name: 'Middle School', ages: '12-14', fees: '$7,000 - $9,000' },
//     { id: 3, name: 'High School', ages: '15-18', fees: '$9,000 - $12,000' },
//   ];

//   const importantDates = [
//     { id: 1, event: 'Application Opens', date: 'January 15, 2025' },
//     { id: 2, event: 'Early Decision Deadline', date: 'March 1, 2025' },
//     { id: 3, event: 'Regular Decision Deadline', date: 'April 30, 2025' },
//     { id: 4, event: 'Admission Results', date: 'Within 2 weeks of completion' },
//     { id: 5, event: 'School Year Begins', date: 'August 15, 2025' },
//   ];

//   return (
//     <section 
//       id="admissions-section" 
//       className={`py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden ${
//         isVisible ? 'animate-fade-in' : 'opacity-0'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Header with 3D effect */}
//         <div className="relative mb-12 transform perspective-1000">
//           <div className={`transform ${isVisible ? 'translate-z-0 animate-float' : 'translate-z-12'} transition-all duration-1000`}>
//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-blue-800 mb-4">
//               Join Our <span className="text-indigo-600">Community</span>
//             </h2>
//             <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//               Embark on a journey of excellence and discovery. Our admissions process is designed to find the best fit for your child's educational future.
//             </p>
//           </div>
//         </div>

//         {/* Tabs Navigation */}
//         <div className="flex flex-wrap justify-center mb-8 space-x-2 md:space-x-4">
//           {['process', 'programs', 'dates', 'apply'].map((tab) => (
//             <button
//               key={tab}
//               onClick={() => setActiveTab(tab)}
//               className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
//                 activeTab === tab
//                   ? 'bg-blue-600 text-white shadow-lg'
//                   : 'bg-white text-blue-600 hover:bg-blue-100'
//               }`}
//             >
//               {tab.charAt(0).toUpperCase() + tab.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Content Panels */}
//         <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
//           {/* Process Panel */}
//           <div className={`${activeTab === 'process' ? 'block' : 'hidden'}`}>
//             <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">Admissions Process</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {admissionsProcess.map((step, index) => (
//                 <div 
//                   key={step.id}
//                   className={`bg-blue-50 p-6 rounded-lg shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg ${
//                     isVisible ? `animate-fade-slide-up delay-${index * 100}` : 'opacity-0'
//                   }`}
//                 >
//                   <div className="flex items-center justify-center mb-4">
//                     <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                       {step.icon}
//                     </div>
//                   </div>
//                   <h4 className="text-xl font-semibold text-blue-700 text-center mb-2">{step.title}</h4>
//                   <p className="text-gray-600 text-center">{step.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Programs Panel */}
//           <div className={`${activeTab === 'programs' ? 'block' : 'hidden'}`}>
//             <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">Our Programs</h3>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {programs.map((program, index) => (
//                 <div 
//                   key={program.id}
//                   className={`relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg p-6 text-white transform transition-all duration-500 hover:scale-105 ${
//                     isVisible ? `animate-fade-slide-up delay-${index * 200}` : 'opacity-0'
//                   }`}
//                 >
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-x-12 -translate-y-12 blur-2xl"></div>
//                   <h4 className="text-2xl font-bold mb-4">{program.name}</h4>
//                   <div className="space-y-2">
//                     <p className="flex items-center">
//                       <span className="mr-2">•</span>
//                       <span>Ages: {program.ages}</span>
//                     </p>
//                     <p className="flex items-center">
//                       <span className="mr-2">•</span>
//                       <span>Annual Fees: {program.fees}</span>
//                     </p>
//                   </div>
//                   <button className="mt-6 flex items-center bg-white text-blue-600 px-4 py-2 rounded-full font-medium transition-all hover:bg-blue-50 group">
//                     Learn More
//                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Important Dates Panel */}
//           <div className={`${activeTab === 'dates' ? 'block' : 'hidden'}`}>
//             <h3 className="text-2xl md:text-3xl font-bold text-center text-blue-800 mb-8">Important Dates</h3>
//             <div className="max-w-3xl mx-auto">
//               {importantDates.map((item, index) => (
//                 <div 
//                   key={item.id}
//                   className={`flex items-center p-4 mb-4 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 shadow transition-all duration-300 hover:shadow-md ${
//                     isVisible ? `animate-fade-slide-right delay-${index * 100}` : 'opacity-0'
//                   }`}
//                 >
//                   <Calendar className="w-6 h-6 text-blue-500 mr-4" />
//                   <div className="flex-1">
//                     <h4 className="text-lg font-medium text-blue-700">{item.event}</h4>
//                     <p className="text-gray-600">{item.date}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Apply Now Panel */}
//           <div className={`${activeTab === 'apply' ? 'block' : 'hidden'}`}>
//             <div className="max-w-4xl mx-auto text-center">
//               <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Ready to Apply?</h3>
//               <p className="text-lg text-gray-700 mb-8">Start your application process today and take the first step toward an exceptional education experience.</p>
              
//               <div className={`perspective-1000 mb-10 ${isVisible ? 'animate-bounce-in' : 'opacity-0'}`}>
//                 <div className="relative transform transition-transform duration-700 hover:rotate-y-10 hover:scale-105">
//                   <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white p-8 md:p-12 rounded-2xl shadow-lg">
//                     <h4 className="text-2xl font-bold mb-4">2025-2026 Applications Now Open</h4>
//                     <p className="mb-6">Join our vibrant learning community where every student is valued and empowered to excel.</p>
//                     <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-all shadow-md hover:shadow-lg">
//                       Apply Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="p-6 bg-blue-50 rounded-lg">
//                   <h4 className="font-bold text-lg text-blue-700 mb-2">Have Questions?</h4>
//                   <p className="text-gray-600 mb-4">Our admissions team is here to help you through every step.</p>
//                   <button className="text-blue-600 font-medium hover:underline">Contact Us</button>
//                 </div>
//                 <div className="p-6 bg-blue-50 rounded-lg">
//                   <h4 className="font-bold text-lg text-blue-700 mb-2">Visit Our Campus</h4>
//                   <p className="text-gray-600 mb-4">Experience our facilities and meet our teachers in person.</p>
//                   <button className="text-blue-600 font-medium hover:underline">Schedule a Tour</button>
//                 </div>
//                 <div className="p-6 bg-blue-50 rounded-lg">
//                   <h4 className="font-bold text-lg text-blue-700 mb-2">Financial Aid</h4>
//                   <p className="text-gray-600 mb-4">Learn about scholarships and financial assistance options.</p>
//                   <button className="text-blue-600 font-medium hover:underline">Explore Options</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// components/EnhancedAdmissionSection.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, Calendar, FileText, Users, Check, Mail, Phone, Award, 
  BookOpen, Clock, MapPin, Star, Briefcase, Globe, GraduationCap, 
  Building, CreditCard, Sparkles, Target, LightbulbIcon
} from 'lucide-react';
import ModernStatisticsPage from '@/components/featured';


const EnhancedAdmissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('undergraduate');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);
  const faqRef = useRef(null);
  const testimonialsRef = useRef(null);
  const scholarshipRef = useRef(null);
  const facilitiesRef = useRef(null);

//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef(null);
  const [formStep, setFormStep] = useState(1);
  const totalSteps = 3;
  


  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  const toggleAccordion = (index) => {
    const updatedFaqs = faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    }));
    
    setFaqs(updatedFaqs);
  };
  

  // Observer for scroll animations
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) setIsVisible(true);
          // Activate other section animations based on their refs
          entry.target.classList.add('section-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all section refs
    [sectionRef, faqRef, testimonialsRef, scholarshipRef, facilitiesRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [sectionRef, faqRef, testimonialsRef, scholarshipRef, facilitiesRef].forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

 

  const [faqs, setFaqs] = useState([
    {
      question: "What are the admission requirements?",
      answer: "Our admission requirements include academic transcripts, entrance test scores, letters of recommendation, and a personal statement. Specific requirements vary by program.",
      isOpen: false
    },
    {
      question: "When is the application deadline?",
      answer: "The application deadline for the 2025-26 academic year is February 15, 2025. Early applications are encouraged and may receive priority consideration.",
      isOpen: false
    },
    {
      question: "How can I schedule a campus tour?",
      answer: "Campus tours can be scheduled through our Admissions Office. Visit our website's Campus Visit section or call our Admissions Office at (555) 123-4567 to arrange a tour.",
      isOpen: false
    },
    {
      question: "Are there any application fees?",
      answer: "Yes, there is a non-refundable application fee of $50. Fee waivers are available for eligible students demonstrating financial need.",
      isOpen: false
    },
    {
      question: "How competitive is the admission process?",
      answer: "Our admission process is holistic and competitive. We evaluate academic performance, extracurricular activities, personal statements, and alignment with our institutional values.",
      isOpen: false
    }
  ]);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Computer Science Student",
      image: "/images/testimonial1.jpg",
      quote: "Joining this institution was the best decision of my life. The faculty is exceptional and the opportunities for growth are endless.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Administration Student",
      image: "/images/testimonial2.jpg",
      quote: "The practical approach to education here has prepared me for real-world challenges in ways I never expected.",
      rating: 5
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Engineering Student",
      image: "/images/testimonial3.jpg",
      quote: "The cutting-edge facilities and industry partnerships have given me a competitive edge in my field.",
      rating: 5
    }
  ];

  const scholarships = [
    {
      title: "Academic Excellence Scholarship",
      description: "For students with outstanding academic records and test scores.",
      amount: "Up to 100% tuition",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Merit-Based Scholarship",
      description: "Awarded to students showing exceptional promise and achievements.",
      amount: "Up to 75% tuition",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Sports Scholarship",
      description: "For athletes with remarkable performance in their respective sports.",
      amount: "Up to 50% tuition",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Need-Based Financial Aid",
      description: "Supporting students with demonstrated financial need.",
      amount: "Varies based on need",
      icon: <CreditCard className="h-6 w-6" />
    }
  ];

  const facilities = [
    {
      title: "Modern Library",
      description: "Over 50,000 books and digital resources with comfortable study spaces.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Tech Labs",
      description: "State-of-the-art computer labs with the latest software and hardware.",
      icon: <LightbulbIcon className="h-6 w-6" />
    },
    {
      title: "Sports Complex",
      description: "Indoor and outdoor facilities for various sports and physical activities.",
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Student Residences",
      description: "Safe and comfortable accommodation with modern amenities.",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Global Partnerships",
      description: "Exchange programs with prestigious institutions worldwide.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Career Center",
      description: "Dedicated support for internships, placements, and career guidance.",
      icon: <Briefcase className="h-6 w-6" />
    }
  ];

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          <div className="absolute bottom-1/2 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-6000"></div>
        </div>

        {/* Hero Section */}
        <div ref={sectionRef} className="relative z-10 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Enhanced Header with 3D and floating animation */}
            <div 
    className={`transform transition-all duration-1000 ${
      isVisible ? 'translate-y-0 opacity-100 rotate-0' : 'translate-y-10 opacity-0 rotate-3'
    }`}
  >

    
    <div className="relative mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
            <span className="block">Shape Your</span>
            <span className="block mt-1">Future Today</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold mt-3 text-indigo-800">
            Admissions Open 2025-26
          </h2>
          <p className="mt-4 sm:mt-6 text-lg text-gray-600 max-w-xl">
            Join our prestigious institution and embark on a journey of academic excellence, 
            innovation, and personal growth in a vibrant learning environment.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg font-medium text-base sm:text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden transform hover:scale-105">
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:left-0 transition-all duration-500 z-0"></div>
            </button>
            <button className="px-6 py-3 bg-white text-indigo-700 border-2 border-indigo-600 rounded-lg font-medium text-base sm:text-lg hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 group transform hover:scale-105">
              <span>Virtual Tour</span>
              <MapPin className="h-5 w-5 transition-transform group-hover:animate-bounce" />
            </button>
          </div>
        </div>
        
        {/* Right Content */}
        <div className="w-full sm:w-4/5 lg:w-1/2 relative">
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            {/* Placeholder for hero image */}
            <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl shadow-xl overflow-hidden transform hover:rotate-1 transition-all duration-500 relative border-4 border-white">
              <div className="absolute inset-0 flex items-center justify-center">
                <GraduationCap className="h-20 sm:h-24 w-20 sm:w-24 text-indigo-600 opacity-25" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-700 to-transparent p-4 sm:p-6">
                <p className="text-white font-medium text-base sm:text-lg lg:text-xl">Discover Your Potential</p>
              </div>
            </div>
            {/* Floating elements animation */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-float-slow opacity-80 hidden sm:block"></div>
            <div className="absolute top-1/2 -left-4 w-10 h-10 bg-blue-400 rounded-full animate-float-medium opacity-80 hidden sm:block"></div>
            <div className="absolute -bottom-3 right-1/4 w-8 h-8 bg-purple-400 rounded-full animate-float-fast opacity-80 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

            {/* Key dates section */}
            <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Key Admission Dates</span>
                <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-2 rounded-full"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    date: "November 15, 2024",
                    event: "Applications Open",
                    icon: <Calendar className="h-6 w-6" />,
                    color: "blue"
                  },
                  {
                    date: "February 15, 2025",
                    event: "Application Deadline",
                    icon: <Clock className="h-6 w-6" />,
                    color: "indigo"
                  },
                  {
                    date: "March 10, 2025",
                    event: "Entrance Examination",
                    icon: <FileText className="h-6 w-6" />,
                    color: "purple"
                  },
                  {
                    date: "April 5, 2025",
                    event: "Results Declaration",
                    icon: <Check className="h-6 w-6" />,
                    color: "green"
                  },
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 border-l-4 border-indigo-500 hover:border-l-8"
                  >
                    <div className={`flex items-center gap-4 mb-3 text-${item.color}-600`}>
                      {item.icon}
                      <h3 className="font-bold text-xl">{item.event}</h3>
                    </div>
                    <p className="text-gray-600 font-medium">{item.date}</p>
                  </div>
                ))}
              </div>
            </div>

                 <div className="mt-24">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Our Programs</span>
                <div className="h-1 w-28 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-2 rounded-full"></div>
              </h2>
              
              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center space-x-2 mb-8">
                {['undergraduate', 'graduate', 'diploma', 'certificate'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                      activeTab === tab 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'bg-white text-gray-600 hover:bg-indigo-50'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              {/* Tab Content */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-500">
                {activeTab === 'undergraduate' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {[
                      {
                        title: "Bachelor of Science in Computer Science",
                        duration: "4 years",
                        description: "Comprehensive program covering programming, algorithms, AI, and software engineering."
                      },
                      {
                        title: "Bachelor of Business Administration",
                        duration: "3 years",
                        description: "Develop skills in management, marketing, finance, and entrepreneurship."
                      },
                      {
                        title: "Bachelor of Arts in Communication",
                        duration: "3 years",
                        description: "Focus on media studies, journalism, public relations, and digital communication."
                      },
                      {
                        title: "Bachelor of Engineering",
                        duration: "4 years",
                        description: "Specialized programs in mechanical, electrical, civil, and chemical engineering."
                      },
                      {
                        title: "Bachelor of Science in Biology",
                        duration: "3 years",
                        description: "Explore genetics, molecular biology, ecology, and biomedical sciences."
                      },
                      {
                        title: "Bachelor of Arts in Psychology",
                        duration: "3 years",
                        description: "Study human behavior, cognitive processes, and psychological theories."
                      }
                    ].map((program, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 group">
                        <h3 className="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-600 transition-colors">{program.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a href="#" className="text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800 transition-colors">
                            Learn more <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'graduate' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {[
                      {
                        title: "Master of Computer Science",
                        duration: "2 years",
                        description: "Advanced studies in AI, machine learning, data science, and systems architecture."
                      },
                      {
                        title: "Master of Business Administration",
                        duration: "1.5 years",
                        description: "Develop leadership skills and strategic thinking for business management."
                      },
                      {
                        title: "Master of Science in Data Analytics",
                        duration: "1.5 years",
                        description: "Focus on big data analysis, visualization, and business intelligence."
                      },
                      {
                        title: "Master of Engineering Management",
                        duration: "2 years",
                        description: "Blend technical expertise with business and management principles."
                      },
                      {
                        title: "Master of Public Health",
                        duration: "2 years",
                        description: "Study epidemiology, health policy, and global health challenges."
                      },
                      {
                        title: "Master of Education",
                        duration: "1.5 years",
                        description: "Advanced studies in learning methodologies and educational leadership."
                      }
                    ].map((program, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 group">
                        <h3 className="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-600 transition-colors">{program.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a href="#" className="text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800 transition-colors">
                            Learn more <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'diploma' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {[
                      {
                        title: "Diploma in Web Development",
                        duration: "1 year",
                        description: "Practical training in frontend and backend technologies for web applications."
                      },
                      {
                        title: "Diploma in Digital Marketing",
                        duration: "1 year",
                        description: "Skills in SEO, social media marketing, content creation, and analytics."
                      },
                      {
                        title: "Diploma in Graphic Design",
                        duration: "1 year",
                        description: "Creative skills in visual communication, typography, and design principles."
                      },
                      {
                        title: "Diploma in Culinary Arts",
                        duration: "1 year",
                        description: "Professional training in cooking techniques, food presentation, and kitchen management."
                      },
                      {
                        title: "Diploma in Healthcare Management",
                        duration: "1 year",
                        description: "Essential skills for administration in healthcare settings."
                      },
                      {
                        title: "Diploma in Cybersecurity",
                        duration: "1 year",
                        description: "Training in network security, ethical hacking, and cyber threat analysis."
                      }
                    ].map((program, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 group">
                        <h3 className="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-600 transition-colors">{program.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a href="#" className="text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800 transition-colors">
                            Learn more <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'certificate' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
                    {[
                      {
                        title: "Certificate in Cloud Computing",
                        duration: "6 months",
                        description: "Hands-on experience with AWS, Azure, and Google Cloud Platform."
                      },
                      {
                        title: "Certificate in Project Management",
                        duration: "3 months",
                        description: "Learn methodologies for effective project planning and execution."
                      },
                      {
                        title: "Certificate in Foreign Languages",
                        duration: "4 months",
                        description: "Intensive courses in Spanish, French, German, or Mandarin."
                      },
                      {
                        title: "Certificate in Financial Planning",
                        duration: "4 months",
                        description: "Skills in personal finance, investments, and retirement planning."
                      },
                      {
                        title: "Certificate in Social Media Management",
                        duration: "3 months",
                        description: "Strategy development for effective social media campaigns."
                      },
                      {
                        title: "Certificate in Data Visualization",
                        duration: "3 months",
                        description: "Create compelling visual representations of complex data sets."
                      }
                    ].map((program, index) => (
                      <div key={index} className="bg-gradient-to-br from-white to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1 group">
                        <h3 className="text-xl font-bold text-indigo-800 mb-2 group-hover:text-indigo-600 transition-colors">{program.title}</h3>
                        <div className="flex items-center gap-2 text-gray-600 mb-3">
                          <Clock className="h-4 w-4" />
                          <span>{program.duration}</span>
                        </div>
                        <p className="text-gray-600">{program.description}</p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <a href="#" className="text-indigo-600 font-medium flex items-center gap-1 hover:text-indigo-800 transition-colors">
                            Learn more <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Enhanced Application Process with 3D effect */}
            <div className="mt-24">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Admission Process</span>
                <div className="h-1 w-36 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-2 rounded-full"></div>
              </h2>
              
              {/* Interactive Process Timeline */}
              <div className="relative">
                {/* Timeline connector */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 to-indigo-600 transform -translate-y-1/2 rounded-full"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      step: "1",
                      title: "Application",
                      description: "Complete our online application form and submit the required documents.",
                      icon: <FileText className="h-8 w-8 text-white" />,
                      color: "from-blue-500 to-blue-700"
                    },
                    {
                      step: "2",
                      title: "Entrance Test",
                      description: "Schedule and appear for our entrance examination to showcase your aptitude.",
                      icon: <Calendar className="h-8 w-8 text-white" />,
                      color: "from-indigo-500 to-indigo-700"
                    },
                    {
                      step: "3",
                      title: "Selection & Admission",
                      description: "Get selected based on your academic records and entrance test performance.",
                      icon: <Check className="h-8 w-8 text-white" />,
                      color: "from-purple-500 to-purple-700"
                    }
                  ].map((step, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-2xl shadow-xl p-8 relative z-10 transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
                    >
                      {/* Step number bubble */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold text-xl shadow-lg border-4 border-white">
                        {step.step}
                      </div>
                      
                      <div className="flex justify-center mb-6 relative overflow-hidden pt-4">
                        <div className={`p-4 bg-gradient-to-br ${step.color} rounded-full text-white shadow-lg`}>
                          {step.icon}
                        </div>
                      </div>
                      
                      <h3 className="font-bold text-2xl text-center text-gray-800 mb-4 transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-600 text-center">{step.description}</p>
                      
                      {/* Animated chevron */}
                      {index !== 2 && (
                        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-indigo-600 animate-bounce-right z-20">
                          <ArrowRight className="h-8 w-8" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

{/* Scholarship Section */}
<section 
      id="scholarships"
      className="py-20 px-4 sm:px-8 md:px-12 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-14 relative">
          <span className="block text-sm text-indigo-600 font-semibold uppercase tracking-wider text-center mb-2">Financial Support</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Scholarships & Financial Aid
            </span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            We're committed to making education accessible to all qualified students through our comprehensive scholarship programs.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {scholarships.map((scholarship, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl border-t-4 border-indigo-600 p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Decoration */}
              <div className="absolute -right-16 -top-16 w-32 h-32 bg-indigo-100 rounded-full transition-all duration-500 group-hover:scale-110"></div>
              <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-blue-50 rounded-full"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-indigo-100 to-blue-50 p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-5 text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  {scholarship.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-700 transition-colors">{scholarship.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3">{scholarship.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-indigo-50 rounded-lg p-2.5 inline-block">
                    <span className="font-bold text-indigo-700">{scholarship.amount}</span>
                  </div>
                  
                  <span className="text-indigo-600 flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                    Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 mx-auto">
            <span>Explore All Financial Aid Options</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          
          <button className="mt-4 px-8 py-3 bg-white text-indigo-700 border-2 border-indigo-100 hover:border-indigo-200 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            <span>Calculate Your Aid Eligibility</span>
          </button>
        </div>
      </div>
    </section>
  


            {/* Facilities Section */}
            <section 
      id="facilities"
      className="py-20 px-4 sm:px-8 md:px-12 bg-white relative"
    >
      <div className="container mx-auto relative z-10">
        <div className="mb-14 relative">
          <span className="block text-sm text-indigo-600 font-semibold uppercase tracking-wider text-center mb-2">World-Class Environment</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Campus Facilities
            </span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Our state-of-the-art campus provides everything you need for an exceptional educational experience.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image with overlay */}
              <div className="h-60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/90 to-blue-500/90 opacity-80 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-500">
                  <div className="text-white w-16 h-16">{facility.icon}</div>
                </div>
                
                {/* Use placeholder image or facility image */}
                <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-blue-50 group-hover:scale-110 transition-transform duration-700"></div>
              </div>
              
              <div className="p-6 relative">
                <div className="absolute -top-10 left-6 bg-white rounded-xl shadow-lg p-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-indigo-600 w-10 h-10">
                    {facility.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mt-6 mb-3 group-hover:text-indigo-600 transition-colors">{facility.title}</h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                
                <a href="#" className="inline-flex items-center text-indigo-600 font-medium group-hover:text-indigo-700 transition-colors">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 group-hover:ml-2 transition-all">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* 360° Campus Tour Button */}
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <span>Take a 360° Virtual Campus Tour</span>
          </button>
        </div>
      </div>
    </section>


            {/* Testimonials Section */}
            <section 
      id="testimonials"
      className="py-20 px-4 sm:px-8 md:px-12 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-100 rounded-full opacity-50 blur-2xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-14 relative">
          <span className="block text-sm text-indigo-600 font-semibold uppercase tracking-wider text-center mb-2">What Our Students Say</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Student Testimonials
            </span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Hear directly from our students about their experiences at our institution.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="relative px-4 md:px-16">
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 -left-3 md:-left-8 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 z-10 hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          
          <button 
            className="absolute top-1/2 -right-3 md:-right-8 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-indigo-600 z-10 hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          
          {/* Testimonial cards */}
          <div className="relative h-auto min-h-[440px] sm:min-h-[380px]" ref={testimonialRef}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 transform ${
                  index === currentTestimonial
                    ? 'opacity-100 translate-x-0 scale-100 z-20'
                    : index < currentTestimonial
                      ? 'opacity-0 -translate-x-full scale-95 z-10'
                      : 'opacity-0 translate-x-full scale-95 z-10'
                }`}
              >
                <div className="h-full bg-white rounded-3xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-x-16 -translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 translate-y-16"></div>
                  
                  {/* Quote icon */}
                  <div className="absolute top-6 left-6 text-indigo-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                      <path d="M11.94 3.99C6.48 4.44 3 8.34 3 13.14v6.89h6.75v-6.88H6.88c0-2.81 1.97-5.03 5.06-5.25V3.99zm9 0c-5.46.45-8.94 4.35-8.94 9.15v6.89h6.75v-6.88h-2.87c0-2.81 1.97-5.03 5.06-5.25V3.99z"/>
                    </svg>
                  </div>
                  
                  {/* Avatar Side */}
                  <div className="md:w-1/3 flex flex-col items-center justify-center shrink-0 relative z-10">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-600 to-blue-500 flex items-center justify-center border-4 border-white shadow-lg relative">
                      <div className="text-4xl font-bold text-white">{testimonial.name.charAt(0)}</div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <h4 className="font-bold text-xl text-gray-800">{testimonial.name}</h4>
                      <p className="text-indigo-600 font-medium">{testimonial.role}</p>
                      
                      <div className="mt-3 flex items-center justify-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg 
                            key={star}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill={star <= testimonial.rating ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="md:w-2/3 relative z-10">
                    <blockquote className="text-lg md:text-xl text-gray-600 italic mb-6 relative">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex flex-wrap gap-3 mt-6">
                      {testimonial.tags && testimonial.tags.map((tag, idx) => (
                        <span key={idx} className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  index === currentTestimonial ? 'bg-indigo-600 w-8' : 'bg-gray-300 hover:bg-indigo-300'
                }`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Video Testimonials Button */}
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 bg-white border-2 border-indigo-100 text-indigo-700 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>
            <span>Watch Video Testimonials</span>
          </button>
        </div>
      </div>
    </section>



    <section 
      id="faq"
      className="py-20 px-4 sm:px-8 md:px-12 bg-white relative"
    >
      <div className="container mx-auto relative z-10">
        <div className="mb-14 relative">
          <span className="block text-sm text-indigo-600 font-semibold uppercase tracking-wider text-center mb-2">Common Questions</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Find answers to the most common questions about admissions, programs, and campus life.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* FAQ Tabs */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {['Admissions', 'Financial Aid', 'Academic Programs', 'Campus Life'].map((tab, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordion */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div key={index} 
                className="group"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-indigo-50 transition-colors focus:outline-none focus:bg-indigo-50"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={faq.isOpen}
                >
                  <span className="font-semibold text-lg text-gray-800 group-hover:text-indigo-600 transition-colors">{faq.question}</span>
                  <span className={`transform transition-transform duration-300 text-indigo-600 ${faq.isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 9l-7 7-7-7"/>
                    </svg>
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ${
                    faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-5 bg-gradient-to-r from-indigo-50 to-white text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-4">Didn't find what you're looking for?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                <span>Chat with an Advisor</span>
              </a>
              
              <a href="#" className="px-6 py-3 bg-white border-2 border-indigo-100 text-indigo-700 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

            {/* FAQ Section */}
            <div ref={faqRef} className="mt-24 transform transition-all duration-1000 opacity-0 translate-y-10 section-visible:opacity-100 section-visible:translate-y-0">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Frequently Asked Questions</span>
                <div className="h-1 w-56 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-2 rounded-full"></div>
              </h2>
              
              <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-indigo-50 transition-colors"
                      onClick={() => toggleAccordion(index)}
                    >
                      <span className="font-medium text-lg text-gray-800">{faq.question}</span>
                      <span className={`transform transition-transform duration-300 text-indigo-600 ${faq.isOpen ? 'rotate-180' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 py-4 bg-indigo-50 text-gray-600">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600">Still have questions?</p>
                <a href="#" className="inline-block mt-2 text-indigo-600 font-medium hover:text-indigo-800 transition-colors">Contact our admissions team</a>
              </div>
            </div>
            
            <section 
      id="apply"
      className="py-20 px-4 sm:px-8 md:px-12 bg-gradient-to-br from-indigo-600 to-blue-600 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-48 -right-48 w-96 h-96 bg-indigo-500 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-10 relative">
          <span className="block text-sm text-indigo-100 font-semibold uppercase tracking-wider text-center mb-2">Start Your Journey</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-6 text-white">
            Apply Now
          </h2>
          <p className="text-indigo-100 text-center max-w-2xl mx-auto">
            Take the first step toward your future by submitting your application today.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-10 px-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center relative">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
                  step < formStep ? 'bg-green-500 text-white' : 
                  step === formStep ? 'bg-white text-indigo-600' : 
                  'bg-indigo-200/50 text-white'
                }`}>
                  {step < formStep ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : step}
                </div>
                <span className="text-white text-sm mt-2 font-medium">
                  {step === 1 ? 'Personal Info' : step === 2 ? 'Education' : 'Documents'}
                </span>
                
                {/* Connecting line */}
                {step < totalSteps && (
                  <div className={`absolute top-5 -right-full w-full h-0.5 ${
                    step < formStep ? 'bg-green-500' : 'bg-indigo-200/50'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          
          {/* Form Card */}
          <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-95 rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full opacity-50"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-50"></div>
            
            <form className="relative z-10 space-y-6">
              {/* Step 1: Personal Information */}
              {formStep === 1 && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                          placeholder="Enter your first name"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                          placeholder="Enter your last name"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                        placeholder="Enter your email address"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                        placeholder="Enter your phone number"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input id="newsletter" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      I'd like to receive updates about admission events and deadlines
                    </label>
                  </div>
                </>
              )}
              
              {/* Step 2: Education Information */}
              {formStep === 2 && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Education Background</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Highest Level of Education</label>
                      <select 
                        id="education" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
                      >
                        <option value="">Select education level</option>
                        <option value="high_school">High School</option>
                        <option value="associate">Associate Degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">Doctorate</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                      <select 
                        id="graduationYear" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
                      >
                        <option value="">Select year</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={2025 - i}>{2025 - i}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">Previous Institution</label>
                    <input 
                      type="text" 
                      id="institution" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                      placeholder="Name of your previous school or university"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Desired Program</label>
                    <select 
                      id="course" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-white"
                    >
                      <option value="">Select a program</option>
                      <option value="computer_science">Computer Science</option>
                      <option value="business">Business Administration</option>
                      <option value="engineering">Engineering</option>
                      <option value="arts">Liberal Arts</option>
                      <option value="medicine">Medicine</option>
                      <option value="law">Law</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="gpa" className="block text-sm font-medium text-gray-700 mb-1">GPA (if applicable)</label>
                    <input 
                      type="text" 
                      id="gpa" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                      placeholder="Enter your GPA (e.g. 3.5)"
                    />
                  </div>
                </>
              )}
              
              {/* Step 3: Documents and Submission */}
              {formStep === 3 && (
                <>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Supporting Documents</h3>
                  
                  <div className="space-y-5">
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-300 transition-colors cursor-pointer">
                      <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Upload Transcript</p>
                      <p className="text-sm text-gray-500 mt-1">PDF or JPG format (Max 5MB)</p>
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-300 transition-colors cursor-pointer">
                      <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Upload Personal Statement</p>
                      <p className="text-sm text-gray-500 mt-1">PDF format (Max 2MB)</p>
                    </div>
                    
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-300 transition-colors cursor-pointer">
                      <div className="mx-auto w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">Upload References (Optional)</p>
                      <p className="text-sm text-gray-500 mt-1">PDF format (Max 3MB)</p>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join our institution?</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                      placeholder="Tell us about yourself and why you're interested in joining our institution"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input id="terms" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      I confirm that all information provided is accurate and complete
                    </label>
                  </div>
                </>
              )}
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {formStep > 1 && (
                  <button 
                    type="button" 
                    onClick={() => setFormStep(formStep - 1)}
                    className="px-6 py-3 bg-white text-indigo-700 border-2 border-indigo-100 rounded-xl font-medium hover:bg-indigo-50 transition-all duration-300 flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span>Back</span>
                  </button>
                )}
                
                {formStep < totalSteps ? (
                  <button 
                    type="button" 
                    onClick={() => setFormStep(formStep + 1)}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center gap-2 ml-auto"
                  >
                    <span>Continue</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                ) : (
                  <button 
                    type="submit" 
                    className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-medium hover:from-indigo-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 flex items-center justify-center gap-2 ml-auto relative overflow-hidden"
                  >
                    <span className="relative z-10">Submit Application</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    
                    {/* Button shine effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-30 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Application Deadlines */}
          <div className="mt-10 bg-white/80 backdrop-filter backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-indigo-600">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Important Deadlines
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-700">Fall Semester</p>
                <p className="text-gray-600">Application Due: July 1, 2025</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-700">Spring Semester</p>
                <p className="text-gray-600">Application Due: Nov 15, 2025</p>
              </div>
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="font-semibold text-indigo-700">Summer Session</p>
                <p className="text-gray-600">Application Due: Apr 1, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-3xl z-50 lg:hidden">
      <div className="flex justify-around items-center p-3">
        <a href="#scholarships" className="flex flex-col items-center p-2 text-indigo-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
            <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
            <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
          </svg>
          <span className="text-xs mt-1">Aid</span>
        </a>
        
        <a href="#facilities" className="flex flex-col items-center p-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <span className="text-xs mt-1">Campus</span>
        </a>
        
        <a href="#apply" className="flex flex-col items-center p-2 text-gray-500 relative">
          <div className="absolute -top-10 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full p-3 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <span className="text-xs mt-8">Apply</span>
        </a>
        
        <a href="#testimonials" className="flex flex-col items-center p-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span className="text-xs mt-1">Reviews</span>
        </a>
        
        <a href="#faq" className="flex flex-col items-center p-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <span className="text-xs mt-1">FAQs</span>
        </a>
      </div>
    </div>
            

            {/* Enhanced Application Form */}
            <div className="mt-24 transform transition-all duration-1000 opacity-0 translate-y-10 section-visible:opacity-100 section-visible:translate-y-0">
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-10 relative">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Apply Now</span>
                <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mt-2 rounded-full"></div>
              </h2>
              
              <div className="bg-white backdrop-blur-lg bg-opacity-90 rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-70"></div>
                
                <form className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="firstName" 
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                          placeholder="Enter your first name"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          id="lastName" 
                          className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                          placeholder="Enter your last name"
                        />
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                          <Users className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                        placeholder="Enter your email address"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="relative">
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                        placeholder="Enter your phone number"
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <Phone className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">Highest Level of Education</label>
                      <select 
                        id="education" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                      >
                        <option value="">Select education level</option>
                        <option value="high_school">High School</option>
                        <option value="associate">Associate Degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="master">Master's Degree</option>
                        <option value="phd">Doctorate</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Desired Program</label>
                      <select 
                        id="course" 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                      >
                        <option value="">Select a program</option>
                        <option value="computer_science">Computer Science</option>
                        <option value="business">Business Administration</option>
                        <option value="engineering">Engineering</option>
                        <option value="arts">Liberal Arts</option>
                        <option value="medicine">Medicine</option>
                        <option value="law">Law</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join our institution?</label>
                    <textarea 
                      id="message" 
                      rows="4" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Tell us about yourself and why you're interested in joining our institution"
                    ></textarea>
                  </div>
                  
                  <div className="flex items-center">
                    <input id="newsletter" type="checkbox" className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                      I'd like to receive updates about admission events and deadlines
                    </label>
                  </div>
                  
                  <div>
                    <button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-8 rounded-xl font-medium text-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group relative overflow-hidden"
                    >
                      <span className="relative z-10">Submit Application</span>
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 relative z-10" />
                      
                      {/* Button shine effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -skew-x-30 -translate-x-full group-hover:translate-x-full transition-all duration-1000"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <ModernStatisticsPage/>

            {/* Contact & Map Section */}
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-indigo-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full opacity-70"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Address</h4>
                        <p className="text-gray-600">123 Education Avenue, Academic District<br />Innovation City, 10001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Phone</h4>
                        <p className="text-gray-600">Admissions: (555) 123-4567<br />General Inquiries: (555) 234-5678</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Email</h4>
                        <p className="text-gray-600">admissions@institution.edu<br />info@institution.edu</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="bg-indigo-100 p-3 rounded-full text-indigo-600 mt-1">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Office Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-4">Connect With Us</h4>
                    <div className="flex gap-4">
                      {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                        <a 
                          key={social} 
                          href="#" 
                          className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300"
                        >
                          <span className="sr-only">{social}</span>
                          {/* Icon placeholders */}
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                <div className="h-full bg-gradient-to-br from-indigo-50 to-blue-50 p-4 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Campus Map</h3>
                    <p className="text-gray-600 mb-4">Interactive map would be displayed here</p>
                    <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                      View Larger Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
       

            {/* Footer/CTA Section */}
            <div className="mt-24 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl shadow-xl overflow-hidden relative">
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white rounded-full opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5"></div>
              </div>
              
              <div className="relative z-10 p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Begin Your Academic Journey?</h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-10">
                  Join thousands of students who have transformed their lives through our world-class education programs.
                </p>
                
                <div className="flex flex-wrap justify-center gap-6">
                  <button className="px-8 py-4 bg-white text-indigo-700 rounded-xl font-medium text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                    <span>Apply Now</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-medium text-lg hover:bg-white hover:bg-opacity-10 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                    <span>Request Information</span>
                    <Mail className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EnhancedAdmissionSection;

// Add this to your global CSS or component CSS
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeSlideRight {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.animate-fade-slide-up {
  animation: fadeSlideUp 1s ease-out forwards;
}

.animate-fade-slide-right {
  animation: fadeSlideRight 1s ease-out forwards;
}

.animate-bounce-in {
  animation: bounceIn 1s ease-out forwards;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.perspective-1000 {
  perspective: 1000px;
}

.rotate-y-10:hover {
  transform: rotateY(10deg);
}

.translate-z-0 {
  transform: translateZ(0);
}

.translate-z-12 {
  transform: translateZ(12px);
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}
`