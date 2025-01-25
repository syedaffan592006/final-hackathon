'use client'
import { useState } from 'react';

export default function LoanCalculator() {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [deposit, setDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [loanEstimate, setLoanEstimate] = useState(null);

  // Subcategories based on selected category
  const subcategories = {
    Wedding: ['Valima', 'Jahez'],
    Home: ['Construction', 'Renovation'],
    Business: ['Startup', 'Expansion'],
    Education: ['University', 'Vocational Training'],
  };

  const handleCalculate = () => {
    if (!deposit || !loanPeriod || !category || !subcategory) {
      alert('Please fill in all fields');
      return;
    }

    // Example loan calculation with interest
    const principal = parseInt(deposit);
    const years = parseInt(loanPeriod);
    const interest = principal * 0.1; // Simple interest (10% for example)
    const totalRepayment = principal + interest;

    setLoanEstimate({
      principal,
      interest,
      totalRepayment,
      monthlyRepayment: totalRepayment / (years * 12),
    });
  };

  return (
    <div className="text-center mt-10 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Loan Calculator</h2>

      {/* Category & Subcategory Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="category" className="block text-lg font-semibold mb-2">
            Select Loan Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setSubcategory('');
            }}
            className="w-full p-3 border rounded shadow-sm"
          >
            <option value="">--Select Category--</option>
            <option value="Wedding">Wedding</option>
            <option value="Home">Home</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <div>
          <label htmlFor="subcategory" className="block text-lg font-semibold mb-2">
            Select Subcategory
          </label>
          <select
            id="subcategory"
            value={subcategory}
            onChange={(e) => setSubcategory(e.target.value)}
            className="w-full p-3 border rounded shadow-sm"
            disabled={!category}
          >
            <option value="">--Select Subcategory--</option>
            {category &&
              subcategories[category].map((sub, index) => (
                <option key={index} value={sub}>
                  {sub}
                </option>
              ))}
          </select>
        </div>
      </div>

      {/* Deposit and Loan Period Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="deposit" className="block text-lg font-semibold mb-2">
            Initial Deposit (PKR)
          </label>
          <input
            type="number"
            id="deposit"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
            className="w-full p-3 border rounded shadow-sm"
            placeholder="Enter deposit amount"
          />
        </div>

        <div>
          <label htmlFor="loanPeriod" className="block text-lg font-semibold mb-2">
            Loan Period (Years)
          </label>
          <select
            id="loanPeriod"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="w-full p-3 border rounded shadow-sm"
          >
            <option value="">--Select Loan Period--</option>
            <option value="3">3 Years</option>
            <option value="5">5 Years</option>
            <option value="7">7 Years</option>
            <option value="10">10 Years</option>
          </select>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="text-center mb-6">
        <button
          onClick={handleCalculate}
          className="px-6 py-3 bg-blue-500 text-white rounded shadow-lg hover:bg-blue-700 transition"
        >
          Calculate
        </button>
      </div>

      {/* Loan Breakdown */}
      {loanEstimate && (
        <div className="loan-breakdown bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Loan Breakdown</h2>
          <table className="min-w-full table-auto text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount (PKR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-medium">Principal</td>
                <td className="px-4 py-2">{loanEstimate.principal}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Interest (10%)</td>
                <td className="px-4 py-2">{loanEstimate.interest}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Total Repayment</td>
                <td className="px-4 py-2">{loanEstimate.totalRepayment}</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-medium">Monthly Repayment</td>
                <td className="px-4 py-2">{loanEstimate.monthlyRepayment.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}