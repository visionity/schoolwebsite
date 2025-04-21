// pages/constants.js
import React from 'react'

function constant() {
  return (
    <div>constant</div>
  )
}

export default constant
export const SCHOOL_TIMINGS = {
    opening: "8:00 AM",
    closing: "3:00 PM"
  };
  
  export const FEE_STRUCTURE = {
    class10: [
      { name: 'Tuition Fee', amount: '₹10,000' },
      { name: 'Examination Fee', amount: '₹1,000' },
    ],
    class12: [
      { name: 'Tuition Fee', amount: '₹12,000' },
      { name: 'Examination Fee', amount: '₹1,200' },
    ],
  };
  