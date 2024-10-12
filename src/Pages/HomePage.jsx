import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">AI Mock Interview</h1>
          <div>
            <a href="#features" className="text-gray-700 mx-4 hover:text-blue-600">Features</a>
            <a href="#testimonials" className="text-gray-700 mx-4 hover:text-blue-600">Testimonials</a>
            <NavLink to="/interviewForm" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition">Get Started</NavLink>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ace Your Interviews with AI-Powered Mock Sessions</h2>
          <p className="text-lg mb-8">
            Practice with real-time AI to improve your interview skills, get personalized feedback, and land your dream job!
          </p>
          <NavLink to="/interviewForm" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition">
            Start Now
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-10">Platform Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12 12 0 0112 2.48a12 12 0 016.16 3.422L12 14zm0 0v8m-6.16-4.578A12 12 0 0112 21.52a12 12 0 01-6.16-3.422L12 14z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Real-Time AI Feedback</h4>
              <p className="text-gray-600">Get instant AI-generated insights and suggestions to enhance your interview performance.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <div className="text-indigo-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a10 10 0 10-5 5v-2.09A7.92 7.92 0 0112 20.09V20h5v-2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Voice or Text Responses</h4>
              <p className="text-gray-600">Choose between speaking your responses or typing them for a flexible mock interview experience.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
              <div className="text-blue-600 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 21h6m-3-6a9 9 0 100-18 9 9 0 000 18z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold mb-3">Detailed Interview Results</h4>
              <p className="text-gray-600">Receive a comprehensive result report to help identify areas of strength and improvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "The AI mock interviews helped me gain confidence before my big job interview. The feedback was spot on!"
              </p>
              <h4 className="font-bold text-gray-800">John Doe</h4>
              <p className="text-sm text-gray-500">Software Engineer</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "A game changer for interview preparation. I could practice at my own pace and got great results."
              </p>
              <h4 className="font-bold text-gray-800">Jane Smith</h4>
              <p className="text-sm text-gray-500">Data Scientist</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "I loved the flexibility of voice and text responses. The detailed results were super helpful!"
              </p>
              <h4 className="font-bold text-gray-800">Michael Brown</h4>
              <p className="text-sm text-gray-500">UX Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="bg-blue-600 py-16 text-white text-center">
        <h3 className="text-3xl font-bold mb-6">Ready to Ace Your Next Interview?</h3>
        <p className="text-lg mb-8">Join our platform and start practicing with AI today!</p>
        <a href="#signup" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started for Free
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 AI Mock Interview Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
