const ApplicationFormSection = () => {
    const [formStep, setFormStep] = useState(1);
    const totalSteps = 3;
    
    return (
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
    );
  };
  
  // Additional Mobile Improvement Features
  
  // 1. Sticky Mobile Navigation
  const StickyMobileNav = () => {
    return (
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
    );
  };
  