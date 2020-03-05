import React from 'react';
import PropTypes from 'prop-types';

const FeatureListItem = ({ value }) => (
  <li className="auth-register__info-section-feature__list-item">
    <svg
      className="auth-register__info-section-feature__list-item__icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" fillRule="evenodd">
        <circle cx="12" cy="12" r="12" fill="#FFF" />
        <path
          fill="#FF6900"
          fillRule="nonzero"
          d="M11.621 14.692a.93.93 0 0 1-1.313 0l-2.036-2.035a.929.929 0 1 1 1.314-1.314l1.213 1.213c.091.091.24.091.331 0l3.284-3.284a.93.93 0 0 1 1.314 1.314l-4.107 4.106z"
        />
      </g>
    </svg>
    <span>{value}</span>
  </li>
);

FeatureListItem.propTypes = {
  value: PropTypes.string.isRequired,
};

export default FeatureListItem;
