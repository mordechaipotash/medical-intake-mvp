import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField'; // Adjust this import path as needed

const initialValues = {
  yourName: '',
  relationshipToChild: '',
  childName: '',
  dateOfBirth: '',
  age: '',
  gender: '',
  address: '',
  phoneNumber: '',
  emailAddress: '',
  medicalAidName: '',
  medicalAidNumber: '',
  mainMember: '',
  referredBy: '',
  languagesSpokenAtHome: '',
  preferredLanguage: '',
};

const validationSchema = Yup.object({
  yourName: Yup.string().required('Required'),
  relationshipToChild: Yup.string().required('Required'),
  childName: Yup.string().required('Required'),
  dateOfBirth: Yup.date().required('Required'),
  age: Yup.number().positive('Must be positive').integer('Must be an integer').required('Required'),
  gender: Yup.string().required('Required'),
  address: Yup.string().required('Required'),
  phoneNumber: Yup.string().matches(/^[0-9]+$/, "Must be only digits").min(10, 'Must be at least 10 digits').required('Required'),
  emailAddress: Yup.string().email('Invalid email address').required('Required'),
  medicalAidName: Yup.string(),
  medicalAidNumber: Yup.string(),
  mainMember: Yup.string(),
  referredBy: Yup.string(),
  languagesSpokenAtHome: Yup.string().required('Required'),
  preferredLanguage: Yup.string().required('Required'),
});

function GeneralInformation() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">General Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <FormField 
              label="Your Name" 
              name="yourName" 
              type="text"
              helperText="Enter your full name"
            />
            
            <FormField 
              label="Relationship to Child" 
              name="relationshipToChild" 
              type="text"
              helperText="e.g., Parent, Guardian, etc."
            />
            
            <FormField 
              label="Child's Name" 
              name="childName" 
              type="text"
              helperText="Enter the child's full name"
            />
            
            <FormField 
              label="Date of Birth" 
              name="dateOfBirth" 
              type="date"
            />
            
            <FormField 
              label="Age" 
              name="age" 
              type="number"
            />
            
            <FormField 
              label="Gender" 
              name="gender" 
              type="select"
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
              ]}
            />
            
            <FormField 
              label="Address" 
              name="address" 
              type="textarea"
            />
            
            <FormField 
              label="Phone Number" 
              name="phoneNumber" 
              type="tel"
            />
            
            <FormField 
              label="Email Address" 
              name="emailAddress" 
              type="email"
            />
            
            <FormField 
              label="Medical Aid Name" 
              name="medicalAidName" 
              type="text"
            />
            
            <FormField 
              label="Medical Aid Number" 
              name="medicalAidNumber" 
              type="text"
            />
            
            <FormField 
              label="Main Member" 
              name="mainMember" 
              type="text"
            />
            
            <FormField 
              label="Referred By" 
              name="referredBy" 
              type="text"
            />
            
            <FormField 
              label="Language(s) Spoken at Home" 
              name="languagesSpokenAtHome" 
              type="text"
            />
            
            <FormField 
              label="Preferred Language for Communication" 
              name="preferredLanguage" 
              type="text"
            />
            
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" disabled={formik.isSubmitting}>
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default GeneralInformation;