import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField'; // Adjust this import path as needed

const initialValues = {
  primaryLanguage: '',
  languagesSpokenAtHome: '',
  preferredLanguageForCommunication: '',
  firstWordsAge: '',
  combiningWordsAge: '',
  fullSentencesAge: '',
  isSpeechClear: '',
  speechClarityDescription: '',
  understandsLanguage: '',
  languageUnderstandingDescription: '',
  canFollowSimpleInstructions: '',
  canFollowComplexInstructions: '',
  expressionMethod: '',
  usesAppropriateGrammar: '',
  expressionDifficulties: '',
  socialCommunicationDescription: '',
  makeEyeContact: '',
  socialCommunicationDifficulties: '',
  usesNonverbalCommunication: '',
  nonverbalCommunicationDifficulties: '',
  understandsPragmaticLanguage: '',
  pragmaticLanguageDifficulties: '',
  lettersRecognitionAge: '',
  readingAge: '',
  writingAge: '',
  readingWritingDifficulties: '',
  hasBeenAssessed: '',
  assessmentDescription: '',
  receivesTherapy: '',
  therapyDescription: '',
  usesCommunicationTechnology: '',
  technologyDescription: '',
  additionalInfo: '',
};

const validationSchema = Yup.object({
  primaryLanguage: Yup.string().required('Primary language is required'),
  languagesSpokenAtHome: Yup.string().required('Languages spoken at home are required'),
  preferredLanguageForCommunication: Yup.string().required('Preferred language for communication is required'),
  firstWordsAge: Yup.number().positive('Must be positive').integer('Must be an integer').required('First words age is required'),
  combiningWordsAge: Yup.number().positive('Must be positive').integer('Must be an integer').required('Combining words age is required'),
  fullSentencesAge: Yup.number().positive('Must be positive').integer('Must be an integer').required('Full sentences age is required'),
  isSpeechClear: Yup.string().required('Speech clarity status is required'),
  speechClarityDescription: Yup.string().when('isSpeechClear', {
    is: 'no',
    then: Yup.string().required('Speech clarity description is required'),
  }),
  understandsLanguage: Yup.string().required('Receptive language status is required'),
  languageUnderstandingDescription: Yup.string().when('understandsLanguage', {
    is: 'no',
    then: Yup.string().required('Language understanding description is required'),
  }),
  canFollowSimpleInstructions: Yup.string().required('Simple instructions status is required'),
  canFollowComplexInstructions: Yup.string().required('Complex instructions status is required'),
  expressionMethod: Yup.string().required('Expression method is required'),
  usesAppropriateGrammar: Yup.string().required('Grammatical skills status is required'),
  expressionDifficulties: Yup.string().when('usesAppropriateGrammar', {
    is: 'no',
    then: Yup.string().required('Expression difficulties description is required'),
  }),
  socialCommunicationDescription: Yup.string().required('Social communication description is required'),
  makeEyeContact: Yup.string().required('Eye contact status is required'),
  socialCommunicationDifficulties: Yup.string().when('makeEyeContact', {
    is: 'no',
    then: Yup.string().required('Social communication difficulties description is required'),
  }),
  usesNonverbalCommunication: Yup.string().required('Nonverbal communication status is required'),
  nonverbalCommunicationDifficulties: Yup.string().when('usesNonverbalCommunication', {
    is: 'no',
    then: Yup.string().required('Nonverbal communication difficulties description is required'),
  }),
  understandsPragmaticLanguage: Yup.string().required('Pragmatic language skills status is required'),
  pragmaticLanguageDifficulties: Yup.string().when('understandsPragmaticLanguage', {
    is: 'no',
    then: Yup.string().required('Pragmatic language difficulties description is required'),
  }),
  lettersRecognitionAge: Yup.number().positive('Must be positive').integer('Must be an integer').required('Letters recognition age is required'),
  readingAge: Yup.number().positive('Must be positive').integer('Must be an integer').required('Reading age is required'),
  writingAge: Yup.number().positive('Must be positive').integer('Must be an integer').required('Writing age is required'),
  readingWritingDifficulties: Yup.string().required('Reading and writing difficulties description is required'),
  hasBeenAssessed: Yup.string().required('Assessment status is required'),
  assessmentDescription: Yup.string().when('hasBeenAssessed', {
    is: 'yes',
    then: Yup.string().required('Assessment description is required'),
  }),
  receivesTherapy: Yup.string().required('Therapy status is required'),
  therapyDescription: Yup.string().when('receivesTherapy', {
    is: 'yes',
    then: Yup.string().required('Therapy description is required'),
  }),
  usesCommunicationTechnology: Yup.string().required('Communication technology status is required'),
  technologyDescription: Yup.string().when('usesCommunicationTechnology', {
    is: 'yes',
    then: Yup.string().required('Technology description is required'),
  }),
  additionalInfo: Yup.string(),
});

