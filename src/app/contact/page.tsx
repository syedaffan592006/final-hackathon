import React from "react";
import Link from "next/link";
import Image from "next/image";
function contact(){
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

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-600">Get in Touch</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Have any questions or want to get involved with Saylani Welfare? Feel free to contact us. We are here to help!
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-6 mb-16">
          <h3 className="text-2xl font-semibold text-indigo-600">Contact Form</h3>
          <form className="mt-6 space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg text-gray-600">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-gray-600">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 p-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg text-gray-600">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="mt-2 p-3 border border-gray-300 rounded-lg"
                // rows=""
                placeholder="Write your message here"
                required
              ></textarea>
            </div>
            <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg">
              Send Message
            </button>
          </form>
        </section>

        <section className="text-center">
          <h3 className="text-3xl font-semibold text-indigo-600">About Saylani Welfare</h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Saylani Welfare International is a non-profit organization committed to providing social welfare services to the underprivileged. We are dedicated to improving the lives of communities through our various programs, including free food distribution, healthcare services, education, and financial assistance.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to help those in need and empower individuals to break the cycle of poverty. If you're interested in supporting our mission or getting involved, we encourage you to reach out to us. Your contribution, whether through donations or volunteering, can make a difference.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Saylani Welfare International. All Rights Reserved.</p>
        </div>
      </footer>



    </header>
  );

}
export default contact;
