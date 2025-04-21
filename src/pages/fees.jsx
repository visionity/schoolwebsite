// components/FeesPage.jsx
import { useState, useEffect, useRef } from 'react';
import { 
  CreditCard, 
  Calendar, 
  DollarSign, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Clock,
  Receipt,
  Printer,
  Award,
  Shield
} from 'lucide-react';

export default function Fees() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('structure');
  const [paymentMethod, setPaymentMethod] = useState('online');
  const [studentId, setStudentId] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [feeDetails, setFeeDetails] = useState(null);
  const [expandedFeeType, setExpandedFeeType] = useState(null);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCalculator, setCurrentCalculator] = useState('tuition');
  const [hoverCard, setHoverCard] = useState(null);
  
  const paymentFormRef = useRef(null);
  const feesSectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    if (feesSectionRef.current) observer.observe(feesSectionRef.current);
    
    return () => {
      if (feesSectionRef.current) observer.unobserve(feesSectionRef.current);
    };
  }, []);

  const feeStructure = [
    {
      id: 'tuition',
      name: 'Tuition Fees',
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
      description: 'Core academic instruction and classroom learning',
      classes: [
        { name: 'Nursery - KG', annual: '₹45,000', quarterly: '₹11,250', monthly: '₹3,750' },
        { name: 'Class 1 - 5', annual: '₹55,000', quarterly: '₹13,750', monthly: '₹4,580' },
        { name: 'Class 6 - 8', annual: '₹65,000', quarterly: '₹16,250', monthly: '₹5,420' },
        { name: 'Class 9 - 10', annual: '₹75,000', quarterly: '₹18,750', monthly: '₹6,250' },
        { name: 'Class 11 - 12', annual: '₹85,000', quarterly: '₹21,250', monthly: '₹7,080' }
      ]
    },
    {
      id: 'development',
      name: 'Development Fees',
      icon: <Award className="w-6 h-6 text-purple-500" />,
      description: 'Infrastructure and facilities enhancement',
      classes: [
        { name: 'Nursery - KG', annual: '₹15,000', quarterly: '₹3,750', monthly: '₹1,250' },
        { name: 'Class 1 - 5', annual: '₹18,000', quarterly: '₹4,500', monthly: '₹1,500' },
        { name: 'Class 6 - 8', annual: '₹22,000', quarterly: '₹5,500', monthly: '₹1,830' },
        { name: 'Class 9 - 10', annual: '₹25,000', quarterly: '₹6,250', monthly: '₹2,080' },
        { name: 'Class 11 - 12', annual: '₹30,000', quarterly: '₹7,500', monthly: '₹2,500' }
      ]
    },
    {
      id: 'technology',
      name: 'Technology Fees',
      icon: <Shield className="w-6 h-6 text-blue-500" />,
      description: 'Digital learning resources and computer labs',
      classes: [
        { name: 'Nursery - KG', annual: '₹8,000', quarterly: '₹2,000', monthly: '₹670' },
        { name: 'Class 1 - 5', annual: '₹12,000', quarterly: '₹3,000', monthly: '₹1,000' },
        { name: 'Class 6 - 8', annual: '₹15,000', quarterly: '₹3,750', monthly: '₹1,250' },
        { name: 'Class 9 - 10', annual: '₹18,000', quarterly: '₹4,500', monthly: '₹1,500' },
        { name: 'Class 11 - 12', annual: '₹24,000', quarterly: '₹6,000', monthly: '₹2,000' }
      ]
    },
    {
      id: 'activities',
      name: 'Extra-Curricular',
      icon: <Calendar className="w-6 h-6 text-amber-500" />,
      description: 'Sports, arts, and extracurricular programs',
      classes: [
        { name: 'Nursery - KG', annual: '₹12,000', quarterly: '₹3,000', monthly: '₹1,000' },
        { name: 'Class 1 - 5', annual: '₹15,000', quarterly: '₹3,750', monthly: '₹1,250' },
        { name: 'Class 6 - 8', annual: '₹18,000', quarterly: '₹4,500', monthly: '₹1,500' },
        { name: 'Class 9 - 10', annual: '₹20,000', quarterly: '₹5,000', monthly: '₹1,670' },
        { name: 'Class 11 - 12', annual: '₹22,000', quarterly: '₹5,500', monthly: '₹1,830' }
      ]
    }
  ];

  const paymentSchedule = [
    { id: 1, term: 'First Quarter', dueDate: 'April 15, 2025', status: 'paid' },
    { id: 2, term: 'Second Quarter', dueDate: 'July 15, 2025', status: 'upcoming' },
    { id: 3, term: 'Third Quarter', dueDate: 'October 15, 2025', status: 'upcoming' },
    { id: 4, term: 'Fourth Quarter', dueDate: 'January 15, 2026', status: 'upcoming' }
  ];

  const scholarships = [
    { 
      id: 1, 
      name: 'Academic Excellence Scholarship', 
      discount: '25% on Tuition Fees', 
      eligibility: 'Students with 90% or above in previous academic year', 
      applicationDate: 'May 1 - June 15, 2025' 
    },
    { 
      id: 2, 
      name: 'Sports Achievement Scholarship', 
      discount: '20% on Tuition Fees', 
      eligibility: 'National or state level sports representation', 
      applicationDate: 'May 1 - June 15, 2025' 
    },
    { 
      id: 3, 
      name: 'Financial Need-based Support', 
      discount: 'Up to 50% on Total Fees', 
      eligibility: 'Based on family income and financial need assessment', 
      applicationDate: 'April 15 - May 30, 2025' 
    },
    { 
      id: 4, 
      name: 'Sibling Discount', 
      discount: '10% for second child, 15% for third child', 
      eligibility: 'Families with multiple children enrolled in the school', 
      applicationDate: 'During admission or at any time' 
    }
  ];

  // Mock payment history data
  const paymentHistory = [
    { id: 'TXN78901234', date: 'February 15, 2025', amount: '₹21,250', type: 'Tuition Fee - Q4', method: 'Online Banking', status: 'Success' },
    { id: 'TXN78901200', date: 'November 12, 2024', amount: '₹21,250', type: 'Tuition Fee - Q3', method: 'Credit Card', status: 'Success' },
    { id: 'TXN78900234', date: 'July 18, 2024', amount: '₹21,250', type: 'Tuition Fee - Q2', method: 'Online Banking', status: 'Success' },
    { id: 'TXN78001234', date: 'April 10, 2024', amount: '₹21,250', type: 'Tuition Fee - Q1', method: 'Credit Card', status: 'Success' }
  ];

  // Mock student fee details
  const mockFeeDetails = {
    studentInfo: {
      name: "Aarav Singh",
      class: "Class 11-A",
      admissionNumber: "ADM2023-5689",
      parentName: "Rajiv Singh",
      contactNumber: "+91 98765 43210",
      email: "rajiv.singh@example.com"
    },
    currentDues: {
      tuition: "₹21,250",
      development: "₹7,500",
      technology: "₹6,000",
      extraCurricular: "₹5,500",
      totalDue: "₹40,250"
    },
    dueDate: "April 15, 2025",
    paymentStatus: "Pending",
    scholarship: "10% Academic Merit Scholarship Applied",
    paymentHistory: paymentHistory
  };

  const handleSearch = () => {
    if (!studentId) return;
    
    setIsSearching(true);
    // Simulate API call
    setTimeout(() => {
      setFeeDetails(mockFeeDetails);
      setIsSearching(false);
    }, 1500);
  };

  const handlePayNow = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setShowPaymentSuccess(true);
      setTimeout(() => {
        setShowPaymentSuccess(false);
      }, 5000);
      paymentFormRef.current.reset();
    }, 2000);
  };

  const toggleFeeType = (id) => {
    if (expandedFeeType === id) {
      setExpandedFeeType(null);
    } else {
      setExpandedFeeType(id);
    }
  };

  const openCalculator = (type) => {
    setCurrentCalculator(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section 
      ref={feesSectionRef}
      className={`py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-teal-50 to-emerald-50 min-h-screen ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with 3D effect */}
        <div className="relative mb-12 transform perspective-1000">
          <div className={`transform ${isVisible ? 'translate-z-0 animate-float' : 'translate-z-12'} transition-all duration-1000`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-emerald-800 mb-4">
              Fees & <span className="text-teal-600">Financial Information</span>
            </h2>
            <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Transparent fee structure, convenient payment options, and financial assistance programs for our students.
            </p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-md flex space-x-1">
            {[
              { id: 'structure', label: 'Fee Structure' },
              { id: 'payment', label: 'Make Payment' },
              { id: 'status', label: 'Payment Status' },
              { id: 'scholarship', label: 'Scholarships' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white shadow'
                    : 'text-emerald-600 hover:bg-emerald-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fee Structure Tab */}
        <div className={`${activeTab === 'structure' ? 'block' : 'hidden'}`}>
          <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 ${
            isVisible && activeTab === 'structure' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex justify-between items-center mb-8 flex-wrap">
              <h3 className="text-2xl font-bold text-gray-800">Academic Year 2025-26</h3>
              
              <div className="flex space-x-2 mt-4 sm:mt-0">
                <button className="flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </button>
                <button className="flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </button>
              </div>
            </div>

            {/* Interactive Calculator Card */}
            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h4 className="text-lg font-bold text-emerald-800">Fee Calculator</h4>
                  <p className="text-gray-700">Estimate your total fee expenses for the academic year</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => openCalculator('tuition')} className="px-4 py-2 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                    Tuition Calculator
                  </button>
                  <button onClick={() => openCalculator('scholarship')} className="px-4 py-2 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors">
                    Scholarship Estimator
                  </button>
                </div>
              </div>
            </div>

            {/* Fee Structure Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {feeStructure.map((feeType) => (
                <div 
                  key={feeType.id}
                  className={`bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 ${
                    expandedFeeType === feeType.id ? 'ring-2 ring-emerald-500' : ''
                  }`}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleFeeType(feeType.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                          {feeType.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-gray-800">{feeType.name}</h4>
                          <p className="text-gray-600 text-sm">{feeType.description}</p>
                        </div>
                      </div>
                      <div>
                        {expandedFeeType === feeType.id ? (
                          <ChevronUp className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-emerald-600" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded fee details */}
                  {expandedFeeType === feeType.id && (
                    <div className="px-6 pb-6 pt-0">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="py-3 pr-4 text-sm font-medium text-gray-500">Class</th>
                              <th className="py-3 px-4 text-sm font-medium text-gray-500">Annual</th>
                              <th className="py-3 px-4 text-sm font-medium text-gray-500">Quarterly</th>
                              <th className="py-3 pl-4 text-sm font-medium text-gray-500">Monthly</th>
                            </tr>
                          </thead>
                          <tbody>
                            {feeType.classes.map((cls, idx) => (
                              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                                <td className="py-3 pr-4 font-medium">{cls.name}</td>
                                <td className="py-3 px-4">{cls.annual}</td>
                                <td className="py-3 px-4">{cls.quarterly}</td>
                                <td className="py-3 pl-4">{cls.monthly}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Payment Schedule */}
            <div className="mt-10">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Payment Schedule</h3>
              
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
                <div className="relative">
                  {/* Horizontal timeline track */}
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
                  
                  <div className="flex justify-between py-10 px-4 relative z-10">
                    {paymentSchedule.map((period, index) => (
                      <div 
                        key={period.id} 
                        className="flex flex-col items-center w-1/4"
                      >
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                          period.status === 'paid' 
                            ? 'bg-emerald-500 text-white' 
                            : 'bg-white border-2 border-gray-300 text-gray-500'
                        }`}>
                          {period.status === 'paid' ? (
                            <CheckCircle className="w-5 h-5" />
                          ) : (
                            <Clock className="w-5 h-5" />
                          )}
                        </div>
                        <h5 className="font-medium text-center text-gray-800 mb-1">{period.term}</h5>
                        <p className="text-xs text-center text-gray-500">{period.dueDate}</p>
                        <span className={`mt-2 text-xs px-2 py-1 rounded-full font-medium ${
                          period.status === 'paid' 
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {period.status === 'paid' ? 'Paid' : 'Upcoming'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Fees & Policies */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Additional Fees</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Examination Fee</p>
                      <p className="text-sm text-gray-600">₹2,000 per term (payable before each term examination)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Transport Fee</p>
                      <p className="text-sm text-gray-600">₹2,500 - ₹4,500 per month (based on distance)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Uniform & Books</p>
                      <p className="text-sm text-gray-600">Variable cost (details available at school store)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Fee Policies</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Late Payment</p>
                      <p className="text-sm text-gray-600">2% penalty on outstanding amount after due date</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Refund Policy</p>
                      <p className="text-sm text-gray-600">No refund of admission & registration fees under any circumstances</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-0.5 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Mode of Payment</p>
                      <p className="text-sm text-gray-600">Online payment, Bank transfer, Cheque/DD in favor of school</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Make Payment Tab */}
        <div className={`${activeTab === 'payment' ? 'block' : 'hidden'}`}>
          <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 ${
            isVisible && activeTab === 'payment' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Pay School Fees</h3>
            
            {/* Payment success message */}
            {showPaymentSuccess && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <div>
                  <p className="font-medium text-green-800">Payment Successful!</p>
                  <p className="text-green-700">Your payment has been processed. A receipt has been sent to your email.</p>
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Payment Form */}
              <div className="lg:col-span-3">
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Student Information</h4>
                  <form ref={paymentFormRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Student Full Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admission/Roll No.</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="e.g. ADM2023-1234"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                          <option value="">Select Class</option>
                          <option value="nursery">Nursery</option>
                          <option value="kg">KG</option>
                          <option value="1">Class 1</option>
                          <option value="2">Class 2</option>
                          <option value="3">Class 3</option>
                          <option value="4">Class 4</option>
                          <option value="5">Class 5</option>
                          <option value="6">Class 6</option>
                          <option value="7">Class 7</option>
                          <option value="8">Class 8</option>
                          <option value="9">Class 9</option>
                          <option value="10">Class 10</option>
                          <option value="11">Class 11</option>
                          <option value="12">Class 12</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Section</label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                          <option value="">Select Section</option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="C">C</option>
                          <option value="D">D</option>
                        </select>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-gray-800 mb-4">Payment Details</h4>
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Fee Type</label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                            <option value="">Select Fee Type</option>
                            <option value="tuition">Tuition Fee</option>
                            <option value="development">Development Fee</option>
                            <option value="technology">Technology Fee</option>
                            <option value="extraCurricular">Extra-Curricular Fee</option>
                            <option value="all">All Fees (Quarterly)</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Term</label>
                          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                            <option value="">Select Term</option>
                            <option value="q1">Quarter 1 (April-June)</option>
                            <option value="q2">Quarter 2 (July-September)</option>
                            <option value="q3">Quarter 3 (October-December)</option>
                            <option value="q4">Quarter 4 (January-March)</option>
                            <option value="annual">Annual (Full Year)</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Amount (₹)</label>
                        <input 
                          type="text" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          placeholder="Enter amount or select from dropdown above"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-gray-800 mb-4">Payment Method</h4>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('online')}
                          className={`flex items-center justify-center px-4 py-3 rounded-lg border ${
                            paymentMethod === 'online'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <CreditCard className="w-5 h-5 mr-2" />
                          Online Payment
                        </button>
                        <button
                          type="button"
                          onClick={() => setPaymentMethod('offline')}
                          className={`flex items-center justify-center px-4 py-3 rounded-lg border ${
                            paymentMethod === 'offline'
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          <Receipt className="w-5 h-5 mr-2" />
                          Offline Payment
                        </button>
                      </div>

                      {paymentMethod === 'online' && (
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                          <h5 className="font-medium mb-3">Online Payment Options</h5>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <input
                                id="card"
                                name="paymentType"
                                type="radio"
                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                                defaultChecked
                              />
                              <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                                Credit/Debit Card
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="netbanking"
                                name="paymentType"
                                type="radio"
                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                              />
                              <label htmlFor="netbanking" className="ml-3 block text-sm font-medium text-gray-700">
                                Net Banking
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="upi"
                                name="paymentType"
                                type="radio"
                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                              />
                              <label htmlFor="upi" className="ml-3 block text-sm font-medium text-gray-700">
                                UPI
                              </label>
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === 'offline' && (
                        <div className="bg-white rounded-lg border border-gray-200 p-4">
                          <h5 className="font-medium mb-3">Offline Payment Instructions</h5>
                          <p className="text-sm text-gray-600 mb-3">
                            Please make payment via Cheque/DD in favor of "Green Valley School" and submit at the school accounts office.
                          </p>
                          <div className="bg-gray-50 rounded p-3">
                            <p className="text-sm font-medium">Bank Details:</p>
                            <p className="text-sm">Account Name: Green Valley School</p>
                            <p className="text-sm">Account Number: 1234567890</p>
                            <p className="text-sm">IFSC Code: ABCD0001234</p>
                            <p className="text-sm">Bank: State Bank of India</p>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
                      onClick={handlePayNow}
                    >
                      Pay Now
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Payment Summary */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-6">
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Payment Summary</h4>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Tuition Fee</span>
                      <span className="font-medium">₹21,250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Development Fee</span>
                      <span className="font-medium">₹7,500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Technology Fee</span>
                      <span className="font-medium">₹6,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Extra-Curricular Fee</span>
                      <span className="font-medium">₹5,500</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="font-medium text-gray-800">Total Amount</span>
                      <span className="font-bold text-lg">₹40,250</span>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-emerald-800">Payment Term</p>
                        <p className="text-sm text-emerald-700">Quarter 1 (April-June 2025)</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-sm text-gray-700">Secure payment gateway</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-sm text-gray-700">Instant digital receipt</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      <span className="text-sm text-gray-700">24/7 payment support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Status Tab */}
        <div className={`${activeTab === 'status' ? 'block' : 'hidden'}`}>
          <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 ${
            isVisible && activeTab === 'status' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Check Payment Status</h3>
            
            <div className="bg-emerald-50 rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-2/3 mb-4 md:mb-0">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Student ID / Admission Number</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      value={studentId}
                      onChange={e => setStudentId(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter student ID (e.g., ADM2023-5689)"
                    />
                    <button 
                      onClick={handleSearch}
                      className="px-5 py-2 bg-emerald-600 text-white rounded-r-lg hover:bg-emerald-700 transition-colors flex items-center"
                      disabled={isSearching}
                    >
                      {isSearching ? (
                        <span>Searching...</span>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Search
                        </>
                      )}
                    </button>
                  </div>
                </div>
                <div className="md:ml-4 w-full md:w-1/3">
                  <p className="text-sm text-emerald-700 text-center md:text-left">
                    Enter the student ID or admission number to check fee payment status and history.
                  </p>
                </div>
              </div>
            </div>
            
            {feeDetails && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-xl font-bold text-gray-800">Fee Details</h4>
                  <button className="flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
                    <Printer className="w-4 h-4 mr-2" />
                    Print Statement
                  </button>
                </div>
                
                {/* Student Information */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Student Name</p>
                      <p className="font-medium">{feeDetails.studentInfo.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Class</p>
                      <p className="font-medium">{feeDetails.studentInfo.class}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Admission Number</p>
                      <p className="font-medium">{feeDetails.studentInfo.admissionNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Parent Name</p>
                      <p className="font-medium">{feeDetails.studentInfo.parentName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Contact Number</p>
                      <p className="font-medium">{feeDetails.studentInfo.contactNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="font-medium">{feeDetails.studentInfo.email}</p>
                    </div>
                  </div>
                </div>
                
                {/* Current Dues */}
                <div className="mb-8">
                  <h5 className="text-lg font-medium text-gray-800 mb-3">Current Dues</h5>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-gray-500">Due Date</p>
                          <p className="font-medium text-gray-800">{feeDetails.dueDate}</p>
                        </div>
                        <div>
                          <span className="px-3 py-1 rounded-full text-sm font-medium bg-amber-100 text-amber-700">
                            {feeDetails.paymentStatus}
                          </span>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Tuition Fee</span>
                          <span className="font-medium">{feeDetails.currentDues.tuition}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Development Fee</span>
                          <span className="font-medium">{feeDetails.currentDues.development}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Technology Fee</span>
                          <span className="font-medium">{feeDetails.currentDues.technology}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Extra-Curricular Fee</span>
                          <span className="font-medium">{feeDetails.currentDues.extraCurricular}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                          <span className="font-medium text-gray-800">Total Amount</span>
                          <span className="font-bold text-lg">{feeDetails.currentDues.totalDue}</span>
                        </div>
                      </div>
                      
                      {feeDetails.scholarship && (
                        <div className="mt-4 bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-700">
                            <span className="font-medium">Note:</span> {feeDetails.scholarship}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="bg-gray-50 px-6 py-4">
                      <button className="w-full bg-emerald-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Payment History */}
                <div>
                  <h5 className="text-lg font-medium text-gray-800 mb-3">Payment History</h5>
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Transaction ID</th>
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Date</th>
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Amount</th>
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Type</th>
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Method</th>
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Status</th>
                            <th className="py-3 px-6 text-sm font-medium text-gray-500">Receipt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {feeDetails.paymentHistory.map((payment, index) => (
                            <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                              <td className="py-3 px-6 font-medium">{payment.id}</td>
                              <td className="py-3 px-6">{payment.date}</td>
                              <td className="py-3 px-6">{payment.amount}</td>
                              <td className="py-3 px-6">{payment.type}</td>
                              <td className="py-3 px-6">{payment.method}</td>
                              <td className="py-3 px-6">
                                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                  {payment.status}
                                </span>
                              </td>
                              <td className="py-3 px-6">
                                <button className="flex items-center text-emerald-600 hover:text-emerald-800">
                                  <Download className="w-4 h-4 mr-1" />
                                  <span className="text-sm">Receipt</span>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {!feeDetails && !isSearching && (
              <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h5 className="text-lg font-medium text-gray-800 mb-2">No Fee Details Found</h5>
                <p className="text-gray-600 max-w-md mx-auto">
                  Please enter a valid student ID or admission number to view fee details and payment history.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scholarships Tab */}
        <div className={`${activeTab === 'scholarship' ? 'block' : 'hidden'}`}>
          <div className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 transition-all duration-700 ${
            isVisible && activeTab === 'scholarship' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Scholarships & Financial Aid</h3>
              <p className="text-gray-600">
                We offer a range of scholarships and financial assistance programs to recognize academic excellence, 
                sports achievements, and support students from diverse economic backgrounds.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {scholarships.map((scholarship, index) => (
                <div 
                  key={scholarship.id}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                  onMouseEnter={() => setHoverCard(scholarship.id)}
                  onMouseLeave={() => setHoverCard(null)}
                >
                  <div className="flex items-start mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      index % 4 === 0 ? 'bg-emerald-100' : 
                      index % 4 === 1 ? 'bg-blue-100' : 
                      index % 4 === 2 ? 'bg-purple-100' : 'bg-amber-100'
                    }`}>
                      <Award className={`w-6 h-6 ${
                        index % 4 === 0 ? 'text-emerald-600' : 
                        index % 4 === 1 ? 'text-blue-600' : 
                        index % 4 === 2 ? 'text-purple-600' : 'text-amber-600'
                      }`} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{scholarship.name}</h4>
                      <p className={`text-lg font-semibold ${
                        index % 4 === 0 ? 'text-emerald-600' : 
                        index % 4 === 1 ? 'text-blue-600' : 
                        index % 4 === 2 ? 'text-purple-600' : 'text-amber-600'
                      }`}>
                        {scholarship.discount}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-gray-600">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Eligibility</p>
                      <p className="text-sm">{scholarship.eligibility}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">Application Period</p>
                      <p className="text-sm">{scholarship.applicationDate}</p>
                    </div>
                  </div>
                  
                  <div className={`mt-6 text-center transition-opacity duration-300 ${
                    hoverCard === scholarship.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors">
                      Learn More
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Application Process */}
            <div className="bg-gray-50 rounded-xl p-6 mb-10">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Application Process</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h5 className="text-lg font-medium text-gray-800 mb-2">Submit Application</h5>
                  <p className="text-gray-600 text-sm">
                    Complete the scholarship application form available at the school office or download from the school website.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h5 className="text-lg font-medium text-gray-800 mb-2">Document Verification</h5>
                  <p className="text-gray-600 text-sm">
                    Submit supporting documents like academic records, income certificates, or sports achievements as required.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h5 className="text-lg font-medium text-gray-800 mb-2">Selection Process</h5>
                  <p className="text-gray-600 text-sm">
                    Applications are reviewed by the scholarship committee. Shortlisted candidates may be called for an interview.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact for Financial Assistance */}
            <div className="bg-emerald-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-emerald-800 mb-4">Need Financial Assistance?</h4>
              <p className="text-emerald-700 mb-4">
                We are committed to ensuring that financial constraints don't hinder quality education. 
                Contact our financial aid office for personalized assistance.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <p className="text-sm font-medium text-emerald-800">Contact Financial Aid Office:</p>
                  <p className="text-sm text-emerald-700">Email: financial.aid@greenvalleyschool.edu</p>
                  <p className="text-sm text-emerald-700">Phone: +91 98765 43210</p>
                </div>
                
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Apply for Financial Aid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fee Calculator Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">
                  {currentCalculator === 'tuition' ? 'Tuition Fee Calculator' : 'Scholarship Estimator'}
                </h3>
                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {currentCalculator === 'tuition' ? (
                <div>
                  <p className="text-gray-600 mb-6">
                    Estimate your total fee expenses based on class, payment frequency, and applicable discounts.
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Class</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                        <option value="">Select Class</option>
                        <option value="nursery">Nursery</option>
                        <option value="kg">KG</option>
                        <option value="class1-5">Class 1-5</option>
                        <option value="class6-8">Class 6-8</option>
                        <option value="class9-10">Class 9-10</option>
                        <option value="class11-12">Class 11-12</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Payment Frequency</label>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <input
                           id="annual"
                           name="paymentFrequency"
                           type="radio"
                           className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                           defaultChecked
                         />
                         <label htmlFor="annual" className="ml-2 block text-sm text-gray-700">
                           Annual
                         </label>
                       </div>
                       <div className="flex items-center">
                         <input
                           id="quarterly"
                           name="paymentFrequency"
                           type="radio"
                           className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                         />
                         <label htmlFor="quarterly" className="ml-2 block text-sm text-gray-700">
                           Quarterly
                         </label>
                       </div>
                       <div className="flex items-center">
                         <input
                           id="monthly"
                           name="paymentFrequency"
                           type="radio"
                           className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                         />
                         <label htmlFor="monthly" className="ml-2 block text-sm text-gray-700">
                           Monthly
                         </label>
                       </div>
                     </div>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Select Applicable Discounts</label>
                     <div className="space-y-2">
                       <div className="flex items-center">
                         <input
                           id="academic"
                           name="discounts"
                           type="checkbox"
                           className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                         />
                         <label htmlFor="academic" className="ml-2 block text-sm text-gray-700">
                           Academic Excellence (25%)
                         </label>
                       </div>
                       <div className="flex items-center">
                         <input
                           id="sports"
                           name="discounts"
                           type="checkbox"
                           className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                         />
                         <label htmlFor="sports" className="ml-2 block text-sm text-gray-700">
                           Sports Achievement (20%)
                         </label>
                       </div>
                       <div className="flex items-center">
                         <input
                           id="sibling"
                           name="discounts"
                           type="checkbox"
                           className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                         />
                         <label htmlFor="sibling" className="ml-2 block text-sm text-gray-700">
                           Sibling Discount (10%)
                         </label>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-gray-50 rounded-xl p-6">
                   <h4 className="text-lg font-medium text-gray-800 mb-4">Estimated Fee Breakdown</h4>
                   
                   <div className="space-y-3 mb-4">
                     <div className="flex justify-between items-center">
                       <span className="text-gray-600">Tuition Fee</span>
                       <span className="font-medium">₹85,000</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-gray-600">Development Fee</span>
                       <span className="font-medium">₹30,000</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-gray-600">Technology Fee</span>
                       <span className="font-medium">₹24,000</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-gray-600">Extra-Curricular Fee</span>
                       <span className="font-medium">₹22,000</span>
                     </div>
                     <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                       <span className="font-medium text-gray-800">Total Annual Fees</span>
                       <span className="font-bold text-lg">₹161,000</span>
                     </div>
                   </div>
                   
                   <div className="bg-emerald-50 p-3 rounded-lg mb-4">
                     <div className="flex justify-between items-center">
                       <span className="text-emerald-700">Academic Excellence Discount (25%)</span>
                       <span className="font-medium text-emerald-700">- ₹40,250</span>
                     </div>
                   </div>
                   
                   <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                     <span className="font-medium text-gray-800">Net Payable Amount</span>
                     <span className="font-bold text-xl text-emerald-700">₹120,750</span>
                   </div>
                   
                   <div className="mt-4 text-sm text-gray-500">
                     <p>* This is an estimate. Actual fees may vary. Please contact the school office for exact details.</p>
                   </div>
                 </div>
               </div>
             ) : (
               <div>
                 <p className="text-gray-600 mb-6">
                   Estimate your scholarship eligibility and potential fee reduction based on various criteria.
                 </p>
                 
                 <div className="space-y-4 mb-6">
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Academic Performance</label>
                     <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                       <option value="">Select Academic Performance</option>
                       <option value="90-100">90% and above</option>
                       <option value="80-90">80% - 90%</option>
                       <option value="70-80">70% - 80%</option>
                       <option value="below70">Below 70%</option>
                     </select>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Sports Achievements</label>
                     <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                       <option value="">Select Sports Achievement Level</option>
                       <option value="national">National Level</option>
                       <option value="state">State Level</option>
                       <option value="district">District Level</option>
                       <option value="school">School Level</option>
                       <option value="none">None</option>
                     </select>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Siblings in School</label>
                     <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                       <option value="">Select Number of Siblings</option>
                       <option value="0">None</option>
                       <option value="1">1 Sibling</option>
                       <option value="2">2 Siblings</option>
                       <option value="3+">3 or more Siblings</option>
                     </select>
                   </div>
                   
                   <div>
                     <label className="block text-sm font-medium text-gray-700 mb-1">Annual Family Income</label>
                     <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                       <option value="">Select Income Range</option>
                       <option value="below3">Below ₹3 Lakhs</option>
                       <option value="3-5">₹3 - ₹5 Lakhs</option>
                       <option value="5-8">₹5 - ₹8 Lakhs</option>
                       <option value="8-12">₹8 - ₹12 Lakhs</option>
                       <option value="above12">Above ₹12 Lakhs</option>
                     </select>
                   </div>
                 </div>
                 
                 <div className="bg-gray-50 rounded-xl p-6">
                   <h4 className="text-lg font-medium text-gray-800 mb-4">Scholarship Eligibility Results</h4>
                   
                   <div className="space-y-4">
                     <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-500">
                       <h5 className="font-medium text-emerald-800 mb-1">Academic Excellence Scholarship</h5>
                       <div className="flex justify-between items-center">
                         <span className="text-emerald-700">Discount</span>
                         <span className="font-medium text-emerald-700">25% on Tuition Fees</span>
                       </div>
                       <div className="flex justify-between items-center mt-1">
                         <span className="text-emerald-700">Eligibility Status</span>
                         <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">Eligible</span>
                       </div>
                     </div>
                     
                     <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-300">
                       <h5 className="font-medium text-gray-800 mb-1">Sports Achievement Scholarship</h5>
                       <div className="flex justify-between items-center">
                         <span className="text-gray-600">Discount</span>
                         <span className="font-medium text-gray-600">20% on Tuition Fees</span>
                       </div>
                       <div className="flex justify-between items-center mt-1">
                         <span className="text-gray-600">Eligibility Status</span>
                         <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded text-xs font-medium">Not Eligible</span>
                       </div>
                     </div>
                     
                     <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                       <h5 className="font-medium text-blue-800 mb-1">Sibling Discount</h5>
                       <div className="flex justify-between items-center">
                         <span className="text-blue-700">Discount</span>
                         <span className="font-medium text-blue-700">10% on Total Fees</span>
                       </div>
                       <div className="flex justify-between items-center mt-1">
                         <span className="text-blue-700">Eligibility Status</span>
                         <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">Eligible</span>
                       </div>
                     </div>
                     
                     <div className="border-t border-gray-200 pt-4 mt-4">
                       <div className="flex justify-between items-center">
                         <span className="font-medium text-gray-800">Estimated Fee Reduction</span>
                         <span className="font-bold text-xl text-emerald-700">₹40,250 (35%)</span>
                       </div>
                       <p className="text-sm text-gray-500 mt-2">
                         * Final scholarship amount will be determined after document verification and approval.
                       </p>
                     </div>
                   </div>
                 </div>
               </div>
             )}
             
             <div className="mt-6 flex justify-end">
               <button
                 onClick={closeModal}
                 className="px-6 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors mr-3"
               >
                 Close
               </button>
               <button
                 className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
               >
                 {currentCalculator === 'tuition' ? 'Calculate' : 'Check Eligibility'}
               </button>
             </div>
           </div>
         </div>
       </div>
     )}
   </section>
 );
}