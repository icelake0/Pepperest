import React from 'react';
import { withDefaultLayout } from 'components/layouts';
import { getStringHash } from 'libs/utils';

const config = {
  hasAlternateHeader: false,
  hasCommonHeader: true,
  showCart: false,
  commonHeaderTitle: "Secure Checkout",
  links: [],
  page: 'checkout',
};
const CheckoutPage = ({history}) => (
  <>
    <div className='checkout'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='pcard'>
            <div className='text--smaller text-font--medium'>My Address</div>
            <div className='d-flex flex-row align-items-center justify-content-between'>
              <p className='text--smaller text--gray'>
                30 Akinola str, yaba, Lagos
              </p>
              <div className='button button-md button--orange-outline'>
                Change Address
              </div>
            </div>
          </div>
          <div className='col-md-6 mx-auto mt-4'>
            <div className='button button-lg button--orange' onClick={() => { history.push('/confirm')}}>PLACE ORDER</div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='pcard checkout-summary'>
            <div className='pcard-header'>
              <h6 className='checkout-item-content__title text--smaller text-font--medium'>
                My Order Summary
              </h6>
              <p className='text--smaller'>8 Items</p>
            </div>
            <div className=''>
              <div className='checkout-item'>
                <div className='checkout-item-image__wrapper'>
                  <img
                    className='checkout-item-image'
                    src='assets/images/product.jpeg'
                    alt='product'
                  />
                </div>
                <div className='checkout-item-content'>
                  <h6 className='checkout-item-content__title text--smaller'>
                    Iya Remi Ina Ankara with two lace Payment Iya Remi Ina
                    Ankara with two lace Payment Iya Remi Ina Ankara with two
                    lace Payment Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className='d-flex flex-row justify-content-between align-items-center mt-2'>
                    <p className='text--smaller text-font--medium'>
                      NGN 18,500
                    </p>
                    <p className='text--smallest text--orange'>
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className='checkout-item'>
                <div className='checkout-item-image__wrapper'>
                  <img
                    className='checkout-item-image'
                    src='assets/images/product.jpeg'
                    alt='product'
                  />
                </div>
                <div className='checkout-item-content'>
                  <h6 className='checkout-item-content__title text--smaller'>
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className='d-flex flex-row justify-content-between align-items-center mt-2'>
                    <p className='text--smaller text-font--medium'>
                      NGN 18,500
                    </p>
                    <p className='text--smallest text--orange'>
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className='checkout-item'>
                <div className='checkout-item-image__wrapper'>
                  <img
                    className='checkout-item-image'
                    src='assets/images/product.jpeg'
                    alt='product'
                  />
                </div>
                <div className='checkout-item-content'>
                  <h6 className='checkout-item-content__title text--smaller'>
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className='d-flex flex-row justify-content-between align-items-center mt-2'>
                    <p className='text--smaller text-font--medium'>
                      NGN 18,500
                    </p>
                    <p className='text--smallest text--orange'>
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className='checkout-item'>
                <div className='checkout-item-image__wrapper'>
                  <img
                    className='checkout-item-image'
                    src='assets/images/product.jpeg'
                    alt='product'
                  />
                </div>
                <div className='checkout-item-content'>
                  <h6 className='checkout-item-content__title text--smaller'>
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className='d-flex flex-row justify-content-between align-items-center mt-2'>
                    <p className='text--smaller text-font--medium'>
                      NGN 18,500
                    </p>
                    <p className='text--smallest text--orange'>
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className='checkout-item'>
                <div className='checkout-item-image__wrapper'>
                  <img
                    className='checkout-item-image'
                    src='assets/images/product.jpeg'
                    alt='product'
                  />
                </div>
                <div className='checkout-item-content'>
                  <h6 className='checkout-item-content__title text--smaller'>
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className='d-flex flex-row justify-content-between align-items-center mt-2'>
                    <p className='text--smaller text-font--medium'>
                      NGN 18,500
                    </p>
                    <p className='text--smallest text--orange'>
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
              <div className='checkout-item'>
                <div className='checkout-item-image__wrapper'>
                  <img
                    className='checkout-item-image'
                    src='assets/images/product.jpeg'
                    alt='product'
                  />
                </div>
                <div className='checkout-item-content'>
                  <h6 className='checkout-item-content__title text--smaller'>
                    Iya Remi Ina Ankara with two lace Payment
                  </h6>
                  <div className='d-flex flex-row justify-content-between align-items-center mt-2'>
                    <p className='text--smaller text-font--medium'>
                      NGN 18,500
                    </p>
                    <p className='text--smallest text--orange'>
                      2 Delivery days
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='checkout-summary-base'>
              <h5 className='text--md text--silver text-font--medium text--bold'>
                Total:
              </h5>

              <p className='text--md text--bold text-font--medium'>
                NGN 108,500
              </p>
            </div>
          </div>
          <div className='d-flex flex-row align-items-center justify-content-center'>
            <p className='text--small text--silver text-font--medium text--bold'>
              Secure Checkout
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default withDefaultLayout(CheckoutPage, config);
