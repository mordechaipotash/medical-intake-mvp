import React, { useState } from 'react';
import FormField from './FormField';

function FamilyInformation() {
  const [formData, setFormData] = useState({
    mothersName: '',
    fathersName: '',
    maritalStatus: '',
    mothersOccupation: '',
    fathersOccupation: '',
    mothersAge: '',
    fathersAge: '',
    mothersEducation: '',
    fathersEducation: '',
    parentsSeparatedOrDivorced: '',
    homeLivingSituation: '',
    siblings: [],
    extendedFamilyInvolvement: '',
    homeEnvironment: '',
    primaryCaregiver: '',
    livingWithBiologicalParents: '',
    livingArrangements: '',
    familyMedicalHistory: '',
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
    console.log('Family Information submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Family Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Mother's Name" name="mothersName" type="text" value={formData.mothersName} onChange={handleChange} />
        <FormField label="Father's Name" name="fathersName" type="text" value={formData.fathersName} onChange={handleChange} />
        <FormField 
          label="Marital Status" 
          name="maritalStatus" 
          type="select" 
          value={formData.maritalStatus} 
          onChange={handleChange}
          options={[
            { value: '', label: 'Select Status' },
            { value: 'married', label: 'Married' },
            { value: 'single', label: 'Single' },
            { value: 'divorced', label: 'Divorced' },
            { value: 'widowed', label: 'Widowed' },
          ]}
        />
        <FormField label="Mother's Occupation" name="mothersOccupation" type="text" value={formData.mothersOccupation} onChange={handleChange} />
        <FormField label="Father's Occupation" name="fathersOccupation" type="text" value={formData.fathersOccupation} onChange={handleChange} />
        <FormField label="Mother's Age" name="mothersAge" type="number" value={formData.mothersAge} onChange={handleChange} />
        <FormField label="Father's Age" name="fathersAge" type="number" value={formData.fathersAge} onChange={handleChange} />
        <FormField label="Mother's Educational Background" name="mothersEducation" type="text" value={formData.mothersEducation} onChange={handleChange} />
        <FormField label="Father's Educational Background" name="fathersEducation" type="text" value={formData.fathersEducation} onChange={handleChange} />
        <FormField label="Are parents separated or divorced? If yes, who has custody?" name="parentsSeparatedOrDivorced" type="textarea" value={formData.parentsSeparatedOrDivorced} onChange={handleChange} />
        <FormField label="Who lives in the home with the child?" name="homeLivingSituation" type="textarea" value={formData.homeLivingSituation} onChange={handleChange} />
        {/* Sibling information would require a more complex structure, possibly a separate component */}
        <FormField label="Extended Family Involvement" name="extendedFamilyInvolvement" type="textarea" value={formData.extendedFamilyInvolvement} onChange={handleChange} />
        <FormField label="Describe the family's home environment" name="homeEnvironment" type="textarea" value={formData.homeEnvironment} onChange={handleChange} />
        <FormField label="Primary Caregiver" name="primaryCaregiver" type="text" value={formData.primaryCaregiver} onChange={handleChange} />
        <FormField label="Does the child live with both biological parents?" name="livingWithBiologicalParents" type="select" value={formData.livingWithBiologicalParents} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        <FormField label="If no, describe the living arrangements" name="livingArrangements" type="textarea" value={formData.livingArrangements} onChange={handleChange} />
        <FormField label="Family history of medical or psychological conditions" name="familyMedicalHistory" type="textarea" value={formData.familyMedicalHistory} onChange={handleChange} />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default FamilyInformation;