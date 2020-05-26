/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { ProfileForm, ChangeAccountTypeForm, ChangePasswordForm } from 'components/forms'

const ProfilePage = (props) => (
  <div className="profile-settings">
    <ProfileForm />
    <ChangeAccountTypeForm />
    <ChangePasswordForm />
  </div>
);

export default ProfilePage;

