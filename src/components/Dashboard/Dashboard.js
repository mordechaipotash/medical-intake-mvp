// medical-intake-app/src/components/Dashboard/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const sections = [
    { name: 'General Information', path: '/general' },
    { name: 'Family Information', path: '/family' },
    { name: 'Medical History', path: '/medical' },
    { name: 'Developmental History', path: '/developmental' },
    { name: 'Educational History', path: '/educational' },
    { name: 'Behavioral Information', path: '/behavioral' },
    { name: 'Language & Communication', path: '/language' },
    { name: 'Reason for Referral', path: '/referral' },
    { name: 'Health History', path: '/health' },
    { name: 'Social Interaction', path: '/social' },
    { name: 'Family History', path: '/family-history' },
    { name: 'Additional Information', path: '/additional' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Medical Intake Form Sections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map((section, index) => (
          <Link
            key={index}
            to={section.path}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{section.name}</h3>
            <p className="text-gray-600">Complete this section</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;