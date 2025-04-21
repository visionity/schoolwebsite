// Class 10 Section with improved components and organization
import React from 'react';

// Component for Subject Cards
function SubjectCard({ subject }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 transition duration-300 hover:shadow-lg border-l-4 border-blue-500">
      <div className="text-3xl mb-3">{subject.icon}</div>
      <h4 className="font-semibold text-lg text-gray-800 mb-2">{subject.name}</h4>
      <p className="text-gray-600 text-sm">{subject.description}</p>
    </div>
  );
}

// Component for Assessment Items
function AssessmentItem({ name, weight, description }) {
  return (
    <div className="flex items-center">
      <div className="w-2 h-12 bg-blue-400 rounded-full mr-3"></div>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-gray-800">{name}</h4>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">{weight}</span>
        </div>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

// Component for Resource Items
function ResourceItem({ resource }) {
  // Function to determine icon based on resource type
  const getResourceIcon = (type) => {
    switch(type) {
      case 'Book': return '📘';
      case 'PDF': return '📄';
      case 'Video': return '🎬';
      case 'Exercise': return '✏️';
      default: return '📚';
    }
  };

  return (
    <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg transition duration-200">
      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3 text-xl">
        {getResourceIcon(resource.type)}
      </div>
      <div className="flex-1">
        <h5 className="font-medium text-gray-800">{resource.title}</h5>
        <p className="text-xs text-gray-500">{resource.type}</p>
      </div>
      <a href={resource.link} className="text-blue-500 hover:text-blue-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      </a>
    </div>
  );
}

// Component for Result Statistics
function ResultStat({ label, value, color }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 relative overflow-hidden">
      <div className={`absolute bottom-0 left-0 h-1 w-full ${color}`}></div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="text-xl font-bold text-gray-800">{value}</p>
    </div>
  );
}

// Badge Component
function Badge({ label, color }) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    red: "bg-red-100 text-red-800"
  };
  
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-2 ${colorClasses[color]}`}>
      {label}
    </span>
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

// Teacher Card Component
function TeacherCard({ teacher }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
        {teacher.avatar ? (
          <img src={teacher.avatar} alt={teacher.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        )}
      </div>
      <div>
        <h4 className="font-medium text-gray-800">{teacher.name}</h4>
        <p className="text-sm text-gray-600">{teacher.subject}</p>
      </div>
    </div>
  );
}

// Main Class 10 Section Component
function Class10Section() {
  // Subject information
  const subjects = [
    {
      name: "Mathematics",
      description: "Covers algebra, geometry, trigonometry, and statistics with focus on problem-solving skills",
      icon: "📐"
    },
    {
      name: "Science",
      description: "Comprehensive study of physics, chemistry and biology with practical laboratory work",
      icon: "🔬" 
    },
    {
      name: "English",
      description: "Language skills, literature appreciation, and effective communication",
      icon: "📚"
    },
    {
      name: "Social Studies",
      description: "History, geography, politics, and economics with contemporary relevance",
      icon: "🌍"
    },
    {
      name: "Computer Science",
      description: "Programming fundamentals, digital literacy, and practical applications",
      icon: "💻"
    }
  ];

  // Resources
  const resources = [
    { 
      title: "NCERT Textbooks", 
      type: "Book", 
      link: "#" 
    },
    { 
      title: "Practice Papers", 
      type: "PDF", 
      link: "#" 
    },
    { 
      title: "Video Tutorials", 
      type: "Video", 
      link: "#" 
    },
    { 
      title: "Mock Tests", 
      type: "Exercise", 
      link: "#" 
    }
  ];

  // Results
  const results = {
    passPercentage: 99.5,
    distinctionRate: 75,
    topScore: 498,
    averageScore: 85
  };

  // Faculty data
  const teachers = [
    { name: "Mrs. Priya Sharma", subject: "Mathematics", avatar: null },
    { name: "Mr. Rajesh Kumar", subject: "Science", avatar: null },
    { name: "Ms. Anjali Gupta", subject: "English", avatar: null }
  ];

  // Important dates
  const importantDates = [
    { event: "First Term Examination", date: "July 15-25, 2024" },
    { event: "Mid-Term Examination", date: "October 10-20, 2024" },
    { event: "Pre-Board Examination", date: "December 5-15, 2024" },
    { event: "Board Practical Exams", date: "January 15-30, 2025" },
    { event: "Final Board Examination", date: "March 1-20, 2025" }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section with Improved Design */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 md:p-8 mb-10 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">Class 10 - Secondary School</h2>
            <p className="text-gray-700 mb-4">
              Class 10 marks a crucial milestone in a student's academic journey, culminating in the Secondary School Certificate Examination that shapes future academic and career paths.
            </p>
            <div className="space-y-2 mb-4">
              <Badge label="Board: CBSE" color="blue" />
              <Badge label="Medium: English" color="purple" />
              <Badge label="Batch Size: 30 Students" color="green" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z" />
              </svg>
              Apply for Admission
            </button>
          </div>
          <div className="h-64 bg-white rounded-lg shadow-md overflow-hidden">
            {/* Replace with your Class 10 classroom image */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Class 10 Students Image</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Information Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="text-blue-500 text-xl mb-1">30</div>
          <div className="text-sm text-gray-600">Students per Class</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100">
          <div className="text-green-500 text-xl mb-1">5</div>
          <div className="text-sm text-gray-600">Core Subjects</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <div className="text-purple-500 text-xl mb-1">8</div>
          <div className="text-sm text-gray-600">Teachers</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <div className="text-yellow-500 text-xl mb-1">6</div>
          <div className="text-sm text-gray-600">Hours Daily</div>
        </div>
      </div>

      {/* Curriculum Section with Animation */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="h-10 w-1 bg-blue-500 mr-4"></div>
          <h3 className="text-xl font-semibold text-gray-800">Curriculum & Subjects</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject, index) => (
            <div key={index} className="transform transition-all duration-300 hover:-translate-y-1">
              <SubjectCard subject={subject} />
            </div>
          ))}
        </div>
      </div>

      {/* Schedule and Assessment */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Class Schedule */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
            <span className="text-blue-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </span>
            Class Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-blue-50">
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monday</th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tuesday</th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wednesday</th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thursday</th>
                  <th className="py-2 px-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Friday</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="py-2 px-3 text-sm text-gray-600">8:00 - 9:00</td>
                  <td className="py-2 px-3 text-sm text-gray-700">English</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Science</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Math</td>
                  <td className="py-2 px-3 text-sm text-gray-700">English</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Science</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-sm text-gray-600">9:00 - 10:00</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Math</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Social Studies</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Science</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Math</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Computer</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 text-sm text-gray-600">10:30 - 11:30</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Science</td>
                  <td className="py-2 px-3 text-sm text-gray-700">English</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Social Studies</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Computer</td>
                  <td className="py-2 px-3 text-sm text-gray-700">Math</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Assessment Structure */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
            <span className="text-blue-500 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
            </span>
            Assessment Structure
          </h3>
          <div className="space-y-4">
            <AssessmentItem 
              name="Periodic Tests" 
              weight="10%" 
              description="Regular tests conducted throughout the academic year" 
            />
            <AssessmentItem 
              name="Mid-Term Examination" 
              weight="30%" 
              description="Comprehensive assessment covering half-yearly syllabus" 
            />
            <AssessmentItem 
              name="Pre-Board Examination" 
              weight="20%" 
              description="Mock board exams to prepare students for final exams" 
            />
            <AssessmentItem 
              name="Final Board Examination" 
              weight="40%" 
              description="CBSE conducted examination at the end of academic year" 
            />
          </div>
        </div>
      </div>

      {/* Faculty Section - New Addition */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <div className="h-10 w-1 bg-green-500 mr-4"></div>
          <h3 className="text-xl font-semibold text-gray-800">Our Faculty</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {teachers.map((teacher, index) => (
            <TeacherCard key={index} teacher={teacher} />
          ))}
          <div className="bg-gray-50 rounded-lg border border-dashed border-gray-300 p-4 flex items-center justify-center">
            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
              View All Faculty Members
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Important Dates - New Addition */}
      <div className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-800 mb-4 flex items-center">
          <span className="text-red-500 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
          </span>
          Important Dates
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {importantDates.map((item, index) => (
            <div key={index} className="flex items-start p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-full rounded-full bg-red-400 mr-3"></div>
              <div>
                <h4 className="font-medium text-gray-800">{item.event}</h4>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resources and Results */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Learning Resources */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Learning Resources</h3>
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <ResourceItem key={index} resource={resource} />
            ))}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                View All Resources
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Previous Year Results */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Previous Year Results</h3>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <ResultStat label="Pass Percentage" value={`${results.passPercentage}%`} color="bg-green-500" />
            <ResultStat label="Distinction Rate" value={`${results.distinctionRate}%`} color="bg-purple-500" />
            <ResultStat label="Top Score" value={`${results.topScore}/500`} color="bg-blue-500" />
            <ResultStat label="Average Score" value={`${results.averageScore}%`} color="bg-yellow-500" />
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-800 mb-2">Board Toppers 2023-24</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-800">1</div>
                <div className="text-sm">
                  <p className="font-medium">Ananya Sharma</p>
                  <p className="text-gray-600">98.4%</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-800">2</div>
                <div className="text-sm">
                  <p className="font-medium">Rahul Verma</p>
                  <p className="text-gray-600">97.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action - New Addition */}
      <div className="mt-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 md:p-8 text-white text-center">
        <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to join our Class 10 Program?</h3>
        <p className="mb-6 max-w-2xl mx-auto">Our comprehensive curriculum, experienced faculty, and proven track record make us the ideal choice for your academic success.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition duration-300">
            Apply Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-2 rounded-lg font-medium transition duration-300">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Class10Section;