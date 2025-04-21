// components/FeeCard.js

export default function FeeCard({ title, fees }) {
    return (
      <div className="fee-card">
        <h2>{title}</h2>
        <ul>
          {fees.map((fee, index) => (
            <li key={index}>{fee.name}: {fee.amount}</li>
          ))}
        </ul>
      </div>
    );
  }
  