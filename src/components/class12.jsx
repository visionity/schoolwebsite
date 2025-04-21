import React from 'react';

// Badge Component
function Badge({ label, color }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800",
    yellow: "bg-yellow-100 text-yellow-800"
  };
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${colorClasses[color]}`}>
      {label}
    </span>
  );
}

// StreamCard Component
function StreamCard({ stream }) {
  const colorClasses = {
    blue: "border-blue-400 bg-blue-50",
    green: "border-green-400 bg-green-50",
    yellow: "border-yellow-400 bg-yellow-50",
    red: "border-red-400 bg-red-50"
  };

  return (
    <div className={`rounded-lg border-l-4 ${colorClasses[stream.color]} p-5 shadow-md hover:shadow-lg transition duration-300`}>
      <h4 className="font-bold text-lg text-gray-800 mb-3">{stream.name}</h4>
      
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Core Subjects:</p>
        <div className="flex flex-wrap gap-2">
          {stream.subjects.map((subject, idx) => (
            <span key={idx} className="bg-white px-2 py-1 rounded text-xs font-medium text-gray-700 shadow-sm">
              {subject}
            </span>
          ))}
        </div>
      </div>
      
      <div>
        <p className="text-sm text-gray-500 mb-2">Career Prospects:</p>
        <p className="text-sm text-gray-700">{stream.career}</p>
      </div>
      
      <button className="mt-4 text-sm bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 rounded px-4 py-1.5 inline-flex items-center">
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}

// PlacementCard Component
function PlacementCard({ university, count, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-800">{university}</h4>
      <p className="text-indigo-600 font-bold mt-1">{count}</p>
    </div>
  );
}

// ProgramCard Component
function ProgramCard({ title, description, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg hover:translate-y-1 transition duration-300">
      <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
      <div className="mt-4">
        <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center">
          Enroll Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}

// TestimonialCard Component
function TestimonialCard({ student }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-indigo-500">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-3">
          {student.avatar ? (
            <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
        </div>
        <div>
          <h5 className="font-medium text-gray-800">{student.name}</h5>
          <p className="text-gray-500 text-sm">{student.achievement}</p>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm">"{student.testimonial}"</p>
      <div className="mt-3 flex items-center">
        <div className="flex text-yellow-400">
          {'★'.repeat(5)}
        </div>
        <span className="text-xs text-gray-500 ml-2">Class of {student.year}</span>
      </div>
    </div>
  );
}

// UniversityLogo Component
function UniversityLogo({ name, logo }) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm h-16 flex items-center justify-center">
      {logo ? (
        <img src={logo} alt={name} className="max-h-10" />
      ) : (
        <span className="text-gray-500 text-sm font-medium">{name}</span>
      )}
    </div>
  );
}

// Link Component
function Link({ href, className, children }) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

// Main Class 12 Section Component
function Class12Section() {
  // Streams offered
  const streams = [
    {
      name: "Science (PCM)",
      subjects: ["Physics", "Chemistry", "Mathematics", "English", "Computer Science/Biology"],
      career: "Engineering, Medicine, Research, IT",
      color: "blue"
    },
    {
      name: "Science (PCB)",
      subjects: ["Physics", "Chemistry", "Biology", "English", "Mathematics/Psychology"],
      career: "Medicine, Biotechnology, Research, Allied Health",
      color: "green"
    },
    {
      name: "Commerce",
      subjects: ["Accountancy", "Business Studies", "Economics", "English", "Mathematics/Informatics"],
      career: "Finance, Business, Entrepreneurship, Banking",
      color: "yellow"
    },
    {
      name: "Humanities",
      subjects: ["History", "Political Science", "Geography/Psychology", "English", "Economics"],
      career: "Law, Journalism, Civil Services, International Relations",
      color: "red"
    }
  ];

  // Class 12 statistics
  const statistics = [
    { value: "95%", label: "Students in Top Universities" },
    { value: "85%", label: "Students with 90%+ in Boards" },
    { value: "25+", label: "National Rank Holders" },
    { value: "100%", label: "Placement Assistance" }
  ];

  // Achievements
  const achievements = [
    "10 students qualified for IIT-JEE Advanced in 2023-24",
    "15 students selected for prestigious medical colleges",
    "State topper in Commerce stream for 3 consecutive years",
    "100% selection rate for students appearing in competitive exams"
  ];

  // Top universities
  const universities = [
    { name: "IIT Delhi" },
    { name: "AIIMS" },
    { name: "Delhi University" },
    { name: "NIT" },
    { name: "SRCC" },
    { name: "Harvard University" }
  ];

  // Student testimonials
  const testimonials = [
    {
      name: "Aditya Sharma",
      achievement: "IIT Delhi - Computer Science",
      testimonial: "The guidance and preparation I received for JEE was exceptional. Teachers went above and beyond to ensure we understood concepts thoroughly.",
      year: "2023",
      avatar: null
    },
    {
      name: "Priya Mehta",
      achievement: "AIIMS - MBBS",
      testimonial: "The biology labs and special NEET coaching classes gave me the edge I needed to secure my position at AIIMS.",
      year: "2023",
      avatar: null
    },
    {
      name: "Rohit Khanna",
      achievement: "SRCC - Commerce",
      testimonial: "The commerce faculty's mentorship and practical approach to teaching helped me develop a strong foundation for higher studies.",
      year: "2023",
      avatar: null
    }
  ];

  // Entrance exam preparation features
  const entrancePrep = [
    "Daily practice tests and personalized feedback",
    "Special doubt-clearing sessions on weekends",
    "Mock examinations simulating actual test environment",
    "One-on-one mentoring with subject experts"
  ];

  return (
    <div className="fade-in">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl overflow-hidden mb-10 shadow-lg">
        <div className="grid md:grid-cols-2">
          <div className="p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Class 12 - Senior Secondary</h2>
            <p className="text-indigo-100 mb-4">
              Our specialized streams prepare students for higher education and their chosen career paths with expert guidance and focused preparation.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge label="Board: CBSE" color="blue" />
              <Badge label="4 Specialized Streams" color="purple" />
              <Badge label="Entrance Exam Coaching" color="green" />
            </div>
            <div className="flex gap-3 mt-6">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-sm shadow-md">
                Download Curriculum
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-indigo-600 py-2 px-4 rounded-lg font-medium transition-colors duration-300 text-sm">
                Book a Counseling Session
              </button>
            </div>
          </div>
          <div className="hidden md:block relative h-64">
            {/* Replace with your Class 12 students image */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Class 12 Students Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 text-center">
          <div className="text-indigo-500 text-2xl font-bold mb-1">4</div>
          <div className="text-sm text-gray-600">Academic Streams</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 text-center">
          <div className="text-green-500 text-2xl font-bold mb-1">15+</div>
          <div className="text-sm text-gray-600">Expert Faculty</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 text-center">
          <div className="text-purple-500 text-2xl font-bold mb-1">50+</div>
          <div className="text-sm text-gray-600">Years of Excellence</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
          <div className="text-yellow-500 text-2xl font-bold mb-1">95%</div>
          <div className="text-sm text-gray-600">Entrance Exam Success</div>
        </div>
      </div>

      {/* Academic Streams */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="h-10 w-1 bg-indigo-500 mr-4"></div>
          <h3 className="text-xl font-semibold text-gray-800">Academic Streams</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {streams.map((stream, index) => (
            <StreamCard key={index} stream={stream} />
          ))}
        </div>
      </div>

      {/* Statistics and Achievements */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="h-8 w-1 bg-green-500 mr-3"></div>
            <h3 className="text-xl font-semibold text-gray-800">Our Achievements</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="flex mb-6">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mr-4">
                🏆
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Academic Excellence</h4>
                <p className="text-gray-600 text-sm">Our students consistently achieve top positions in board examinations and competitive entrance tests</p>
              </div>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start bg-gray-50 p-3 rounded-lg">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <img src="/api/placeholder/500/250" alt="Awards and Achievements" className="mx-auto rounded-lg shadow" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-4">
            <div className="h-8 w-1 bg-blue-500 mr-3"></div>
            <h3 className="text-xl font-semibold text-gray-800">Class 12 Highlights</h3>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
            <div className="space-y-4">
              {statistics.map((stat, idx) => (
                <div key={idx} className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition duration-200">
                  <div className="w-16 h-16 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-lg mr-4 shadow-sm">
                    {stat.value}
                  </div>
                  <p className="text-gray-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Entrance Exam Preparation */}
      <div className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <div className="h-8 w-1 bg-blue-500 mr-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">Entrance Exam Preparation</h3>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-3 bg-white rounded-lg shadow-md p-6">
            <h4 className="font-semibold text-lg text-gray-800 mb-4">Specialized Coaching Programs</h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🔬</div>
                <h5 className="font-medium text-gray-800 mb-1">JEE (Main & Advanced)</h5>
                <p className="text-xs text-gray-600 text-center">Engineering entrance preparation</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">⚕️</div>
                <h5 className="font-medium text-gray-800 mb-1">NEET</h5>
                <p className="text-xs text-gray-600 text-center">Medical entrance preparation</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h5 className="font-medium text-gray-800 mb-1">CUET</h5>
                <p className="text-xs text-gray-600 text-center">University entrance tests</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">🌎</div>
                <h5 className="font-medium text-gray-800 mb-1">SAT/ACT</h5>
                <p className="text-xs text-gray-600 text-center">International university admissions</p>
              </div>
            </div>
            <div>
              <h5 className="font-medium text-gray-800 mb-3">Key Features</h5>
              <ul className="space-y-2">
                {entrancePrep.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-lg text-gray-800 mb-4">Success Metrics</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">JEE Advanced Selections</span>
                      <span className="text-sm font-medium text-gray-700">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">NEET Selections</span>
                      <span className="text-sm font-medium text-gray-700">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">CUET Above 90%</span>
                      <span className="text-sm font-medium text-gray-700">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-medium transition-colors duration-300 text-sm shadow">
                  Enroll in Coaching Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* College Placements */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10 shadow-md">
        <div className="flex items-center mb-6">
          <div className="h-8 w-1 bg-purple-500 mr-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">College Placements</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <PlacementCard university="IIT/NIT" count="25+" icon="🎓" />
          <PlacementCard university="Medical Colleges" count="15+" icon="⚕️" />
          <PlacementCard university="Top Commerce Colleges" count="40+" icon="📊" />
          <PlacementCard university="International Universities" count="10+" icon="🌎" />
        </div>
        <div className="mt-8">
          <h4 className="font-medium text-gray-800 mb-4 text-center">Our Students Are At</h4>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {universities.map((uni, idx) => (
              <UniversityLogo key={idx} name={uni.name} logo={uni.logo} />
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium text-sm inline-flex items-center">
            View Complete Placement Report
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Student Testimonials */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="h-8 w-1 bg-yellow-500 mr-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">Student Testimonials</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((student, idx) => (
            <TestimonialCard key={idx} student={student} />
          ))}
        </div>
      </div>

      {/* Special Programs */}
      <div className="mb-10">
        <div className="flex items-center mb-6">
          <div className="h-8 w-1 bg-green-500 mr-3"></div>
          <h3 className="text-xl font-semibold text-gray-800">Special Programs</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <ProgramCard 
            title="JEE/NEET Coaching" 
            description="Specialized coaching for engineering and medical entrance exams with mock tests and personalized feedback" 
            icon="📝" 
          />
          <ProgramCard 
            title="Career Counseling" 
            description="Expert guidance for higher education and career choices based on aptitude and interests" 
            icon="🧭" 
          />
          <ProgramCard 
            title="Research Mentorship" 
            description="Opportunity to work on research projects with expert mentors from prestigious institutions" 
            icon="🔬" 
          />
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-8 text-white text-center mb-8 shadow-lg">
        <h3 className="text-2xl font-bold mb-4">Start Your Journey to Excellence</h3>
        <p className="mb-6 max-w-2xl mx-auto">Join our Class 12 program and get the guidance you need to excel in board exams and competitive entrance tests.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-6 py-2 rounded-lg font-medium transition duration-300 shadow">
            Apply for Admission
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 px-6 py-2 rounded-lg font-medium transition duration-300">
            Schedule a Campus Visit
          </button>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-4">Frequently Asked Questions</h3>
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">When should I apply for Class 12 admission?</h4>
            <p className="text-gray-600 text-sm">Applications typically open in January and close by March for the academic year starting in April.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="font-medium text-gray-800 mb-2">How are stream allocations done?</h4>
            <p className="text-gray-600 text-sm">Stream allocation is based on Class 10 marks, entrance test performance, and student preferences.</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 mb-2">Is entrance exam coaching included in the fees?</h4>
            <p className="text-gray-600 text-sm">Basic entrance preparation is included. Advanced coaching programs have additional fees.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Class12Section;