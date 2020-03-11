import React from 'react';

const RequestLoanPage = () => (
  <div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Merchants requirements for a loan</h3>
        <span className="pcard-header-status">Processing</span>
      </div>
    </div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Verifying merchant details</h3>
        <span className="pcard-header-status">Processing</span>
      </div>
    </div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Fund Allocations</h3>
        <span className="pcard-header-status">Processing</span>
      </div>
    </div>
  </div>
);

export default RequestLoanPage;
