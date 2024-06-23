import React, { useState } from 'react';
import FormField from './FormField';

function EducationalHistory() {
  const [formData, setFormData] = useState({
    currentSchool: {
      name: '',
      address: '',
      phoneNumber: '',
    },
    grade: '',
    teacherName: '',
    previousSchools: '',
    academicPerformance: '',
    enjoySchool: '',
    excellingSubjects: '',
    strugglingSubjects: '',
    learningStyle: '',
    accommodations: '',
    specialEducationServices: '',
    specialEducationDetails: '',
    tutoring: '',
    tutoringDetails: '',
    schoolBehavior: '',
    disciplinaryActions: '',
    peerInteractions: '',
    socialConcerns: '',
    extracurricularActivities: '',
    educationalGoals: '',
    improvementAreas: '',
    attendanceRecord: '',
    absenceReasons: '',
    homeworkCompletion: '',
    homeworkHabits: '',
    additionalInfo: '',
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
    console.log('Educational History submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Educational History</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mt-4 mb-2">Current School</h3>
        <FormField label="School Name" name="name" type="text" value={formData.currentSchool.name} onChange={(e) => handleNestedChange('currentSchool', 'name', e.target.value)} />
        <FormField label="School Address" name="address" type="text" value={formData.currentSchool.address} onChange={(e) => handleNestedChange('currentSchool', 'address', e.target.value)} />
        <FormField label="School Phone Number" name="phoneNumber" type="tel" value={formData.currentSchool.phoneNumber} onChange={(e) => handleNestedChange('currentSchool', 'phoneNumber', e.target.value)} />

        <FormField label="Grade" name="grade" type="text" value={formData.grade} onChange={handleChange} />
        <FormField label="Teacher's Name" name="teacherName" type="text" value={formData.teacherName} onChange={handleChange} />
        <FormField label="Previous Schools Attended" name="previousSchools" type="textarea" value={formData.previousSchools} onChange={handleChange} />
        <FormField label="Academic Performance" name="academicPerformance" type="textarea" value={formData.academicPerformance} onChange={handleChange} />
        <FormField label="Does your child enjoy school?" name="enjoySchool" type="select" value={formData.enjoySchool} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        <FormField label="Subjects where your child excels" name="excellingSubjects" type="textarea" value={formData.excellingSubjects} onChange={handleChange} />
        <FormField label="Subjects where your child struggles" name="strugglingSubjects" type="textarea" value={formData.strugglingSubjects} onChange={handleChange} />
        <FormField label="Learning Style" name="learningStyle" type="textarea" value={formData.learningStyle} onChange={handleChange} />
        <FormField label="Accommodations or modifications used at school" name="accommodations" type="textarea" value={formData.accommodations} onChange={handleChange} />
        <FormField label="Is your child receiving any special education services?" name="specialEducationServices" type="select" value={formData.specialEducationServices} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        {formData.specialEducationServices === 'yes' && (
          <FormField label="Describe the special education services" name="specialEducationDetails" type="textarea" value={formData.specialEducationDetails} onChange={handleChange} />
        )}
        <FormField label="Does your child receive any tutoring or additional support outside of school?" name="tutoring" type="select" value={formData.tutoring} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        {formData.tutoring === 'yes' && (
          <FormField label="Describe the tutoring or additional support" name="tutoringDetails" type="textarea" value={formData.tutoringDetails} onChange={handleChange} />
        )}
        <FormField label="Behavior in School" name="schoolBehavior" type="textarea" value={formData.schoolBehavior} onChange={handleChange} />
        <FormField label="Any disciplinary actions taken at school?" name="disciplinaryActions" type="textarea" value={formData.disciplinaryActions} onChange={handleChange} />
        <FormField label="How does your child interact with peers at school?" name="peerInteractions" type="textarea" value={formData.peerInteractions} onChange={handleChange} />
        <FormField label="Any concerns about social interactions in the school setting?" name="socialConcerns" type="textarea" value={formData.socialConcerns} onChange={handleChange} />
        <FormField label="Extracurricular Activities" name="extracurricularActivities" type="textarea" value={formData.extracurricularActivities} onChange={handleChange} />
        <FormField label="Educational Goals" name="educationalGoals" type="textarea" value={formData.educationalGoals} onChange={handleChange} />
        <FormField label="Areas for Improvement" name="improvementAreas" type="textarea" value={formData.improvementAreas} onChange={handleChange} />
        <FormField label="Attendance Record" name="attendanceRecord" type="textarea" value={formData.attendanceRecord} onChange={handleChange} />
        <FormField label="Reasons for Absences (if applicable)" name="absenceReasons" type="textarea" value={formData.absenceReasons} onChange={handleChange} />
        <FormField label="Does your child complete homework regularly?" name="homeworkCompletion" type="select" value={formData.homeworkCompletion} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} />
        <FormField label="Describe your child's homework habits" name="homeworkHabits" type="textarea" value={formData.homeworkHabits} onChange={handleChange} />
        <FormField label="Additional Information" name="additionalInfo" type="textarea" value={formData.additionalInfo} onChange={handleChange} />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default EducationalHistory;