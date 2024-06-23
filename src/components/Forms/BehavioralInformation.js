
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormField from './FormField'; // Adjust this import path as needed

const initialValues = {
  behavioralConcerns: '',
  peerInteraction: '',
  hasFriends: '',
  friendshipDescription: '',
  adultInteraction: '',
  temperament: '',
  isOverlySensitive: '',
  emotionHandling: '',
  selfEsteem: '',
  hasAttentionIssues: '',
  attentionConcerns: '',
  hasImpulseControl: '',
  impulsiveDescription: '',
  hasAnxiety: '',
  anxietyDescription: '',
  behavioralPatterns: '',
  hasDisciplinaryActions: '',
  disciplinaryActionsDescription: '',
  copingStrategies: '',
  stressors: '',
  hasBehavioralSupport: '',
  behavioralSupportDescription: '',
  isSleepBehaviorConnected: '',
  sleepBehaviorDescription: '',
  hasBehavioralChanges: '',
  behavioralChangesDescription: '',
  additionalBehavioralInfo: '',
};

const validationSchema = Yup.object({
  behavioralConcerns: Yup.string().required('Behavioral concerns are required'),
  peerInteraction: Yup.string().required('Peer interaction description is required'),
  hasFriends: Yup.string().required('Friends status is required'),
  friendshipDescription: Yup.string().when('hasFriends', {
    is: 'yes',
    then: Yup.string().required('Friendship description is required'),
  }),
  adultInteraction: Yup.string().required('Adult interaction description is required'),
  temperament: Yup.string().required('Temperament description is required'),
  isOverlySensitive: Yup.string().required('Sensitivity status is required'),
  emotionHandling: Yup.string().when('isOverlySensitive', {
    is: 'yes',
    then: Yup.string().required('Emotion handling description is required'),
  }),
  selfEsteem: Yup.string().required('Self-esteem description is required'),
  hasAttentionIssues: Yup.string().required('Attention issues status is required'),
  attentionConcerns: Yup.string().when('hasAttentionIssues', {
    is: 'yes',
    then: Yup.string().required('Attention concerns description is required'),
  }),
  hasImpulseControl: Yup.string().required('Impulse control status is required'),
  impulsiveDescription: Yup.string().when('hasImpulseControl', {
    is: 'yes',
    then: Yup.string().required('Impulse control description is required'),
  }),
  hasAnxiety: Yup.string().required('Anxiety status is required'),
  anxietyDescription: Yup.string().when('hasAnxiety', {
    is: 'yes',
    then: Yup.string().required('Anxiety description is required'),
  }),
  behavioralPatterns: Yup.string().required('Behavioral patterns description is required'),
  hasDisciplinaryActions: Yup.string().required('Disciplinary actions status is required'),
  disciplinaryActionsDescription: Yup.string().when('hasDisciplinaryActions', {
    is: 'yes',
    then: Yup.string().required('Disciplinary actions description is required'),
  }),
  copingStrategies: Yup.string().required('Coping strategies description is required'),
  stressors: Yup.string().required('Stressors description is required'),
  hasBehavioralSupport: Yup.string().required('Behavioral support status is required'),
  behavioralSupportDescription: Yup.string().when('hasBehavioralSupport', {
    is: 'yes',
    then: Yup.string().required('Behavioral support description is required'),
  }),
  isSleepBehaviorConnected: Yup.string().required('Sleep and behavior connection status is required'),
  sleepBehaviorDescription: Yup.string().when('isSleepBehaviorConnected', {
    is: 'yes',
    then: Yup.string().required('Sleep and behavior description is required'),
  }),
  hasBehavioralChanges: Yup.string().required('Behavioral changes status is required'),
  behavioralChangesDescription: Yup.string().when('hasBehavioralChanges', {
    is: 'yes',
    then: Yup.string().required('Behavioral changes description is required'),
  }),
  additionalBehavioralInfo: Yup.string(),
});

function BehavioralInformation() {
  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Behavioral Information</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <FormField
              label="Behavioral Concerns"
              name="behavioralConcerns"
              type="textarea"
              helperText="Describe any behavioral concerns you have about your child."
            />
            <FormField
              label="Interaction with Peers"
              name="peerInteraction"
              type="textarea"
              helperText="How does your child interact with peers?"
            />
            <FormField
              label="Does your child have friends?"
              name="hasFriends"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasFriends === 'yes' && (
              <FormField
                label="Describe your child's friendships"
                name="friendshipDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Interaction with Adults"
              name="adultInteraction"
              type="textarea"
              helperText="How does your child interact with adults?"
            />
            <FormField
              label="Temperament"
              name="temperament"
              type="textarea"
              helperText="Describe your child's temperament."
            />
            <FormField
              label="Is your child overly sensitive or emotional?"
              name="isOverlySensitive"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.isOverlySensitive === 'yes' && (
              <FormField
                label="Describe how your child handles emotions"
                name="emotionHandling"
                type="textarea"
              />
            )}
            <FormField
              label="How would you describe your child's self-esteem?"
              name="selfEsteem"
              type="textarea"
            />
            <FormField
              label="Does your child have trouble paying attention or staying focused?"
              name="hasAttentionIssues"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasAttentionIssues === 'yes' && (
              <FormField
                label="Describe any concerns with attention or focus"
                name="attentionConcerns"
                type="textarea"
              />
            )}
            <FormField
              label="Does your child have difficulty controlling impulses?"
              name="hasImpulseControl"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasImpulseControl === 'yes' && (
              <FormField
                label="Describe any concerns with impulse control"
                name="impulsiveDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Does your child exhibit signs of anxiety or have specific fears?"
              name="hasAnxiety"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasAnxiety === 'yes' && (
              <FormField
                label="Describe any anxiety or fears"
                name="anxietyDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Describe any patterns in your child's behavior"
              name="behavioralPatterns"
              type="textarea"
            />
            <FormField
              label="Have there been any disciplinary actions taken at school or at home?"
              name="hasDisciplinaryActions"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasDisciplinaryActions === 'yes' && (
              <FormField
                label="Describe the disciplinary actions and outcomes"
                name="disciplinaryActionsDescription"
                type="textarea"
              />
            )}
            <FormField
              label="What coping strategies does your child use?"
              name="copingStrategies"
              type="textarea"
            />
            <FormField
              label="Identify any known stressors in your child's life"
              name="stressors"
              type="textarea"
            />
            <FormField
              label="Is your child receiving any behavioral support or therapy?"
              name="hasBehavioralSupport"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasBehavioralSupport === 'yes' && (
              <FormField
                label="Describe the support or therapy"
                name="behavioralSupportDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Does your child's behavior change with sleep patterns?"
              name="isSleepBehaviorConnected"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.isSleepBehaviorConnected === 'yes' && (
              <FormField
                label="Describe any connections between sleep and behavior"
                name="sleepBehaviorDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Have there been any recent changes in your child's behavior?"
              name="hasBehavioralChanges"
              type="select"
              options={[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
              ]}
            />
            {formik.values.hasBehavioralChanges === 'yes' && (
              <FormField
                label="Describe the changes and possible reasons"
                name="behavioralChangesDescription"
                type="textarea"
              />
            )}
            <FormField
              label="Additional Behavioral Information"
              name="additionalBehavioralInfo"
              type="textarea"
              helperText="Is there anything else you would like to share about your child's behavior?"
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

export default BehavioralInformation;
