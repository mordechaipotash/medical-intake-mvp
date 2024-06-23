// medical-intake-app/src/utils/validation.js
export const validateRequired = (value) => {
  return value.trim() !== '' ? '' : 'This field is required';
};

export const validateEmail = (value) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(value) ? '' : 'Invalid email address';
};

export const validatePhone = (value) => {
  const regex = /^\d{10}$/;
  return regex.test(value) ? '' : 'Invalid phone number (10 digits required)';
};