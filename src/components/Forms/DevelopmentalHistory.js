import React, { useState } from 'react';
import FormField from './FormField';

function DevelopmentalHistory() {
  const [formData, setFormData] = useState({
    motorMilestones: {
      rolledOver: '',
      satWithoutSupport: '',
      crawled: '',
      walkedUnassisted: '',
      ran: '',
      climbedStairs: '',
    },
    grossMotorConcerns: '',
    fineMotorMilestones: {
      graspedObjects: '',
      usedPincerGrasp: '',
      fedSelfWithFingers: '',
      usedUtensils: '',
      drewSimpleShapes: '',
    },
    fineMotorConcerns: '',
    languageMilestones: {
      firstWords: '',
      combinedTwoWords: '',
      usedSentences: '',
    },
    languageConcerns: '',
    socialEmotionalMilestones: {
      smiledResponsively: '',
      recognizedFamiliarPeople: '',
      showedInterestInChildren: '',
      playedWithChildren: '',
    },
    socialEmotionalConcerns: '',
    cognitiveMilestones: {
      recognizedObjects: '',
      followedSimpleInstructions: '',
      engagedInPretendPlay: '',
    },
    cognitiveConcerns: '',
    dailyLivingMilestones: {
      fedSelf: '',
      dressedSelf: '',
      usedToiletIndependently: '',
    },
    dailyLivingConcerns: '',
    behavioralConcerns: '',
    sleepPatterns: '',
    sleepIssues: '',
    playDescription: '',
    favoriteActivities: '',
    otherDevelopmentalConcerns: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleNestedChange = (category, field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Developmental History submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Developmental History</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mt-4 mb-2">Motor Milestones (age in months)</h3>
        {Object.keys(formData.motorMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.motorMilestones[milestone]}
            onChange={(e) => handleNestedChange('motorMilestones', milestone, e.target.value)}
          />
        ))}
        <FormField label="Gross Motor Concerns" name="grossMotorConcerns" type="textarea" value={formData.grossMotorConcerns} onChange={handleChange} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Fine Motor Milestones (age in months)</h3>
        {Object.keys(formData.fineMotorMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.fineMotorMilestones[milestone]}
            onChange={(e) => handleNestedChange('fineMotorMilestones', milestone, e.target.value)}
          />
        ))}
        <FormField label="Fine Motor Concerns" name="fineMotorConcerns" type="textarea" value={formData.fineMotorConcerns} onChange={handleChange} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Language Milestones (age in months)</h3>
        {Object.keys(formData.languageMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.languageMilestones[milestone]}
            onChange={(e) => handleNestedChange('languageMilestones', milestone, e.target.value)}
          />
        ))}
        <FormField label="Language Concerns" name="languageConcerns" type="textarea" value={formData.languageConcerns} onChange={handleChange} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Social and Emotional Milestones (age in months)</h3>
        {Object.keys(formData.socialEmotionalMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.socialEmotionalMilestones[milestone]}
            onChange={(e) => handleNestedChange('socialEmotionalMilestones', milestone, e.target.value)}
          />
        ))}
        <FormField label="Social and Emotional Concerns" name="socialEmotionalConcerns" type="textarea" value={formData.socialEmotionalConcerns} onChange={handleChange} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Cognitive Milestones (age in months)</h3>
        {Object.keys(formData.cognitiveMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.cognitiveMilestones[milestone]}
            onChange={(e) => handleNestedChange('cognitiveMilestones', milestone, e.target.value)}
          />
        ))}
        <FormField label="Cognitive Concerns" name="cognitiveConcerns" type="textarea" value={formData.cognitiveConcerns} onChange={handleChange} />

        <h3 className="text-xl font-semibold mt-4 mb-2">Daily Living Skills Milestones (age in months)</h3>
        {Object.keys(formData.dailyLivingMilestones).map(milestone => (
          <FormField 
            key={milestone}
            label={milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            name={milestone}
            type="number"
            value={formData.dailyLivingMilestones[milestone]}
            onChange={(e) => handleNestedChange('dailyLivingMilestones', milestone, e.target.value)}
          />
        ))}
        <FormField label="Daily Living Skills Concerns" name="dailyLivingConcerns" type="textarea" value={formData.dailyLivingConcerns} onChange={handleChange} />

        <FormField label="Behavioral Concerns" name="behavioralConcerns" type="textarea" value={formData.behavioralConcerns} onChange={handleChange} />
        <FormField label="Sleep Patterns" name="sleepPatterns" type="select" value={formData.sleepPatterns} onChange={handleChange} options={[{value: 'regular', label: 'Regular'}, {value: 'irregular', label: 'Irregular'}]} />
        <FormField label="Sleep Issues" name="sleepIssues" type="textarea" value={formData.sleepIssues} onChange={handleChange} />
        <FormField label="Play Description" name="playDescription" type="textarea" value={formData.playDescription} onChange={handleChange} />
        <FormField label="Favorite Activities" name="favoriteActivities" type="textarea" value={formData.favoriteActivities} onChange={handleChange} />
        <FormField label="Other Developmental Concerns" name="otherDevelopmentalConcerns" type="textarea" value={formData.otherDevelopmentalConcerns} onChange={handleChange} />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default DevelopmentalHistory;