function LanguageCommunication() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Language and Communication</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <FormField
              label="Primary Language"
              name="primaryLanguage"
              type="text"
            />
            <FormField
              label="Languages Spoken at Home"
              name="languagesSpokenAtHome"
              type="text"
            />
            <FormField
              label="Preferred Language for Communication"
              name="preferredLanguageForCommunication"
              type="text"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Speech Development</h3>
            <FormField
              label="At what age did your child say their first words?"
              name="firstWordsAge"
              type="number"
              helperText="Enter the age in months."
            />
            <FormField
              label="At what age did your child start combining words?"
              name="combiningWordsAge"
              type="number"
              helperText="Enter the age in months."
            />
            <FormField
              label="At what age did your child start speaking in full sentences?"
              name="fullSentencesAge"
              type="number"
              helperText="Enter the age in months."
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Speech Clarity</h3>
            <FormField
              label="Is your child's speech clear to others?"
              name="isSpeechClear"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.isSpeechClear === 'no' && (
              <FormField
                label="If no, describe the difficulties"
                name="speechClarityDescription"
                type="textarea"
              />
            )}
            <h3 className="text-xl font-semibold mt-4 mb-2">Receptive Language</h3>
            <FormField
              label="Does your child understand spoken language?"
              name="understandsLanguage"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.understandsLanguage === 'no' && (
              <FormField
                label="Describe any difficulties with understanding language"
                name="languageUnderstandingDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Can your child follow simple instructions?"
              name="canFollowSimpleInstructions"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <FormField
              label="Can your child follow complex instructions?"
              name="canFollowComplexInstructions"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Expressive Language</h3>
            <FormField
              label="How does your child express themselves?"
              name="expressionMethod"
              type="textarea"
            />
            <FormField
              label="Does your child use appropriate grammar?"
              name="usesAppropriateGrammar"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.usesAppropriateGrammar === 'no' && (
              <FormField
                label="Describe any difficulties with expressing themselves"
                name="expressionDifficulties"
                type="textarea"
              />
            )}
            <h3 className="text-xl font-semibold mt-4 mb-2">Social Communication</h3>
            <FormField
              label="How does your child communicate socially?"
              name="socialCommunicationDescription"
              type="textarea"
            />
            <FormField
              label="Does your child make eye contact?"
              name="makeEyeContact"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.makeEyeContact === 'no' && (
              <FormField
                label="Describe any difficulties with social communication"
                name="socialCommunicationDifficulties"
                type="textarea"
              />
            )}
            <FormField
              label="Does your child use nonverbal communication (gestures, facial expressions)?"
              name="usesNonverbalCommunication"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.usesNonverbalCommunication === 'no' && (
              <FormField
                label="Describe any difficulties with nonverbal communication"
                name="nonverbalCommunicationDifficulties"
                type="textarea"
              />
            )}
            <FormField
              label="Does your child understand pragmatic language (social rules of language use)?"
              name="understandsPragmaticLanguage"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.understandsPragmaticLanguage === 'no' && (
              <FormField
                label="Describe any difficulties with pragmatic language"
                name="pragmaticLanguageDifficulties"
                type="textarea"
              />
            )}
            <h3 className="text-xl font-semibold mt-4 mb-2">Reading and Writing</h3>
            <FormField
              label="At what age did your child recognize letters?"
              name="lettersRecognitionAge"
              type="number"
              helperText="Enter the age in months."
            />
            <FormField
              label="At what age did your child start reading?"
              name="readingAge"
              type="number"
              helperText="Enter the age in months."
            />
            <FormField
              label="At what age did your child start writing?"
              name="writingAge"
              type="number"
              helperText="Enter the age in months."
            />
            <FormField
              label="Describe any difficulties with reading or writing"
              name="readingWritingDifficulties"
              type="textarea"
            />
            <h3 className="text-xl font-semibold mt-4 mb-2">Assessment and Therapy</h3>
            <FormField
              label="Has your child been assessed for language and communication difficulties?"
              name="hasBeenAssessed"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasBeenAssessed === 'yes' && (
              <FormField
                label="Describe the assessment findings"
                name="assessmentDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Does your child receive therapy for language or communication difficulties?"
              name="receivesTherapy"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.receivesTherapy === 'yes' && (
              <FormField
                label="Describe the therapy received"
                name="therapyDescription"
                type="textarea"
              />
            )}
            <h3 className="text-xl font-semibold mt-4 mb-2">Use of Communication Technology</h3>
            <FormField
              label="Does your child use communication technology (e.g., AAC devices)?"
              name="usesCommunicationTechnology"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.usesCommunicationTechnology === 'yes' && (
              <FormField
                label="Describe the technology used"
                name="technologyDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Additional Information"
              name="additionalInfo"
              type="textarea"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={formik.isSubmitting}
            >
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default LanguageCommunication;
