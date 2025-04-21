// pages/academics.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Class10Section from '@/components/class10';
import Class12Section from '@/components/class12';

export default function Academics() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Academics - School Name</title>
        <meta name="description" content="Academic programs, curriculum, and resources for students" />
      </Head>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 mb-8">
          <div className="absolute inset-0 bg-purple-900 bg-opacity-75 flex items-center justify-center z-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">Academics</h1>
              <p className="text-sm md:text-base lg:text-lg text-white max-w-xl mx-auto">
                Excellence in education through innovative curriculum and dedicated teaching
              </p>
            </div>
          </div>
          <div className="absolute inset-0">
            {/* Replace with your actual academic image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Students in Classroom Image</span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
            Overview
          </TabButton>
          <TabButton active={activeTab === 'class10'} onClick={() => setActiveTab('class10')}>
            Class 10
          </TabButton>
          <TabButton active={activeTab === 'class12'} onClick={() => setActiveTab('class12')}>
            Class 12
          </TabButton>
          <TabButton active={activeTab === 'circulars'} onClick={() => setActiveTab('circulars')}>
            Circulars & Notices
          </TabButton>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'overview' && <OverviewSection />}
          {activeTab === 'class10' && <Class10Section />}
          {activeTab === 'class12' && <Class12Section />}
          {activeTab === 'circulars' && <CircularsSection />}
        </div>
      </main>
    </div>
  );
}

// Tab Button Component
function TabButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 font-medium text-base transition-all duration-200 border-b-2 ${
        active 
          ? 'text-purple-600 border-purple-600' 
          : 'text-gray-600 border-transparent hover:text-purple-500 hover:border-purple-300'
      }`}
    >
      {children}
    </button>
  );
}

// Overview Section
function OverviewSection() {
  // Academic programs offered
  const programs = [
    {
      level: "Primary",
      grades: "Grades 1-5",
      description: "Foundation learning with focus on literacy, numeracy, and creative development",
      features: ["Activity-based learning", "Language skills", "Introduction to STEM", "Arts and crafts"],
      color: "purple"
    },
    {
      level: "Middle School",
      grades: "Grades 6-8",
      description: "Expanded curriculum to develop critical thinking and subject knowledge",
      features: ["Project-based learning", "Scientific inquiry", "Literature studies", "Digital literacy"],
      color: "blue"
    },
    {
      level: "Secondary",
      grades: "Grades 9-10",
      description: "Comprehensive preparation for board examinations and skill development",
      features: ["Board exam preparation", "Laboratory work", "Career guidance", "Sports specialization"],
      color: "green"
    },
    {
      level: "Senior Secondary",
      grades: "Grades 11-12",
      description: "Specialized streams to prepare for higher education and career paths",
      features: ["Science, Commerce & Humanities", "Entrance exam coaching", "Research projects", "Leadership development"],
      color: "red"
    }
  ];

  return (
    <div className="fade-in">
      <div className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Academic Excellence</h2>
        <p className="text-gray-700 mb-6">
          Our academic program is designed to provide a balanced education that nurtures intellectual curiosity, critical thinking, and creative problem-solving. We follow a comprehensive curriculum that meets national standards while incorporating innovative teaching methodologies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Our Approach</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Student-centered learning environments that promote active participation</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Integration of technology across all subject areas</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Regular assessments to track progress and provide timely feedback</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Personalized learning paths to address individual needs</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">✓</span>
                <span>Emphasis on both academic excellence and character development</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Academic Highlights</h3>
            <div className="grid grid-cols-2 gap-4">
              <StatBlock label="Student-Teacher Ratio" value="15:1" />
              <StatBlock label="Board Exam Pass Rate" value="99.8%" />
              <StatBlock label="University Placements" value="95%" />
              <StatBlock label="Academic Awards" value="50+" />
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-6">Our Academic Programs</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>

      <div className="mt-12 bg-gray-100 rounded-xl p-6 md:p-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Calendar 2024-25</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <CalendarCard month="April-May" events={["New Academic Session Begins", "Summer Break", "Orientation Programs"]} />
          <CalendarCard month="July-September" events={["First Term Assessments", "Sports Day", "Independence Day"]} />
          <CalendarCard month="October-December" events={["Mid-Term Exams", "Annual Day", "Winter Break"]} />
          <CalendarCard month="January-March" events={["Pre-Board Exams", "Final Assessments", "Result Declaration"]} />
        </div>
      </div>
    </div>
  );
}

// Stat Block Component
function StatBlock({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm text-center">
      <div className="text-2xl font-bold text-purple-600">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

// Program Card Component
function ProgramCard({ program }) {
  const colorMap = {
    purple: "bg-purple-100 border-purple-300 text-purple-800",
    blue: "bg-blue-100 border-blue-300 text-blue-800",
    green: "bg-green-100 border-green-300 text-green-800",
    red: "bg-red-100 border-red-300 text-red-800"
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-l-0 border-r-0 border-b-0 hover:shadow-lg transition-shadow duration-300 border-t-purple-500">
      <div className={`px-6 py-4 border-b ${colorMap[program.color]}`}>
        <h4 className="font-bold text-lg">{program.level}</h4>
        <p className="text-sm">{program.grades}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-700 mb-4">{program.description}</p>
        <h5 className="font-medium text-gray-800 mb-2">Key Features:</h5>
        <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
          {program.features.map((feature, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-center">
              <span className={`w-2 h-2 mr-2 rounded-full bg-${program.color}-500`}></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Calendar Card Component
function CalendarCard({ month, events }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300">
      <h4 className="font-medium text-purple-700 border-b pb-2 mb-3">{month}</h4>
      <ul className="space-y-2">
        {events.map((event, idx) => (
          <li key={idx} className="text-sm text-gray-700">• {event}</li>
        ))}
      </ul>
    </div>
  );
}

// Class 10 Section
<Class10Section/>

// Badge Component
function Badge({ label, color }) {
  const colorMap = {
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800"
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colorMap[color]} mr-2`}>
      {label}
    </span>
  );
}

// Subject Card Component
function SubjectCard({ subject }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      <div className="p-4 flex items-start">
        <div className="text-2xl mr-3">{subject.icon}</div>
        <div>
          <h4 className="font-medium text-gray-800">{subject.name}</h4>
          <p className="text-sm text-gray-600 mt-1">{subject.description}</p>
        </div>
      </div>
    </div>
  );
}

// Assessment Item Component
function AssessmentItem({ name, weight, description }) {
  return (
    <div className="flex items-center">
      <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
        {weight}
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}


// Resource Item Component
function ResourceItem({ resource }) {
  const iconMap = {
    "Book": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
      </svg>
    ),
    "PDF": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
      </svg>
    ),
    "Video": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
      </svg>
    ),
    "Exercise": (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
      </svg>
    )
  };

  return (
    <Link href={resource.link} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
      <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
        {iconMap[resource.type]}
      </div>
      <div>
        <p className="font-medium text-gray-800">{resource.title}</p>
        <p className="text-xs text-gray-500">{resource.type}</p>
      </div>
    </Link>
  );
}

function StreamCard({ stream }) {
    const colorMap = {
      "blue": "border-blue-500 bg-blue-50",
      "green": "border-green-500 bg-green-50",
      "yellow": "border-yellow-500 bg-yellow-50",
      "red": "border-red-500 bg-red-50"
    };
  
    return (
      <div className={`rounded-lg shadow-md overflow-hidden border-t-4 ${colorMap[stream.color].split(' ')[0]}`}>
        <div className={`p-6 ${colorMap[stream.color].split(' ')[1]}`}>
          <h4 className="font-bold text-lg text-gray-800">{stream.name}</h4>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <h5 className="text-sm font-medium text-gray-600 mb-2">Subjects</h5>
            <div className="flex flex-wrap gap-2">
              {stream.subjects.map((subject, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                  {subject}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-sm font-medium text-gray-600 mb-2">Career Opportunities</h5>
            <p className="text-gray-700 text-sm">{stream.career}</p>
          </div>
        </div>
      </div>
    );
  }
  
<Class12Section/>

  function PlacementCard({ university, count, icon }) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition-shadow duration-300">
        <div className="text-3xl mb-2">{icon}</div>
        <div className="text-lg font-bold text-indigo-600">{count}</div>
        <div className="text-sm text-gray-600">{university}</div>
      </div>
    );
  }
  
  
//   Circulars Section
  function CircularsSection() {
    // Current circulars
    const circulars = [
      {
        id: "CIR2024-042",
        title: "Annual Examination Schedule for Academic Year 2024-25",
        date: "April 15, 2025",
        category: "Examination",
        urgent: true
      },
      {
        id: "CIR2024-041",
        title: "Parent-Teacher Meeting for Classes 10 and 12",
        date: "April 12, 2025",
        category: "Meeting",
        urgent: false
      },
      {
        id: "CIR2024-040",
        title: "Summer Vacation Schedule and Holiday Homework",
        date: "April 10, 2025",
        category: "Holidays",
        urgent: false
      },
      {
        id: "CIR2024-039",
        title: "Career Counseling Session for Class 10 Students",
        date: "April 5, 2025",
        category: "Event",
        urgent: false
      },
      {
        id: "CIR2024-038",
        title: "Scholarship Exam for Academic Year 2025-26",
        date: "April 1, 2025",
        category: "Examination",
        urgent: true
      }
    ];
  
    // Archive months
    const archiveMonths = [
      "March 2025", "February 2025", "January 2025", "December 2024", 
      "November 2024", "October 2024", "September 2024", "August 2024"
    ];
  
    // Categories
    const categories = [
      { name: "All", count: 42 },
      { name: "Examination", count: 15 },
      { name: "Meeting", count: 8 },
      { name: "Events", count: 10 },
      { name: "Holidays", count: 5 },
      { name: "Admissions", count: 4 }
    ];
  
    const [filter, setFilter] = useState("All");
  
    return (
      <div className="fade-in">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Circulars & Notices</h2>
          <p className="text-gray-700">
            Stay updated with the latest announcements, notices, and circulars from our school administration.
          </p>
        </div>
  
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Circulars List */}
          <div className="lg:col-span-2">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search circulars..." 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-3 text-gray-400 hover:text-purple-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
  
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category, idx) => (
                <button 
                  key={idx}
                  onClick={() => setFilter(category.name)} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    filter === category.name 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
  
            {/* Circulars List */}
            <div className="space-y-4">
              {circulars.map((circular, idx) => (
                <CircularCard key={idx} circular={circular} />
              ))}
            </div>
  
            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="flex items-center space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">3</button>
                <span className="px-2 text-gray-500">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">8</button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
  
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Important Notices */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Important Notices
              </h3>
              <ul className="space-y-2">
                {circulars.filter(c => c.urgent).map((circular, idx) => (
                  <li key={idx} className="text-sm">
                    <Link href="#" className="text-red-700 hover:text-red-800 font-medium">
                      {circular.title}
                    </Link>
                    <p className="text-red-600 text-xs">{circular.date}</p>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Archive */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-gray-800 mb-3">Archive</h3>
              <ul className="space-y-2">
                {archiveMonths.map((month, idx) => (
                  <li key={idx}>
                    <Link href="#" className="text-gray-700 hover:text-purple-600 text-sm flex items-center justify-between">
                      <span>{month}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {Math.floor(Math.random() * 8) + 2}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Download Forms */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-800 mb-3">Download Forms</h3>
              <ul className="space-y-2">
                <FormDownloadLink title="Leave Application Form" />
                <FormDownloadLink title="ID Card Replacement Form" />
                <FormDownloadLink title="Scholarship Application" />
                <FormDownloadLink title="Transfer Certificate Request" />
              </ul>
            </div>
  
            {/* Subscribe to Updates */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg p-4 text-white">
              <h3 className="font-semibold mb-3">Get Updates</h3>
              <p className="text-sm text-purple-100 mb-3">Subscribe to receive latest circulars directly in your email</p>
              <div className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full px-3 py-2 rounded-md text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full bg-white text-purple-600 hover:bg-purple-100 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Circular Card Component
  function CircularCard({ circular }) {
    const categoryColorMap = {
      "Examination": "bg-blue-100 text-blue-800",
      "Meeting": "bg-green-100 text-green-800",
      "Event": "bg-yellow-100 text-yellow-800",
      "Holidays": "bg-purple-100 text-purple-800"
    };
  
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        <div className="p-4 sm:p-5">
          <div className="flex justify-between items-start">
            <div>
              <div className="flex items-center mb-2">
                <span className={`text-xs px-2 py-1 rounded-full ${categoryColorMap[circular.category] || "bg-gray-100 text-gray-800"}`}>
                  {circular.category}
                </span>
                {circular.urgent && (
                  <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Urgent
                  </span>
                )}
              </div>
              <h4 className="font-medium text-gray-800 mb-1">{circular.title}</h4>
              <div className="flex items-center text-sm text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {circular.date}
                <span className="mx-2">•</span>
                <span>ID: {circular.id}</span>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-2 text-gray-400 hover:text-blue-500" title="Download">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-purple-500" title="Share">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <Link href="#" className="text-purple-600 hover:text-purple-800 text-sm font-medium">
              View Complete Details
            </Link>
            <span className="text-xs text-gray-500">For: All Students</span>
          </div>
        </div>
      </div>
    );
  }
  
  // Form Download Link Component
  function FormDownloadLink({ title }) {
    return (
      <Link href="#" className="flex items-center justify-between p-2 bg-white rounded-md hover:bg-purple-100 transition-colors duration-200">
        <span className="text-sm text-gray-700">{title}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      </Link>
    );
  }
  
 