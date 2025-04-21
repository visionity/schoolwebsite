// ContactPage.jsx
import { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeMap, setActiveMap] = useState('main');
  
  // Form handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  // Parallax effect for header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.contact-header');
      if (header) {
        const scrollPosition = window.scrollY;
        header.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        header.style.opacity = 1 - scrollPosition / 600;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Header with Parallax */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="contact-header absolute inset-0 flex items-center justify-center bg-blue-600 bg-opacity-90"
          style={{
            backgroundImage: "url('/api/placeholder/1600/600')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="text-center text-white z-10 px-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in-down">Get In Touch</h1>
            <p className="text-xl max-w-xl mx-auto animate-fade-in-up">
              We'd love to hear from you! Reach out with any questions about our programs, admissions, or campus.
            </p>
          </div>
          <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        </div>
      </div>

      {/* Info Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <p className="text-gray-600">123 Education Lane, Knowledge City, 12345</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <Phone className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
            <p className="text-gray-600">Main: (123) 456-7890</p>
            <p className="text-gray-600">Admissions: (123) 456-7891</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600">info@schoolwebsite.com</p>
            <p className="text-gray-600">admissions@schoolwebsite.com</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
            <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-green-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-green-800">Message Sent!</h3>
                  <p className="text-green-700">Thank you for contacting us. We'll respond shortly.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Inquiry about admissions"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 text-white font-medium rounded-lg shadow-md transition duration-300 flex items-center justify-center ${
                    isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Find Our Campus</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex border-b border-gray-200">
                <button 
                  className={`px-4 py-3 font-medium flex-1 transition ${activeMap === 'main' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveMap('main')}
                >
                  Main Campus
                </button>
                <button 
                  className={`px-4 py-3 font-medium flex-1 transition ${activeMap === 'secondary' ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-50'}`}
                  onClick={() => setActiveMap('secondary')}
                >
                  Secondary Campus
                </button>
              </div>
              
              <div className="h-96 relative">
                {/* Placeholder for map - in a real app, you'd integrate with Google Maps or another map service */}
                <img 
                  src="/api/placeholder/800/600" 
                  alt="Campus map" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-6">
                  <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-md">
                    <h3 className="text-xl font-bold mb-2">
                      {activeMap === 'main' ? 'Main Campus' : 'Secondary Campus'}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {activeMap === 'main' 
                        ? '123 Education Lane, Knowledge City, 12345' 
                        : '456 Learning Avenue, Knowledge City, 12345'}
                    </p>
                    <div className="flex space-x-2">
                      <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get Directions</a>
                      <a href="#" className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition">View Map</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>
              <FAQ />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our School Community</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Experience a world-class education in a nurturing environment that empowers students to excel and reach their full potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition duration-300">
              Apply Now
            </a>
            <a href="#" className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300">
              Schedule a Tour
            </a>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-8">
            {['facebook', 'twitter', 'instagram', 'youtube', 'linkedin'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="p-4 bg-white rounded-full shadow-md hover:shadow-lg transform transition hover:scale-110"
              >
                <img 
                  src={`/api/placeholder/48/48`} 
                  alt={`${platform} icon`} 
                  className="w-6 h-6" 
                />
              </a>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="max-w-md w-full">
              <p className="text-center text-gray-600 mb-4">Subscribe to our newsletter</p>
              <div className="flex">
                <input 
                  type="email" 
                  className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Your email address"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FAQ Component with animation
function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    { 
      question: "What are the school's hours?",
      answer: "Our school operates Monday through Friday from 8:00 AM to 3:30 PM. Offices are open until 5:00 PM on weekdays and 12:00 PM on Saturdays."
    },
    { 
      question: "How can I apply for admission?",
      answer: "You can apply through our online portal available on the Admissions page. We accept applications year-round, with priority deadlines in February for the following academic year."
    },
    { 
      question: "Are there transportation services available?",
      answer: "Yes, we provide bus services covering major areas of the city. Transportation details are provided upon enrollment."
    },
    { 
      question: "How can I schedule a campus tour?",
      answer: "Campus tours can be scheduled through our Admissions Office. Please contact us at admissions@schoolwebsite.com or call (123) 456-7891 to arrange a visit."
    }
  ];
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left font-medium flex justify-between items-center bg-white hover:bg-gray-50 transition"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <svg 
              className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div 
            className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
              activeIndex === index ? 'max-h-40 py-4' : 'max-h-0 py-0'
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

