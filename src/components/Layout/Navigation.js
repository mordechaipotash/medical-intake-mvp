import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Medical Intake</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
                Dashboard
              </Link>
              <Link to="/general-information" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
                General Info
              </Link>
              <Link to="/family-information" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
                Family Info
              </Link>
              <Link to="/health-history" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
                Medical History
              </Link>
              <Link to="/behavioral-information" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
                Behavioral Information
              </Link>
              <Link to="/language-communication" className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300">
                Language & Communication
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
