import React, { useState } from 'react';
import FormField from './FormField';

function ReasonForReferral() {
  const [formData, setFormData] = useState({
    mainConcerns: '',
    specificIssues: '',
    onsetOfConcerns: '',
    changesOverTime: '',
    previousInterventions: '',
    hasPreviousInterventions: '',
    impactOnDailyLife: '',
    impactOnFamilyLife: '',
    expectationsFromEvaluation: '',
    supportSystems: '',
    childAwareness: '',
    childFeelings: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reason for Referral Information submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Reason for Referral</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Main Concerns" name="mainConcerns" type="textarea" value={formData.mainConcerns} onChange={handleChange} />
        <FormField label="Specific Issues" name="specificIssues" type="textarea" value={formData.specificIssues} onChange={handleChange} />
        <FormField label="Onset of Concerns" name="onsetOfConcerns" type="textarea" value={formData.onsetOfConcerns} onChange={handleChange} />
        <FormField label="Changes Over Time" name="changesOverTime" type="textarea" value={formData.changesOverTime} onChange={handleChange} />
        <FormField label="Have you sought help for these concerns before?" name="hasPreviousInterventions" type="select" value={formData.hasPreviousInterventions} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        {formData.hasPreviousInterventions === 'yes' && (
          <FormField label="Describe previous interventions and outcomes" name="previousInterventions" type="textarea" value={formData.previousInterventions} onChange={handleChange} />
        )}
        <FormField label="Impact on Daily Life" name="impactOnDailyLife" type="textarea" value={formData.impactOnDailyLife} onChange={handleChange} />
        <FormField label="Impact on Family Life" name="impactOnFamilyLife" type="textarea" value={formData.impactOnFamilyLife} onChange={handleChange} />
        <FormField label="Expectations from Evaluation" name="expectationsFromEvaluation" type="textarea" value={formData.expectationsFromEvaluation} onChange={handleChange} />
        <FormField label="Support Systems" name="supportSystems" type="textarea" value={formData.supportSystems} onChange={handleChange} />
        <FormField label="Is your child aware of these concerns?" name="childAwareness" type="select" value={formData.childAwareness} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        {formData.childAwareness === 'yes' && (
          <FormField label="How does your child feel about it?" name="childFeelings" type="textarea" value={formData.childFeelings} onChange={handleChange} />
        )}
        <FormField label="Additional Information" name="additionalInfo" type="textarea" value={formData.additionalInfo} onChange={handleChange} />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default ReasonForReferral;