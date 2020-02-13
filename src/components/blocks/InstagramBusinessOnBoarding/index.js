import React from 'react'
import PropTypes from 'prop-types'

import { FacebookButtonAlternate, InstagramButton } from 'components/blocks';


const InstagramBusinessOnBoarding = props => {
    return (
      <div className="instagram-page__main">
        <div className="instagram-page__main-content">
          <InstagramButton  onClick={() => {props.click(true)}}/>
          <FacebookButtonAlternate onClick={() => {props.click(true)}} />
        </div>
      </div>
    );
}

InstagramBusinessOnBoarding.propTypes = {
    click: PropTypes.func
}

export default InstagramBusinessOnBoarding;