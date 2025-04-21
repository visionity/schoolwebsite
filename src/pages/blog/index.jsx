// pages/blog/index.jsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Sample blog data - in a real app, you'd fetch this from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Annual Science Fair Winners Announced",
    excerpt: "Congratulations to all participants in this year's Science Fair. The creativity and scientific rigor displayed was truly impressive.",
    category: "Events",
    author: "Principal Johnson",
    date: "April 15, 2025",
    readTime: "3 min read",
    image: "/api/placeholder/800/500",
    featured: true
  },
  {
    id: 2,
    title: "New Computer Lab Opening Next Month",
    excerpt: "We're excited to announce the opening of our state-of-the-art computer lab equipped with the latest technology for our students.",
    category: "Announcements",
    author: "Tech Department",
    date: "April 10, 2025",
    readTime: "4 min read",
    image: "/api/placeholder/800/500",
    featured: false
  },
  {
    id: 3,
    title: "Basketball Team Advances to State Finals",
    excerpt: "Our school's basketball team has made it to the state finals for the first time in 10 years. Join us in supporting them!",
    category: "Sports",
    author: "Coach Williams",
    date: "April 8, 2025",
    readTime: "2 min read",
    image: "/api/placeholder/800/500",
    featured: false
  },
  {
    id: 4,
    title: "Tips for End-of-Year Exam Preparation",
    excerpt: "With final exams approaching, here are some effective strategies to help students prepare and excel in their exams.",
    category: "Academic",
    author: "Counseling Office",
    date: "April 5, 2025",
    readTime: "5 min read",
    image: "/api/placeholder/800/500",
    featured: false
  },
  {
    id: 5,
    title: "Art Exhibition Showcases Student Talent",
    excerpt: "The annual art exhibition highlighted the incredible artistic abilities of our students across various mediums.",
    category: "Arts",
    author: "Ms. Garcia",
    date: "April 1, 2025",
    readTime: "3 min read",
    image: "/api/placeholder/800/500",
    featured: false
  },
  {
    id: 6,
    title: "Parent-Teacher Conference Schedule Released",
    excerpt: "The schedule for this semester's parent-teacher conferences has been finalized. Please check the dates and book your slots.",
    category: "Announcements",
    author: "Admin Office",
    date: "March 28, 2025",
    readTime: "2 min read",
    image: "/api/placeholder/800/500",
    featured: false
  }
];

// List of categories for filter
const categories = ["All", "Events", "Announcements", "Sports", "Academic", "Arts"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isLoading, setIsLoading] = useState(true);

  // Featured post is the most recent one marked as featured
  const featuredPost = blogPosts.find(post => post.featured);
  
  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter posts based on category and search term
    let result = blogPosts;
    
    if (selectedCategory !== "All") {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.author.toLowerCase().includes(term) ||
        post.category.toLowerCase().includes(term)
      );
    }
    
    setFilteredPosts(result);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>School Blog - Stay Updated with School News and Events</title>
        <meta name="description" content="Read the latest news, announcements, and stories from our school community." />
      </Head>

      {/* Hero Section with Animation */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10 animate-pulse"></div>
        <div className="container mx-auto px-4 py-16 sm:py-24 relative z-10">
          <div 
            className="text-center opacity-0 translate-y-4 animate-fade-in-up"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-4">School Blog</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news, events, and stories from our vibrant school community.
            </p>
          </div>
        </div>
        
        {/* Animated decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-8 w-36 h-36 bg-purple-400 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-pink-400 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="inline-block w-8 h-1 bg-blue-600 mr-3"></span>
            Featured Article
          </h2>
          
          <div 
            className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 opacity-0 scale-95 animate-fade-in"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <div className="flex items-center mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="flex items-center text-xs text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {featuredPost.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">{featuredPost.author}</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {featuredPost.date}
                      </p>
                    </div>
                  </div>
                  
                  <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <span className="inline-block w-8 h-1 bg-blue-600 mr-3"></span>
          Latest Articles
        </h2>
        
        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-4 w-1/4"></div>
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded mb-6 w-3/4"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <div className="h-3 bg-gray-200 rounded w-20 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={post.id}
                className={`bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 group opacity-0 translate-y-4 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-blue-600 bg-opacity-90 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                        {post.author.charAt(0)}
                      </div>
                      <div className="ml-2">
                        <p className="text-xs font-medium text-gray-800">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    
                    <span className="text-xs text-gray-500 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center text-blue-600 font-medium text-sm group-hover:font-semibold transition-all"
                  >
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="opacity-0 translate-y-4 animate-fade-in-up">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-800 mb-2">No results found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
        
        {/* Newsletter Subscription */}
        <div 
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white opacity-0 translate-y-4 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-blue-100">
                Get the latest updates, news and event information delivered directly to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to top button with scroll animation */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}