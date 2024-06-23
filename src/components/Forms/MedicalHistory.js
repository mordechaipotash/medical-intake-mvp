import React, { useState } from 'react';
import FormField from './FormField';

function HealthHistory() {
  const [formData, setFormData] = useState({
    birthHistory: {
      gestationalAge: '',
      birthWeight: '',
      deliveryMethod: '',
      complications: '',
      nicuAdmission: '',
      nicuDuration: '',
    },
    earlyHealthIssues: '',
    ongoingMedicalConditions: '',
    currentMedications: '',
    hasMedications: '',
    hospitalizations: '',
    hasHospitalizations: '',
    allergies: '',
    hasAllergies: '',
    immunizations: '',
    missingImmunizations: '',
    visionTested: '',
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
    mentalHealthHistory: '',
    hasMentalHealthHistory: '',
    developmentalMilestones: {
      rolledOver: '',
      satWithoutSupport: '',
      crawled: '',
      walkedUnassisted: '',
      firstWords: '',
      sentences: '',
    },
    additionalInfo: '',
  });

  const handleNestedChange = (category, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Health History submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Health History</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mt-4 mb-2">Birth History</h3>
        <FormField label="Gestational Age at Birth (weeks)" name="gestationalAge" type="number" value={formData.birthHistory.gestationalAge} onChange={(e) => handleNestedChange('birthHistory', 'gestationalAge', e.target.value)} helperText="Please enter the number of weeks." />
        <FormField label="Birth Weight" name="birthWeight" type="text" value={formData.birthHistory.birthWeight} onChange={(e) => handleNestedChange('birthHistory', 'birthWeight', e.target.value)} helperText="Please enter the weight in pounds or kilograms." />
        <FormField label="Delivery Method" name="deliveryMethod" type="select" value={formData.birthHistory.deliveryMethod} onChange={(e) => handleNestedChange('birthHistory', 'deliveryMethod', e.target.value)} options={[{value: 'vaginal', label: 'Vaginal'}, {value: 'cesarean', label: 'Cesarean'}]} helperText="Select the delivery method." />
        <FormField label="Complications during birth" name="complications" type="textarea" value={formData.birthHistory.complications} onChange={(e) => handleNestedChange('birthHistory', 'complications', e.target.value)} helperText="Describe any complications during birth." />
        <FormField label="NICU Admission" name="nicuAdmission" type="select" value={formData.birthHistory.nicuAdmission} onChange={(e) => handleNestedChange('birthHistory', 'nicuAdmission', e.target.value)} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if the child was admitted to NICU." />
        {formData.birthHistory.nicuAdmission === 'yes' && (
          <FormField label="NICU Duration" name="nicuDuration" type="text" value={formData.birthHistory.nicuDuration} onChange={(e) => handleNestedChange('birthHistory', 'nicuDuration', e.target.value)} helperText="Enter the duration of NICU stay." />
        )}

        <h3 className="text-xl font-semibold mt-4 mb-2">Health Issues</h3>
        <FormField label="Early Health Issues" name="earlyHealthIssues" type="textarea" value={formData.earlyHealthIssues} onChange={handleChange} helperText="Describe any early health issues." />
        <FormField label="Ongoing Medical Conditions" name="ongoingMedicalConditions" type="textarea" value={formData.ongoingMedicalConditions} onChange={handleChange} helperText="List any ongoing medical conditions." />
        <FormField label="Is your child on any medication?" name="hasMedications" type="select" value={formData.hasMedications} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child is on any medication." />
        {formData.hasMedications === 'yes' && (
          <FormField label="Current Medications" name="currentMedications" type="textarea" value={formData.currentMedications} onChange={handleChange} helperText="List all current medications." />
        )}
        <FormField label="Has your child had any hospitalizations or surgeries?" name="hasHospitalizations" type="select" value={formData.hasHospitalizations} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child had any hospitalizations or surgeries." />
        {formData.hasHospitalizations === 'yes' && (
          <FormField label="Hospitalizations and Surgeries" name="hospitalizations" type="textarea" value={formData.hospitalizations} onChange={handleChange} helperText="Describe any hospitalizations or surgeries." />
        )}
        <FormField label="Does your child have any allergies?" name="hasAllergies" type="select" value={formData.hasAllergies} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child has any allergies." />
        {formData.hasAllergies === 'yes' && (
          <FormField label="Allergies" name="allergies" type="textarea" value={formData.allergies} onChange={handleChange} helperText="List all allergies." />
        )}
        <FormField label="Are your child's immunizations up to date?" name="immunizations" type="select" value={formData.immunizations} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if immunizations are up to date." />
        {formData.immunizations === 'no' && (
          <FormField label="Missing Immunizations" name="missingImmunizations" type="textarea" value={formData.missingImmunizations} onChange={handleChange} helperText="List any missing immunizations." />
        )}

        <h3 className="text-xl font-semibold mt-4 mb-2">Vision and Hearing</h3>
        <FormField label="Has your child's vision been tested?" name="visionTested" type="select" value={formData.visionTested} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if vision has been tested." />
        <FormField label="Has your child's hearing been tested?" name="hearingTested" type="select" value={formData.hearingTested} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if hearing has been tested." />
        <FormField label="Vision or Hearing Issues" name="visionHearingIssues" type="textarea" value={formData.visionHearingIssues} onChange={handleChange} helperText="Describe any vision or hearing issues." />

        <h3 className="text-xl font-semibold mt-4 mb-2">Development and Habits</h3>
        <FormField label="Growth and Development Concerns" name="growthDevelopmentConcerns" type="textarea" value={formData.growthDevelopmentConcerns} onChange={handleChange} helperText="Describe any growth or development concerns." />
        <FormField label="Sleep Patterns" name="sleepPatterns" type="select" value={formData.sleepPatterns} onChange={handleChange} options={[{value: 'regular', label: 'Regular'}, {value: 'irregular', label: 'Irregular'}]} helperText="Select sleep patterns." />
        <FormField label="Sleep Habits" name="sleepHabits" type="textarea" value={formData.sleepHabits} onChange={handleChange} helperText="Describe sleep habits." />
        <FormField label="Diet Description" name="diet" type="textarea" value={formData.diet} onChange={handleChange} helperText="Describe the child's diet." />
        <FormField label="Dietary Restrictions" name="dietaryRestrictions" type="textarea" value={formData.dietaryRestrictions} onChange={handleChange} helperText="List any dietary restrictions." />
        <FormField label="Regular Physical Activity" name="physicalActivity" type="select" value={formData.physicalActivity} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if the child engages in regular physical activity." />
        {formData.physicalActivity === 'yes' && (
          <FormField label="Types of Physical Activities" name="activityTypes" type="textarea" value={formData.activityTypes} onChange={handleChange} helperText="Describe types of physical activities." />
        )}
        <FormField label="Family Medical History" name="familyMedicalHistory" type="textarea" value={formData.familyMedicalHistory} onChange={handleChange} helperText="Describe family medical history." />
        <FormField label="Does your child have a history of mental health issues?" name="hasMentalHealthHistory" type="select" value={formData.hasMentalHealthHistory} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if the child has a history of mental health issues." />
        {formData.hasMentalHealthHistory === 'yes' && (
          <FormField label="Mental Health History" name="mentalHealthHistory" type="textarea" value={formData.mentalHealthHistory} onChange={handleChange} helperText="Describe mental health history." />
        )}
        
        <h3 className="text-xl font-semibold mt-4 mb-2">Developmental Milestones (age in months)</h3>
        {Object.keys(formData.developmentalMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.developmentalMilestones[milestone]}
            onChange={(e) => handleNestedChange('developmentalMilestones', milestone, e.target.value)}
            helperText={`Enter the age in months when the child achieved ${milestone}.`}
          />
        ))}
        
        <FormField label="Additional Health Information" name="additionalInfo" type="textarea" value={formData.additionalInfo} onChange={handleChange} helperText="Provide any additional health information." />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default HealthHistory;
