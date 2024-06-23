// medical-intake-app/src/components/UI/Textarea.js
import React from 'react';

function Textarea({ label, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        {...props}
        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        rows="3"
      />
    </div>
  );
}

export default Textarea;