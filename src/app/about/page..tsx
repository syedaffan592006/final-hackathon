import React from "react";
import Link from "next/link";
import Image from "next/image";
function About(){
    return(
        <header className="p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src="/logo.png" width={200} height={40} alt="logo" />
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline text-blue-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline text-blue-900">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline text-blue-900">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
        

<section className="bg-white shadow-lg rounded-lg p-6 mb-16">
          <h3 className="text-2xl font-semibold text-indigo-600">Key Areas of Focus</h3>
          <ul className="mt-4 text-gray-600 list-disc list-inside">
            <li><strong>Food Distribution:</strong> Providing free meals and grocery packs to thousands of people every day.</li>
            <li><strong>Healthcare:</strong> Offering free medical services, including surgeries and health checkups.</li>
            <li><strong>Education:</strong> Running schools and training programs to equip individuals with the skills to secure a better future.</li>
            <li><strong>Microfinance:</strong> Offering interest-free loans to help people start businesses and improve their livelihoods.</li>
            <li><strong>Relief Work:</strong> Providing support during emergencies and natural disasters.</li>
            <li><strong>Orphan Care:</strong> Caring for orphaned children and providing them with a safe, loving environment.</li>
          </ul>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-semibold text-indigo-600">Get Involved</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            There are many ways you can help Saylani Welfare continue its work. Whether it's through donations, volunteering, or spreading the word, your support can make a difference. Join us in our mission to create a more compassionate and just society for all.
          </p>
        </section>

    <footer className="bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p>&copy; 2025 Saylani Welfare International. All Rights Reserved.</p>
    </div>
  </footer>
    </header>
  );

}
export default About;
