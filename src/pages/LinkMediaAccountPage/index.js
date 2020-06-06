import React from 'react';
import { InputWithoutLabel } from 'components/blocks';
import { TrashIcon, SpinnerIcon } from 'components/vectors';
import { AddLinkMediaAccountForm } from 'components/forms'
import { connect } from 'react-redux';
import * as actions from 'store/actions/index';

const LinkMediaAccountPage = (props) => {
  const removeMediaLink = (linkId) => {
    const payLoad = {
      mediaLink_id:linkId
    };
    props.onRemoveMediaLink(props.token, props.user, payLoad);
  }

  return (
  <div>
    <div className="pcard">
      <div className="pcard-header">
        <h3 className="pcard-header__title">Link Media Account</h3>
      </div>
      <div className="pcard-body">
        {
          props.userProfile?.socialMedialLInks?.map((socialMedialLInks) => (
            <div className="row justify-item-center nsForm-control" key = {socialMedialLInks.id}>
              <div className="col-10 col-md-6 ml-md-auto">
                <InputWithoutLabel
                  name="link_account"
                  type="text"
                  placeholder=""
                  id="link_account"
                  value={socialMedialLInks.social_media_link}
                  onChange={() => {}}
                  classNames="nsForm-input__alternate"
                />
              </div>
              <div className="col-1 col-md-1 mr-md-auto d-flex flex-column justify-content-center">
              {
                props.mediaLinksRemoving?.has(socialMedialLInks.id) ? <SpinnerIcon />
                  :   <div onClick = {(event) => {removeMediaLink(socialMedialLInks.id)}}><TrashIcon /></div>
              }
              </div>
            </div>
          ))
        }
        <AddLinkMediaAccountForm />
      </div>
      <div className="pcard-footer">
        
      </div>
    </div>
  </div>
)};

const mapDispatchToProps = (dispatch) => ({
  onRemoveMediaLink: (token, user, payLoad) => dispatch(actions.removeMediaLink(token, user, payLoad)),
});

const mapStateToProps = state => {
    return {
      token: state.auth.token,
      user: state.auth.userInfo,
      userProfile: state.userAccount.userProfile,
      mediaLinksRemoving: state.userAccount.mediaLinksRemoving,
      error: state.userAccount.updateBankAccountError
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkMediaAccountPage);