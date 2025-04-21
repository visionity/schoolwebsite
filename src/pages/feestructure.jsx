import React from 'react'
import { feeStructure } from '../data/feeStructure';
import FeeCard from '../components/FeeCard';
function feestructure() {
  return (
    <div>
      <h1>Fee Structure</h1>
      <div className="fee-cards">
        {feeStructure.map((item, index) => (
          <FeeCard key={index} title={item.title} fees={item.fees} />
        ))}
      </div>
    </div>
  )
}

export default feestructure