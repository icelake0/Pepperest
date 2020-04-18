import React from 'react';
import PropTypes from 'prop-types';
import { FooterListItem } from 'components/blocks';
import { getStringHash } from 'libs/utils';


const FooterList = ({ links }) => (
  <ul className="footer-list">
    {links
      && links.map(({ url, title, isLink }) => (isLink ? (
        <FooterListItem key={getStringHash()} url={url} title={title} />
      ) : (
        <li className="footer-list-item">{title}</li>
      )))}
  </ul>
);


FooterList.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default FooterList;
