// components/ResultsPage.jsx
import React from 'react'
import { useState, useEffect } from 'react';
import { Download, Printer, Search, FileText, CheckCircle, Award, ChevronDown, ChevronUp, Loader } from 'lucide-react';

export default function Results() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [resultData, setResultData] = useState(null);
  const [activeTab, setActiveTab] = useState('results');
  const [expandedSubject, setExpandedSubject] = useState(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });
    
    const section = document.querySelector('#results-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const classes = [
    { id: 'class-1', name: 'Class 1' },
    { id: 'class-2', name: 'Class 2' },
    { id: 'class-3', name: 'Class 3' },
    { id: 'class-4', name: 'Class 4' },
    { id: 'class-5', name: 'Class 5' },
    { id: 'class-6', name: 'Class 6' },
    { id: 'class-7', name: 'Class 7' },
    { id: 'class-8', name: 'Class 8' },
    { id: 'class-9', name: 'Class 9' },
    { id: 'class-10', name: 'Class 10' },
    { id: 'class-11', name: 'Class 11' },
    { id: 'class-12', name: 'Class 12' },
  ];

  // Mock result data - in a real application, this would come from an API
  const mockResultData = {
    studentInfo: {
      name: "Aryan Kumar",
      rollNumber: "1923045",
      class: "Class 10",
      section: "A",
      admissionNumber: "ADM20211045",
      academicYear: "2024-2025",
      examType: "Annual Examination",
      dob: "15-08-2009",
      fatherName: "Rajesh Kumar",
      motherName: "Sunita Devi"
    },
    results: [
      { subject: "Mathematics", marks: 92, totalMarks: 100, grade: "A+", remarks: "Excellent" },
      { subject: "Science", marks: 88, totalMarks: 100, grade: "A", remarks: "Very Good" },
      { subject: "English", marks: 85, totalMarks: 100, grade: "A", remarks: "Very Good" },
      { subject: "Hindi", marks: 90, totalMarks: 100, grade: "A+", remarks: "Excellent" },
      { subject: "Social Studies", marks: 82, totalMarks: 100, grade: "A", remarks: "Very Good" },
      { subject: "Computer Science", marks: 95, totalMarks: 100, grade: "A+", remarks: "Outstanding" }
    ],
    aggregate: {
      totalMarks: 532,
      totalOutOf: 600,
      percentage: 88.67,
      grade: "A+",
      rank: 3,
      resultStatus: "PASS"
    },
    attendance: {
      present: 230,
      totalDays: 240,
      percentage: 95.83
    },
    principalRemarks: "An excellent student with consistent performance. Shows great potential in academics and extracurricular activities."
  };

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResultData(mockResultData);
      setSearchPerformed(true);
      setIsLoading(false);
    }, 1500);
  };

  const handleClearSearch = () => {
    setSelectedClass('');
    setRollNumber('');
    setStudentName('');
    setSearchPerformed(false);
    setResultData(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const downloadResult = () => {
    // In a real application, this would generate and download a PDF
    alert("Downloading result as PDF...");
  };

  const downloadCertificate = (type) => {
    // In a real application, this would generate and download a specific certificate
    alert(`Downloading ${type} certificate...`);
  };

  const toggleSubjectDetails = (subject) => {
    if (expandedSubject === subject) {
      setExpandedSubject(null);
    } else {
      setExpandedSubject(subject);
    }
  };

  return (
    <section 
      id="results-section" 
      className={`py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-blue-50 to-purple-100 min-h-screen ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with 3D effect */}
        <div className="relative mb-12 transform perspective-1000">
          <div className={`transform ${isVisible ? 'translate-z-0 animate-float' : 'translate-z-12'} transition-all duration-1000`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-indigo-800 mb-4">
              Student <span className="text-purple-600">Results Portal</span>
            </h2>
            <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Access your academic results, download certificates, and print mark sheets all in one place.
            </p>
          </div>
        </div>

        {/* Search Panel */}
        <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">Find Your Results</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              >
                <option value="">Select Class</option>
                {classes.map(cls => (
                  <option key={cls.id} value={cls.id}>{cls.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
              <input 
                type="text" 
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="Enter your roll number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Student Name (Optional)</label>
              <input 
                type="text" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
            <button
              onClick={handleSearch}
              disabled={!selectedClass || !rollNumber || isLoading}
              className={`flex items-center justify-center px-6 py-3 rounded-lg font-medium text-white ${
                !selectedClass || !rollNumber || isLoading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg'
              }`}
            >
              {isLoading ? (
                <>
                  <Loader className="animate-spin w-5 h-5 mr-2" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5 mr-2" />
                  Search Results
                </>
              )}
            </button>
            
            <button
              onClick={handleClearSearch}
              className="flex items-center justify-center px-6 py-3 rounded-lg font-medium text-indigo-600 bg-indigo-100 hover:bg-indigo-200 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        {/* Results Display */}
        {searchPerformed && !isLoading && resultData && (
          <div 
            className={`bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 ${
              searchPerformed ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            {/* Navigation Tabs */}
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('results')}
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'results'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                Result Details
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`flex-1 py-4 text-center font-medium transition-colors ${
                  activeTab === 'certificates'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-gray-600 hover:text-indigo-500'
                }`}
              >
                Certificates
              </button>
            </div>

            {/* Results Content */}
            {activeTab === 'results' && (
              <div className="p-6 md:p-8">
                {/* Actions Bar */}
                <div className="flex flex-wrap gap-4 justify-end mb-6 print:hidden">
                  <button
                    onClick={downloadResult}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </button>
                  <button
                    onClick={handlePrint}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                  >
                    <Printer className="w-4 h-4 mr-2" />
                    Print
                  </button>
                </div>

                {/* Student Details */}
                <div className="mb-8 border-b border-gray-200 pb-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{resultData.studentInfo.name}</h3>
                      <p className="text-gray-600">Roll Number: {resultData.studentInfo.rollNumber}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-block px-4 py-2 rounded-lg font-bold ${
                        resultData.aggregate.resultStatus === 'PASS' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {resultData.aggregate.resultStatus}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Class & Section</p>
                      <p className="font-medium">{resultData.studentInfo.class} - {resultData.studentInfo.section}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Admission Number</p>
                      <p className="font-medium">{resultData.studentInfo.admissionNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Academic Year</p>
                      <p className="font-medium">{resultData.studentInfo.academicYear}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Examination</p>
                      <p className="font-medium">{resultData.studentInfo.examType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="font-medium">{resultData.studentInfo.dob}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Parents</p>
                      <p className="font-medium">{resultData.studentInfo.fatherName} / {resultData.studentInfo.motherName}</p>
                    </div>
                  </div>
                </div>

                {/* Results Summary */}
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Performance Summary</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Overall Result */}
                    <div className="bg-indigo-50 rounded-xl p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h5 className="font-medium text-indigo-800">Overall Result</h5>
                        <span className={`text-sm px-3 py-1 rounded-full ${
                          resultData.aggregate.percentage >= 85 
                            ? 'bg-green-100 text-green-800' 
                            : resultData.aggregate.percentage >= 70
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {resultData.aggregate.grade}
                        </span>
                      </div>

                      <div className="flex items-end mb-3">
                        <span className="text-3xl font-bold text-indigo-700">{resultData.aggregate.percentage}%</span>
                        <span className="ml-2 text-gray-600 mb-1">({resultData.aggregate.totalMarks}/{resultData.aggregate.totalOutOf})</span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div 
                          className="bg-indigo-600 h-2.5 rounded-full" 
                          style={{ width: `${resultData.aggregate.percentage}%` }}
                        ></div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Class Rank: #{resultData.aggregate.rank}</span>
                        <span>{resultData.aggregate.percentage}% Score</span>
                      </div>
                    </div>

                    {/* Attendance */}
                    <div className="bg-purple-50 rounded-xl p-6">
                      <h5 className="font-medium text-purple-800 mb-4">Attendance Record</h5>

                      <div className="flex items-end mb-3">
                        <span className="text-3xl font-bold text-purple-700">{resultData.attendance.percentage}%</span>
                        <span className="ml-2 text-gray-600 mb-1">({resultData.attendance.present}/{resultData.attendance.totalDays} days)</span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                        <div 
                          className="bg-purple-600 h-2.5 rounded-full" 
                          style={{ width: `${resultData.attendance.percentage}%` }}
                        ></div>
                      </div>

                      <div className="text-sm text-gray-600">
                        {resultData.attendance.percentage >= 95 
                          ? 'Excellent attendance record!'
                          : resultData.attendance.percentage >= 90
                          ? 'Good attendance record.'
                          : 'Attendance needs improvement.'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subject-wise Results */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">Subject-wise Performance</h4>
                  
                  <div className="overflow-hidden bg-gray-50 rounded-xl">
                    <div className="grid grid-cols-12 bg-gray-100 py-3 px-4 font-medium text-gray-700">
                      <div className="col-span-5">Subject</div>
                      <div className="col-span-2 text-center">Marks</div>
                      <div className="col-span-2 text-center">Grade</div>
                      <div className="col-span-2 text-center">Remarks</div>
                      <div className="col-span-1 text-center"></div>
                    </div>
                    
                    {resultData.results.map((subject, index) => (
                      <div key={index} className="border-t border-gray-200">
                        <div 
                          className={`grid grid-cols-12 py-3 px-4 hover:bg-gray-50 transition-colors ${
                            expandedSubject === subject.subject ? 'bg-indigo-50' : ''
                          }`}
                        >
                          <div className="col-span-5 font-medium">{subject.subject}</div>
                          <div className="col-span-2 text-center">{subject.marks}/{subject.totalMarks}</div>
                          <div className="col-span-2 text-center">
                            <span className={`inline-block px-2 py-1 rounded-md text-xs font-medium ${
                              subject.grade === 'A+' ? 'bg-green-100 text-green-800' :
                              subject.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                              subject.grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {subject.grade}
                            </span>
                          </div>
                          <div className="col-span-2 text-center text-gray-700">{subject.remarks}</div>
                          <div className="col-span-1 text-center">
                            <button 
                              onClick={() => toggleSubjectDetails(subject.subject)}
                              className="text-indigo-600 hover:text-indigo-800"
                            >
                              {expandedSubject === subject.subject ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        {/* Expanded Subject Details */}
                        {expandedSubject === subject.subject && (
                          <div className="bg-indigo-50 px-4 py-3 border-t border-indigo-100">
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <h6 className="font-medium text-gray-700 mb-2">Performance Graph</h6>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                  <div className="h-24 flex items-end">
                                    <div className="w-1/3 h-full flex flex-col justify-end items-center text-sm">
                                      <div className="text-xs text-gray-500 mb-1">Class Avg</div>
                                      <div 
                                        className="w-8 bg-gray-300 rounded-t"
                                        style={{ height: `${75}%` }}
                                      ></div>
                                      <div className="mt-1 font-medium">75%</div>
                                    </div>
                                    <div className="w-1/3 h-full flex flex-col justify-end items-center text-sm">
                                      <div className="text-xs text-gray-500 mb-1">Highest</div>
                                      <div 
                                        className="w-8 bg-green-300 rounded-t"
                                        style={{ height: `${96}%` }}
                                      ></div>
                                      <div className="mt-1 font-medium">96%</div>
                                    </div>
                                    <div className="w-1/3 h-full flex flex-col justify-end items-center text-sm">
                                      <div className="text-xs text-gray-500 mb-1">You</div>
                                      <div 
                                        className="w-8 bg-indigo-500 rounded-t"
                                        style={{ height: `${(subject.marks/subject.totalMarks) * 100}%` }}
                                      ></div>
                                      <div className="mt-1 font-medium">{(subject.marks/subject.totalMarks) * 100}%</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h6 className="font-medium text-gray-700 mb-2">Teacher's Comments</h6>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                  <p className="text-gray-700">
                                    {subject.remarks === 'Excellent' 
                                      ? 'Outstanding performance! Shows exceptional understanding of the subject concepts.'
                                      : subject.remarks === 'Very Good'
                                      ? 'Very good grasp of concepts. Keep up the good work and practice more complex problems.'
                                      : subject.remarks === 'Outstanding'
                                      ? 'Exceptional work! Demonstrates superior knowledge and application skills.'
                                      : 'Good effort. Focus on improving fundamentals for better results.'}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Principal's Remarks */}
                <div className="mb-6 bg-blue-50 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Principal's Remarks</h4>
                  <p className="text-gray-700">{resultData.principalRemarks}</p>
                </div>

                {/* Footer */}
                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-500">
                  <p className="mb-2">This is a computer-generated result. No signature required.</p>
                  <p>© 2025 School Name. All Rights Reserved.</p>
                </div>
              </div>
            )}

            {/* Certificates Content */}
            {activeTab === 'certificates' && (
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Certificates</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Migration Certificate */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                            <FileText className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">Migration Certificate</h4>
                            <p className="text-gray-600">Required for admission to other institutions</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-sm text-green-600">Available for download</span>
                        </div>
                        <button
                          onClick={() => downloadCertificate('migration')}
                          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Passing Certificate */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                            <Award className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">Passing Certificate</h4>
                            <p className="text-gray-600">Proof of passing examination</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-sm text-green-600">Available for download</span>
                        </div>
                        <button
                          onClick={() => downloadCertificate('passing')}
                          className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Character Certificate */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                            <CheckCircle className="w-6 h-6 text-green-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">Character Certificate</h4>
                            <p className="text-gray-600">Certifies good conduct and behavior</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-sm text-green-600">Available for download</span>
                        </div>
                        <button
                          onClick={() => downloadCertificate('character')}
                          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Provisional Certificate */}
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                            <FileText className="w-6 h-6 text-yellow-600" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-800">Provisional Certificate</h4>
                            <p className="text-gray-600">Temporary certification of completion</p>
                            </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <span className="text-sm text-green-600">Available for download</span>
                        </div>
                        <button
                          onClick={() => downloadCertificate('provisional')}
                          className="flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificate Guidelines */}
                <div className="mt-8 bg-blue-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">Certificate Guidelines</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>All certificates are digitally signed and contain a unique verification code.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Downloaded certificates are valid for official purposes and admissions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>For physical copies with seal and signature, please visit the school administrative office.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>If you need any assistance with certificates, please contact the examination department.</span>
                    </li>
                  </ul>
                </div>

                {/* Support Information */}
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">Need Help?</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 mb-2">Technical Support</h5>
                      <p className="text-gray-600 mb-2">Having issues downloading certificates?</p>
                      <p className="text-indigo-600">support@schoolname.edu</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <h5 className="font-medium text-gray-800 mb-2">Academic Queries</h5>
                      <p className="text-gray-600 mb-2">Questions about your results or marks?</p>
                      <p className="text-indigo-600">academics@schoolname.edu</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* No Results Found State */}
        {searchPerformed && !isLoading && !resultData && (
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No Results Found</h3>
              <p className="text-gray-600">We couldn't find any results matching your search criteria.</p>
            </div>
            <div className="max-w-md mx-auto">
              <p className="text-gray-700 mb-6">Please verify your class and roll number and try again. If you continue to experience issues, please contact the school administration.</p>
              <button
                onClick={handleClearSearch}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Class Results Section */}
        <div className={`mt-12 bg-white rounded-2xl shadow-xl p-6 md:p-8 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">Class Results & Merit List</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {classes.slice(0, 6).map((cls, index) => (
              <div 
                key={cls.id}
                className={`bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300 ${
                  isVisible ? `animate-fade-slide-up delay-${index * 100}` : 'opacity-0'
                }`}
              >
                <div className="p-6">
                  <h4 className="text-lg font-bold text-indigo-800 mb-2">{cls.name} Results</h4>
                  <p className="text-gray-600 mb-4">Annual Examination 2024-2025</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-purple-600">Available Now</span>
                    <button 
                      onClick={() => alert(`Viewing ${cls.name} Results`)}
                      className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <button 
              onClick={() => alert("Viewing all class results")}
              className="px-6 py-3 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
            >
              View All Class Results
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={`mt-12 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-indigo-800 mb-6">Frequently Asked Questions</h3>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">How do I download my result?</h4>
              <p className="text-gray-600">Enter your class and roll number in the search form above, then click on "Search Results". Once your result is displayed, you can use the "Download PDF" button to save your result.</p>
            </div>
            
            <div className="border-b border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">What certificates are available for download?</h4>
              <p className="text-gray-600">After searching for your result, navigate to the "Certificates" tab where you can download Migration Certificate, Passing Certificate, Character Certificate, and Provisional Certificate.</p>
            </div>
            
            <div className="border-b border-gray-200 p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">How can I get a physical copy of my certificates?</h4>
              <p className="text-gray-600">While digital certificates are available for download, you can visit the school administrative office with your ID proof to get physically signed and stamped certificates.</p>
            </div>
            
            <div className="p-6">
              <h4 className="text-lg font-medium text-gray-800 mb-2">I found an error in my result. What should I do?</h4>
              <p className="text-gray-600">If you notice any discrepancy in your result, please contact the examination department immediately with details of the error. You can reach them at academics@schoolname.edu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add these CSS animations to your global styles
const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.perspective-1000 {
  perspective: 1000px;
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

.delay-500 {
  animation-delay: 500ms;
}

@media print {
  .print\\:hidden {
    display: none;
  }
}
`;