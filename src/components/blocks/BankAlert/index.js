import React from 'react';

const BankAlert = () => (
  <div className="bank-alert">
    <div className="bank-alert-main">
      <svg xmlns="http://www.w3.org/2000/svg" className="bank-alert-icon" width="18" height="18" viewBox="0 0 18 18">
        <path fill="#904306" fillRule="nonzero" stroke="#9B3E00" strokeWidth=".5" d="M16.636 7.545A.363.363 0 0 0 17 7.183V5.728a.363.363 0 0 0-.178-.312L9.71 1.192c-.003-.003-.007-.004-.01-.006a1.41 1.41 0 0 0-1.408.005L1.178 5.416A.363.363 0 0 0 1 5.728v1.455c0 .2.163.362.364.362h1.09v6.546c-.802 0-1.454.652-1.454 1.455v1.09c0 .201.163.364.364.364h15.272a.363.363 0 0 0 .364-.364v-1.09c0-.803-.652-1.455-1.455-1.455V7.545h1.091zm-.363 8v.728H1.727v-.728c0-.4.327-.727.728-.727h13.09c.401 0 .728.327.728.727zM3.182 14.091V7.545h1.454v6.546H3.182zm2.182 0V7.545h2.181v6.546H5.364zm2.909 0V7.545h1.454v6.546H8.273zm2.182 0V7.545h2.181v6.546h-2.181zm2.909 0V7.545h1.454v6.546h-1.454zM1.727 6.818v-.884l6.925-4.113a.692.692 0 0 1 .69-.003l6.93 4.116v.884H1.728zM9 3.181c-.802 0-1.455.653-1.455 1.455 0 .803.653 1.456 1.455 1.456a1.457 1.457 0 0 0 0-2.91zm0 2.183a.729.729 0 0 1 0-1.456.729.729 0 0 1 0 1.456z" />
      </svg>
      
      <h6 className="bank-alert__message d-block d-lg-none">
        Add bank
      </h6>
      <h6 className="bank-alert__message d-none d-lg-block">
        Pepperest supports over 10,000 different financial institutions
      </h6>
    </div>
    <div className="bank-alert__action">Connect your bank</div>
  </div>
);

export default BankAlert;
