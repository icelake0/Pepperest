import React from 'react';
import PropTypes from 'prop-types';
import { getAvatarSize } from 'libs/utils';

const Avatar = ({ avatarSize, imageUrl }) => (
  <div className={`avatar ${getAvatarSize(avatarSize)}`}>
    <img className="avatar-image" src={imageUrl} alt="user avatar" />
  </div>
);

Avatar.defaultProps = {
  avatarSize: ' ', // possibles sizes can be xs,md,lg , e.t.c
};

Avatar.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  avatarSize: PropTypes.string,
};

export default Avatar;
