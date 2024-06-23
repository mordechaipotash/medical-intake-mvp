import React, { useState } from 'react';

function MedicalHistory() {
  const [formData, setFormData] = useState({
    gestationalAge: '',
    birthWeight: '',
    deliveryMethod: '',
    birthComplications: '',
    nicuAdmission: '',
    nicuDuration: '',
    developmentalMilestones: {
      rolledOver: '',
      satWithoutSupport: '',
      crawled: '',
      walkedUnassisted: '',
      firstWords: '',
      sentences: '',
    },
    surgeries: '',
    allergies: '',
    immunizationStatus: '',
    immunizationsMissing: '',
    visionTested: '',
    hearingTested: '',
    pastIllnesses: [],
    ongoingMedicalConditions: '',
    currentMedications: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleMilestoneChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      developmentalMilestones: {
        ...prevState.developmentalMilestones,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Medical History form submitted:', formData);
    // Here you would typically send the data to a server or store it
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6">Medical History</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gestationalAge">
            Gestational Age at Birth (weeks)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="gestationalAge"
            type="number"
            name="gestationalAge"
            value={formData.gestationalAge}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthWeight">
            Birth Weight
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthWeight"
            type="text"
            name="birthWeight"
            value={formData.birthWeight}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryMethod">
            Delivery Method
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="deliveryMethod"
            name="deliveryMethod"
            value={formData.deliveryMethod}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Vaginal">Vaginal</option>
            <option value="Cesarean">Cesarean</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthComplications">
            Birth Complications
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="birthComplications"
            name="birthComplications"
            value={formData.birthComplications}
            onChange={handleChange}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nicuAdmission">
            NICU Admission
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nicuAdmission"
            name="nicuAdmission"
            value={formData.nicuAdmission}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {formData.nicuAdmission === 'Yes' && (
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nicuDuration">
              NICU Duration (days)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nicuDuration"
              type="number"
              name="nicuDuration"
              value={formData.nicuDuration}
              onChange={handleChange}
            />
          </div>
        )}
        <h3 className="text-xl font-bold mb-4 mt-6">Developmental Milestones (age in months)</h3>
        {Object.keys(formData.developmentalMilestones).map((milestone) => (
          <div key={milestone} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={milestone}>
              {milestone.charAt(0).toUpperCase() + milestone.slice(1).replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id={milestone}
              type="number"
              name={milestone}
              value={formData.developmentalMilestones[milestone]}
              onChange={handleMilestoneChange}
            />
          </div>
        ))}
        {/* Add more fields here based on the original PDF structure */}
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Medical History
          </button>
        </div>
      </form>
    </div>
  );
}

export default MedicalHistory;