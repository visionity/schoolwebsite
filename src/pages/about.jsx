// pages/about.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  const [activeTab, setActiveTab] = useState('history');

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>About Us - School Name</title>
        <meta name="description" content="Learn about our school's history, mission, faculty, and infrastructure" />
      </Head>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden h-64 md:h-80 lg:h-96 mb-8">
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center z-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">About Our School</h1>
              <p className="text-sm md:text-base lg:text-lg text-white max-w-xl mx-auto">
                Empowering students to reach their full potential since 1985
              </p>
            </div>
          </div>
          <div className="absolute inset-0">
            {/* Replace with your actual school image */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500">School Building Image</span>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b">
          <TabButton active={activeTab === 'history'} onClick={() => setActiveTab('history')}>
            History
          </TabButton>
          <TabButton active={activeTab === 'vision'} onClick={() => setActiveTab('vision')}>
            Vision & Mission
          </TabButton>
          <TabButton active={activeTab === 'faculty'} onClick={() => setActiveTab('faculty')}>
            Faculty
          </TabButton>
          <TabButton active={activeTab === 'infrastructure'} onClick={() => setActiveTab('infrastructure')}>
            Infrastructure
          </TabButton>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'history' && <HistorySection />}
          {activeTab === 'vision' && <VisionMissionSection />}
          {activeTab === 'faculty' && <FacultySection />}
          {activeTab === 'infrastructure' && <InfrastructureSection />}
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
          ? 'text-blue-600 border-blue-600' 
          : 'text-gray-600 border-transparent hover:text-blue-500 hover:border-blue-300'
      }`}
    >
      {children}
    </button>
  );
}

// History Section
function HistorySection() {
  return (
    <div className="fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our History</h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Our Journey Since 1985</h3>
          <p className="text-gray-700 mb-4">
            Founded in 1985, our school began with a vision to provide quality education that balances academic excellence with character development. What started as a small institution with just 5 teachers and 50 students has now grown into one of the region's most respected educational institutions.
          </p>
          <p className="text-gray-700">
            Over the decades, we have maintained our commitment to educational innovation while honoring our foundational values of integrity, respect, and excellence.
          </p>
        </div>
        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Historical School Image</span>
        </div>
      </div>
      
      {/* Timeline */}
      <h3 className="text-xl font-semibold mb-6 text-blue-700">Key Milestones</h3>
      <div className="space-y-8">
        <TimelineItem year="1985" title="Foundation">
          School established with 5 teachers and 50 students in a small building
        </TimelineItem>
        <TimelineItem year="1995" title="Expansion">
          Campus expanded to include new academic buildings and sports facilities
        </TimelineItem>
        <TimelineItem year="2005" title="Technology Integration">
          Introduced comprehensive computer labs and digital learning initiatives
        </TimelineItem>
        <TimelineItem year="2015" title="Excellence Award">
          Received national recognition for academic excellence and innovative teaching methodologies
        </TimelineItem>
        <TimelineItem year="2020" title="Modern Transformation">
          Complete renovation of campus with state-of-the-art facilities and smart classrooms
        </TimelineItem>
      </div>
    </div>
  );
}

// Timeline Item Component
function TimelineItem({ year, title, children }) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-6">
        <div className="rounded-full bg-blue-600 text-white font-bold w-16 h-16 flex items-center justify-center">
          {year}
        </div>
        <div className="h-full w-1 bg-blue-200 mt-2"></div>
      </div>
      <div className="pt-2">
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-gray-600 mt-1">{children}</p>
      </div>
    </div>
  );
}

// Vision & Mission Section
function VisionMissionSection() {
  return (
    <div className="fade-in">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Vision & Mission</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Our guiding principles that shape our approach to education and student development
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Vision Card */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:scale-105">
          <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-blue-800 mb-3">Our Vision</h3>
          <p className="text-gray-700">
            To be a leading institution that nurtures global citizens who are innovative thinkers, compassionate leaders, and lifelong learners ready to contribute positively to society.
          </p>
          <div className="mt-6 flex items-center">
            <div className="h-1 flex-grow bg-blue-200 rounded"></div>
            <div className="px-3 text-blue-700 font-medium">2025 & Beyond</div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 shadow-md transform transition-all duration-300 hover:scale-105">
          <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-3">Our Mission</h3>
          <p className="text-gray-700">
            To provide holistic education through innovative teaching methodologies, comprehensive curriculum, and supportive environment that develops critical thinking, creativity, character, and excellence in all endeavors.
          </p>
          <div className="mt-6 flex items-center">
            <div className="h-1 flex-grow bg-green-200 rounded"></div>
            <div className="px-3 text-green-700 font-medium">Every Day</div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-50 rounded-xl p-8 shadow-md mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <CoreValue icon="🔍" title="Excellence">Striving for the highest standards in every aspect of education</CoreValue>
          <CoreValue icon="🤝" title="Integrity">Upholding honesty, ethics, and accountability in all actions</CoreValue>
          <CoreValue icon="🌱" title="Growth">Nurturing continuous development of knowledge and character</CoreValue>
          <CoreValue icon="🌍" title="Respect">Embracing diversity and treating everyone with dignity</CoreValue>
        </div>
      </div>
    </div>
  );
}

// Core Value Component
function CoreValue({ icon, title, children }) {
  return (
    <div className="text-center p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="text-2xl mb-2">{icon}</div>
      <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  );
}

// Faculty Section
function FacultySection() {
  // Example faculty members
  const facultyMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal",
      qualifications: "Ph.D. in Education Management",
      experience: "25+ years",
      image: "/path/to/image1.jpg"
    },
    {
      name: "Prof. David Wilson",
      position: "Vice Principal",
      qualifications: "M.Ed. in Educational Leadership",
      experience: "20+ years",
      image: "/path/to/image2.jpg"
    },
    {
      name: "Ms. Emily Chen",
      position: "Head of Sciences",
      qualifications: "M.Sc. in Physics",
      experience: "15+ years",
      image: "/path/to/image3.jpg"
    },
    {
      name: "Mr. Robert Taylor",
      position: "Head of Mathematics",
      qualifications: "M.Sc. in Applied Mathematics",
      experience: "18+ years",
      image: "/path/to/image4.jpg"
    },
    {
      name: "Mrs. Jennifer Adams",
      position: "Head of Languages",
      qualifications: "M.A. in English Literature",
      experience: "12+ years",
      image: "/path/to/image5.jpg"
    },
    {
      name: "Mr. Michael Rodriguez",
      position: "Head of Arts",
      qualifications: "M.F.A in Fine Arts",
      experience: "14+ years",
      image: "/path/to/image6.jpg"
    }
  ];

  // Department statistics
  const departments = [
    { name: "Academic Staff", count: 45, color: "bg-blue-500" },
    { name: "Administrative Staff", count: 15, color: "bg-green-500" },
    { name: "Support Staff", count: 20, color: "bg-purple-500" },
    { name: "Specialized Teachers", count: 12, color: "bg-yellow-500" }
  ];

  return (
    <div className="fade-in">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Faculty</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Meet our dedicated team of educators and administrators committed to providing exceptional education
        </p>
      </div>

      {/* Department Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className={`${dept.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center`}>
              <span className="text-2xl font-bold text-white">{dept.count}</span>
            </div>
            <h3 className="font-medium text-gray-800">{dept.name}</h3>
          </div>
        ))}
      </div>

      {/* Leadership Team */}
      <h3 className="text-xl font-bold text-gray-800 mb-6">Leadership Team</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {facultyMembers.slice(0, 3).map((member, index) => (
          <FacultyCard key={index} faculty={member} featured />
        ))}
      </div>

      {/* Department Heads */}
      <h3 className="text-xl font-bold text-gray-800 mb-6">Department Heads</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {facultyMembers.slice(3).map((member, index) => (
          <FacultyCard key={index} faculty={member} />
        ))}
      </div>

      {/* Faculty Statistics */}
      <div className="mt-16 bg-gray-50 rounded-xl p-8">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Faculty Qualifications</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <StatCard value="85%" label="With Advanced Degrees" color="text-blue-600" />
          <StatCard value="12+" label="Average Years Experience" color="text-green-600" />
          <StatCard value="35+" label="Published Research Papers" color="text-purple-600" />
          <StatCard value="25+" label="Professional Development Hours/Year" color="text-red-600" />
        </div>
      </div>
    </div>
  );
}

// Faculty Card Component
function FacultyCard({ faculty, featured = false }) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${featured ? 'border-2 border-blue-500' : ''}`}>
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Faculty Photo</span>
      </div>
      <div className="p-6">
        <h4 className="font-bold text-lg text-gray-800">{faculty.name}</h4>
        <p className={`${featured ? 'text-blue-600' : 'text-gray-600'} font-medium mb-2`}>{faculty.position}</p>
        <div className="text-sm text-gray-600 space-y-1">
          <p>📚 {faculty.qualifications}</p>
          <p>⏳ {faculty.experience} experience</p>
        </div>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ value, label, color }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

