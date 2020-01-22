import React from 'react'
import PropTypes from 'prop-types'

const Avatar = props => (
    <div className={`avatar ${props.avatarSize === 'xs' ? 'avatar-xs' : ''}`}>
        <img className="avatar-image" src={props.imageUrl} alt="user avatar"/>
    </div>
);

Avatar.defaultProps = {
  avatarSize: 'xs' // possibles sizes can be xs,md,lg , e.t.c
};

Avatar.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    avatarSize: PropTypes.string.isRequired
}

export default Avatar;