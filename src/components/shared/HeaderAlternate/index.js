import React from 'react'
import PropTypes from 'prop-types' 
import {NavLinkAlternate} from 'components/blocks'
import { getStringHash} from 'libs/utils'

import { PepperestContext } from 'components/helpers/constant';


const HeaderAlternate = props => (
  <div className="nsHeader-alternate">
    <div className="nsHeader-main">
      <nav className="nsHeader-nav nsHeader-alternate-nav">
        {props.links.map(({ url, title }, index) => (
          <NavLinkAlternate
            key={getStringHash(title)}
            url={url}
            title={title}
          />
        ))}
      </nav>
      {props.hasButton ? (
        <PepperestContext.Consumer>
          {context => (
            <div className="button button-md button--orange" onClick={() => {context.updateShowModal(true);}}>
              Request Payment
            </div>
          )}
        </PepperestContext.Consumer>
      ) : null}
    </div>
  </div>
);

HeaderAlternate.defaultProps = {
  hasButton: true
};

HeaderAlternate.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  hasButton: PropTypes.bool
}
export default HeaderAlternate;