import { useState, useEffect } from 'react';
import { Users, Award, BookOpen, Check, ArrowRight, BarChart3, GraduationCap } from 'lucide-react';

// Counter animation component
const CounterCard = ({ value, label, icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(visibilityTimer);
  }, [delay]);
  
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = value / 35;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);
  
  const displayValue = label === "Placement Rate" ? `${count}%` : count.toLocaleString();
  
  return (
    <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} bg-white p-6 rounded-xl shadow-md hover:shadow-lg border-l-4 border-blue-500 flex items-center`}>
      <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{displayValue}</h3>
        <p className="text-gray-500 font-medium">{label}</p>
      </div>
    </div>
  );
};

// Feature card component
const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(visibilityTimer);
  }, [delay]);
  
  return (
    <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} bg-white p-6 rounded-xl shadow-md hover:shadow-lg border border-gray-100`}>
      <div className="inline-flex p-3 rounded-lg bg-blue-50 text-blue-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Modern page component
export default function ModernStatisticsPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const stats = [
    { value: 5000, label: "Students", icon: <Users className="h-6 w-6" /> },
    { value: 100, label: "Faculty Members", icon: <Award className="h-6 w-6" /> },
    { value: 50, label: "Programs", icon: <BookOpen className="h-6 w-6" /> },
    { value: 95, label: "Placement Rate", icon: <Check className="h-6 w-6" /> }
  ];
  
  const features = [
    { 
      title: "World-Class Education", 
      description: "Learn from industry experts and renowned academics in state-of-the-art facilities.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    { 
      title: "Career Support", 
      description: "Benefit from our extensive industry connections and dedicated placement services.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    { 
      title: "Innovative Programs", 
      description: "Choose from 50+ cutting-edge programs designed to meet industry demands.",
      icon: <BookOpen className="h-6 w-6" />
    }
  ];
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} mb-12 text-center`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Excellence in Education</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">Join our community of learners and innovators to shape the future together.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center">
            Apply Now <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
        
        {/* Stats Section */}
        <div className="mb-16">
          <h2 className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} text-2xl font-bold text-gray-800 mb-6 text-center`}>Our Impact by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <CounterCard 
                key={index} 
                value={stat.value} 
                label={stat.label} 
                icon={stat.icon} 
                delay={index * 150 + 300} 
              />
            ))}
          </div>
        </div>
        
        {/* Features Section */}
        <div>
          <h2 className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} text-2xl font-bold text-gray-800 mb-6 text-center`}>Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={index * 150 + 600}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}