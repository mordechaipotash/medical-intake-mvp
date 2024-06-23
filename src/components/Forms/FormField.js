import React from 'react';

function FormField({ label, name, type, value, onChange, options, placeholder, helperText }) {
  const inputClass = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50";

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          rows="3"
          placeholder={placeholder}
        ></textarea>
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder={placeholder}
        />
      )}
      {helperText && <p className="text-sm text-gray-600">{helperText}</p>}
    </div>
  );
}

export default FormField;
