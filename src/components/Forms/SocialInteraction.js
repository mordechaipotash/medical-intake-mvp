import React, { useState } from 'react';
import FormField from './FormField';

function SocialInteraction() {
  const [formData, setFormData] = useState({
    peerInteractions: '',
    hasFriends: '',
    friendshipDescription: '',
    adultInteractions: '',
    playBehavior: '',
    favoriteActivities: '',
    sharesToys: '',
    usesManners: '',
    socialSkillsDifficulties: '',
    responseToNewSituations: '',
    groupActivities: '',
    groupActivityTypes: '',
    emotionalExpression: '',
    emotionalConcerns: '',
    conflictHandling: '',
    peerRelationshipDifficulties: '',
    bullyingInvolvement: '',
    bullyingDescription: '',
    responseToAuthority: '',
    sensitiveSocialCues: '',
    socialCueDifficulties: '',
    showsEmpathy: '',
    empathyDescription: '',
    socialPreferences: '',
    communicationInSocialSettings: '',
    socialChallenges: '',
    parentalConcerns: '',
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
    console.log('Social Interaction Information submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Social Interaction</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h3 className="text-xl font-semibold mt-4 mb-2">Peer Interactions</h3>
        <FormField label="How does your child interact with peers?" name="peerInteractions" type="textarea" value={formData.peerInteractions} onChange={handleChange} helperText="Describe your child's interactions with peers." />
        <FormField label="Does your child have friends?" name="hasFriends" type="select" value={formData.hasFriends} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child has friends." />
        <FormField label="Describe your child's friendships" name="friendshipDescription" type="textarea" value={formData.friendshipDescription} onChange={handleChange} helperText="Provide details about your child's friendships." />

        <h3 className="text-xl font-semibold mt-4 mb-2">Adult Interactions</h3>
        <FormField label="How does your child interact with adults?" name="adultInteractions" type="textarea" value={formData.adultInteractions} onChange={handleChange} helperText="Describe your child's interactions with adults." />

        <h3 className="text-xl font-semibold mt-4 mb-2">Play Behavior</h3>
        <FormField label="Describe your child's play behavior" name="playBehavior" type="textarea" value={formData.playBehavior} onChange={handleChange} helperText="Describe how your child plays." />
        <FormField label="What are your child's favorite activities or toys?" name="favoriteActivities" type="textarea" value={formData.favoriteActivities} onChange={handleChange} helperText="List your child's favorite activities or toys." />
        <FormField label="Does your child share toys and take turns?" name="sharesToys" type="select" value={formData.sharesToys} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child shares toys and takes turns." />
        <FormField label="Does your child use appropriate manners?" name="usesManners" type="select" value={formData.usesManners} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child uses appropriate manners." />
        <FormField label="Describe any difficulties with social skills" name="socialSkillsDifficulties" type="textarea" value={formData.socialSkillsDifficulties} onChange={handleChange} helperText="Describe any social skills difficulties." />
        <FormField label="How does your child respond to new social situations?" name="responseToNewSituations" type="textarea" value={formData.responseToNewSituations} onChange={handleChange} helperText="Describe your child's response to new social situations." />
        <FormField label="Does your child participate in group activities?" name="groupActivities" type="select" value={formData.groupActivities} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child participates in group activities." />
        {formData.groupActivities === 'yes' && (
          <FormField label="Describe the group activities" name="groupActivityTypes" type="textarea" value={formData.groupActivityTypes} onChange={handleChange} helperText="Describe the types of group activities." />
        )}

        <h3 className="text-xl font-semibold mt-4 mb-2">Emotional Expression</h3>
        <FormField label="How does your child express emotions in social settings?" name="emotionalExpression" type="textarea" value={formData.emotionalExpression} onChange={handleChange} helperText="Describe how your child expresses emotions in social settings." />
        <FormField label="Any concerns with how your child handles emotions?" name="emotionalConcerns" type="textarea" value={formData.emotionalConcerns} onChange={handleChange} helperText="Describe any concerns with how your child handles emotions." />
        <FormField label="How does your child handle conflicts with peers?" name="conflictHandling" type="textarea" value={formData.conflictHandling} onChange={handleChange} helperText="Describe how your child handles conflicts with peers." />
        <FormField label="Does your child have any difficulties forming or maintaining peer relationships?" name="peerRelationshipDifficulties" type="textarea" value={formData.peerRelationshipDifficulties} onChange={handleChange} helperText="Describe any difficulties with peer relationships." />
        <FormField label="Has your child ever been involved in bullying, either as a victim or a perpetrator?" name="bullyingInvolvement" type="select" value={formData.bullyingInvolvement} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child has been involved in bullying." />
        {formData.bullyingInvolvement === 'yes' && (
          <FormField label="Describe the bullying situation" name="bullyingDescription" type="textarea" value={formData.bullyingDescription} onChange={handleChange} helperText="Describe the bullying situation." />
        )}

        <h3 className="text-xl font-semibold mt-4 mb-2">Social Cues and Empathy</h3>
        <FormField label="How does your child respond to authority figures?" name="responseToAuthority" type="textarea" value={formData.responseToAuthority} onChange={handleChange} helperText="Describe how your child responds to authority figures." />
        <FormField label="Is your child sensitive to social cues?" name="sensitiveSocialCues" type="select" value={formData.sensitiveSocialCues} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child is sensitive to social cues." />
        <FormField label="Describe any difficulties with social cues" name="socialCueDifficulties" type="textarea" value={formData.socialCueDifficulties} onChange={handleChange} helperText="Describe any difficulties with social cues." />
        <FormField label="Does your child show empathy and compassion towards others?" name="showsEmpathy" type="select" value={formData.showsEmpathy} onChange={handleChange} options={[{value: 'yes', label: 'Yes'}, {value: 'no', label: 'No'}]} helperText="Select if your child shows empathy." />
        <FormField label="Describe how your child demonstrates empathy" name="empathyDescription" type="textarea" value={formData.empathyDescription} onChange={handleChange} helperText="Describe how your child demonstrates empathy." />
        <FormField label="Does your child prefer to be alone or with others?" name="socialPreferences" type="select" value={formData.socialPreferences} onChange={handleChange} options={[{value: 'alone', label: 'Alone'}, {value: 'withOthers', label: 'With Others'}]} helperText="Select if your child prefers to be alone or with others." />
        <FormField label="How does your child communicate in social settings?" name="communicationInSocialSettings" type="textarea" value={formData.communicationInSocialSettings} onChange={handleChange} helperText="Describe how your child communicates in social settings." />
        <FormField label="Describe any social challenges your child faces" name="socialChallenges" type="textarea" value={formData.socialChallenges} onChange={handleChange} helperText="Describe any social challenges." />
        <FormField label="Do you have any concerns about your child's social interactions?" name="parentalConcerns" type="textarea" value={formData.parentalConcerns} onChange={handleChange} helperText="Describe any parental concerns." />
        <FormField label="Additional Information" name="additionalInfo" type="textarea" value={formData.additionalInfo} onChange={handleChange} helperText="Provide any additional social interaction information." />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
      </form>
    </div>
  );
}

export default SocialInteraction;
