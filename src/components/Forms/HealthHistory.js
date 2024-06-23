
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField'; // Adjust this import path as needed

const initialValues = {
  hearingTested: '',
  visionHearingIssues: '',
  growthDevelopmentConcerns: '',
  sleepPatterns: '',
  sleepHabits: '',
  diet: '',
  dietaryRestrictions: '',
  physicalActivity: '',
  activityTypes: '',
  familyMedicalHistory: '',
  hasMentalHealthHistory: '',
  mentalHealthHistory: '',
  developmentalMilestones: {
    firstSmile: '',
    firstWord: '',
    firstStep: '',
    // Add more milestones as needed
  },
  additionalInfo: ''
};

const validationSchema = Yup.object({
  hearingTested: Yup.string().required('Required'),
  visionHearingIssues: Yup.string(),
  growthDevelopmentConcerns: Yup.string(),
  sleepPatterns: Yup.string().required('Required'),
  sleepHabits: Yup.string(),
  diet: Yup.string(),
  dietaryRestrictions: Yup.string(),
  physicalActivity: Yup.string().required('Required'),
  activityTypes: Yup.string().when('physicalActivity', {
    is: 'yes',
    then: Yup.string().required('Required when physical activity is yes')
  }),
  familyMedicalHistory: Yup.string(),
  hasMentalHealthHistory: Yup.string().required('Required'),
  mentalHealthHistory: Yup.string().when('hasMentalHealthHistory', {
    is: 'yes',
    then: Yup.string().required('Required when mental health history is yes')
  }),
  developmentalMilestones: Yup.object({
    firstSmile: Yup.number().positive('Must be positive').integer('Must be an integer'),
    firstWord: Yup.number().positive('Must be positive').integer('Must be an integer'),
    firstStep: Yup.number().positive('Must be positive').integer('Must be an integer'),
    // Add validation for other milestones
  }),
  additionalInfo: Yup.string()
});

function HealthHistory() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Child Health History</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <FormField 
              label="Has your child's hearing been tested?" 
              name="hearingTested" 
              type="select" 
              options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} 
              helperText="Select if your child's hearing has been tested." 
            />
            
            <FormField 
              label="Vision or Hearing Issues" 
              name="visionHearingIssues" 
              type="textarea" 
              helperText="Describe any issues with vision or hearing." 
            />
            
            <FormField 
              label="Growth and Development Concerns" 
              name="growthDevelopmentConcerns" 
              type="textarea" 
              helperText="Describe any concerns with growth and development." 
            />
            
            <FormField 
              label="Sleep Patterns" 
              name="sleepPatterns" 
              type="select" 
              options={[{value: 'regular', label: 'Regular'}, {value: 'irregular', label: 'Irregular'}]} 
              helperText="Select your child's sleep patterns." 
            />
            
            <FormField 
              label="Sleep Habits" 
              name="sleepHabits" 
              type="textarea" 
              helperText="Describe your child's sleep habits." 
            />
            
            <FormField 
              label="Diet Description" 
              name="diet" 
              type="textarea" 
              helperText="Describe your child's diet." 
            />
            
            <FormField 
              label="Dietary Restrictions" 
              name="dietaryRestrictions" 
              type="textarea" 
              helperText="Describe any dietary restrictions or special diets." 
            />
            
            <FormField 
              label="Does your child engage in regular physical activity?" 
              name="physicalActivity" 
              type="select" 
              options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} 
              helperText="Select if your child engages in regular physical activity." 
            />
            
            {formik.values.physicalActivity === 'yes' && (
              <FormField 
                label="Types of Physical Activities" 
                name="activityTypes" 
                type="textarea" 
                helperText="Describe the types of physical activities." 
              />
            )}
            
            <FormField 
              label="Family Medical History" 
              name="familyMedicalHistory" 
              type="textarea" 
              helperText="Describe any family history of medical conditions." 
            />
            
            <FormField 
              label="Does your child have a history of mental health issues?" 
              name="hasMentalHealthHistory" 
              type="select" 
              options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} 
              helperText="Select if your child has a history of mental health issues." 
            />
            
            {formik.values.hasMentalHealthHistory === 'yes' && (
              <FormField 
                label="Mental Health History" 
                name="mentalHealthHistory" 
                type="textarea" 
                helperText="Describe the mental health history and any treatments." 
              />
            )}
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Developmental Milestones (age in months)</h3>
            {Object.keys(formik.values.developmentalMilestones).map((milestone) => (
              <FormField 
                key={milestone}
                label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
                name={`developmentalMilestones.${milestone}`}
                type="number"
                helperText={`Enter the age (in months) when your child ${milestone.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
              />
            ))}
            
            <FormField 
              label="Additional Health Information" 
              name="additionalInfo" 
              type="textarea" 
              helperText="Provide any additional health information you'd like to share." 
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

export default HealthHistory;
