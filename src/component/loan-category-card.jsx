 // components/LoanCategoryCard.js
import Link from 'next/link';

export default function LoanCategoryCard({ category, link }) {
  return (
    <div className="border p-6 rounded-lg shadow-lg text-center bg-white">
      <h3 className="text-xl font-semibold mb-4">{category}</h3>
      <Link href={link}>
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300">
          Learn More
        </button>
      </Link>
    </div>
  );
}