// Infrastructure Section
function InfrastructureSection() {
  // Facilities list
  const facilities = [
    {
      name: "Modern Classrooms",
      description: "40 spacious, air-conditioned classrooms equipped with interactive smartboards and multimedia facilities",
      icon: "🏫"
    },
    {
      name: "Science Laboratories",
      description: "Fully equipped Physics, Chemistry, and Biology labs with the latest equipment for hands-on learning",
      icon: "🔬"
    },
    {
      name: "Computer Labs",
      description: "3 state-of-the-art computer labs with high-speed internet and latest software for digital literacy",
      icon: "💻"
    },
    {
      name: "Library & Resource Center",
      description: "Extensive collection of books, digital resources, and quiet study spaces for research and reading",
      icon: "📚"
    },
    {
      name: "Sports Facilities",
      description: "Indoor and outdoor sports facilities including basketball courts, football field, swimming pool, and fitness center",
      icon: "🏀"
    },
    {
      name: "Auditorium",
      description: "500-seat modern auditorium for performances, presentations, and school events",
      icon: "🎭"
    },
    {
      name: "Art & Music Studios",
      description: "Dedicated spaces for visual arts, crafts, music practice, and performances",
      icon: "🎨"
    },
    {
      name: "Cafeteria",
      description: "Spacious dining area serving nutritious meals prepared in our hygienic kitchen",
      icon: "🍽️"
    }
  ];

  return (
    <div className="fade-in">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Our Infrastructure</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explore our world-class facilities designed to provide the optimal learning environment
        </p>
      </div>

      {/* Campus Overview */}
      <div className="relative rounded-xl overflow-hidden h-64 md:h-80 mb-12">
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-white mb-2">Our Campus</h3>
            <p className="text-white">
              Spread across 10 acres of lush green environment with modern buildings designed for 21st-century learning
            </p>
          </div>
        </div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Campus Aerial View</span>
          </div>
        </div>
      </div>

      {/* Key Infrastructure Features */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <InfraFeature value="10+" label="Acres Campus" icon="🏞️" />
        <InfraFeature value="40" label="Modern Classrooms" icon="🏫" />
        <InfraFeature value="12" label="Specialized Labs" icon="🧪" />
        <InfraFeature value="5" label="Sports Facilities" icon="🏆" />
      </div>

      {/* Facilities Grid */}
      <h3 className="text-xl font-bold text-gray-800 mb-6">Our Facilities</h3>
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {facilities.map((facility, index) => (
          <FacilityCard key={index} facility={facility} />
        ))}
      </div>

      {/* Virtual Tour Section */}
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Take a Virtual Tour</h3>
        <p className="text-gray-600 mb-6">
          Explore our campus facilities through our interactive virtual tour
        </p>
        <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
          <span className="text-gray-500">Virtual Tour Video Placeholder</span>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300">
          Start Virtual Tour
        </button>
      </div>
    </div>
  );
}

// Infrastructure Feature Component
function InfraFeature({ value, label, icon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:scale-105">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-2xl font-bold text-blue-600">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

// Facility Card Component
function FacilityCard({ facility }) {
  return (
    <div className="flex bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="w-16 bg-blue-100 flex items-center justify-center text-3xl">
        {facility.icon}
      </div>
      <div className="p-4">
        <h4 className="font-bold text-gray-800">{facility.name}</h4>
        <p className="text-sm text-gray-600">{facility.description}</p>
      </div>
    </div>
  );
}

// Add this to your global CSS or component styles
/*
.fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
*/