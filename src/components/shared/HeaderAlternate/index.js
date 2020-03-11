/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'components/blocks';
import { getStringHash, getCamelCase } from 'libs/utils';
import { DownChevron } from 'components/vectors';

import { PepperestContext } from 'components/helpers/constant';


const HeaderAlternate = ({ page, links, location }) => {
  const getPathName = () => {
    const { pathname } = location;
    const indexOfLastSlash = pathname.lastIndexOf('/');
    return pathname.substring(indexOfLastSlash + 1, pathname.length);
  };

  return (
    <div className="nsHeader-alternate">
      <div className="nsHeader-main">
        <nav className="nsHeader-nav nsHeader-alternate-nav">
          {links.map(({ url, title }, index) => (
            <NavLink
              key={getStringHash(title)}
              url={url}
              title={title}
              classNames="nsHeader-nav__item nsHeader-alternate-nav__item"
              exact
            />
          ))}
        </nav>
        <h3 className="nsHeader-nav__current-link">{getCamelCase(getPathName())}</h3>
        {page.toLowerCase() === 'payments' ? (
          <PepperestContext.Consumer>
            {(context) => (
              <div
                className="button button-md button--orange"
                onClick={() => {
                  context.updateShowPaymentModal(true);
                }}
              >
                Request Payment
              </div>
            )}
          </PepperestContext.Consumer>
        ) : (
          <PepperestContext.Consumer>
            {(context) => (
              <div
                className="button button-md button--orange"
                onClick={() => {
                  context.updateShowProductModal(true);
                }}
              >
                Add Product / Services
              </div>
            )}
          </PepperestContext.Consumer>
        )}
        <DownChevron />
      </div>
    </div>
  );
};
HeaderAlternate.defaultProps = {
  // isPaymentButton:
};

HeaderAlternate.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  page: PropTypes.string.isRequired,
};

export default HeaderAlternate;
