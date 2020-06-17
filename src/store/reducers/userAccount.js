import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    userProfile : null,
    updatingProfile : false,
    updateProfileError : null,
    updatingBankAccount : false,
    updateBankAccountError : null,
    updatingUserType : false,
    updateUserTypeError : null,
    updatingApiSetting : false,
    updateApiSettingError : null,
    updatingNotificationSetting : false,
    updateNotificationSettingError : null,
    updatingPassword : false,
    updatePasswordError : null,
    addingMediaLink : false,
    addMediaLinkError : null,
    mediaLinksRemoving : new Set([]),
    removeMediaLinkError : null, 
}

const getUserProfileSuccess = (state, action) => {
    return updateObject( state, {
        userProfile : action.userProfile
    });
}

const updatingProfile = (state, action) => {
    return updateObject( state, {
        updatingProfile : true
    });
}

const updatedProfile = (state, action) => {
    return updateObject( state, {
        updatingProfile : false,
        updateProfileError : null
    });
}

const failedToUpdateProfile = (state, action) => {
    return updateObject( state, {
        updatingProfile : false,
        updateProfileError : action.error
    });
}

const updatingBankAccount = (state, action) => {
    return updateObject( state, {
        updatingBankAccount : true
    });
}

const updatedBankAccount = (state, action) => {
    return updateObject( state, {
        updatingBankAccount : false,
        updateBankAccountError : null
    });
}

const failedToUpdateBankAccount = (state, action) => {
    return updateObject( state, {
        updatingBankAccount : false,
        updateBankAccountError : action.error
    });
}

const updatingUserType = (state, action) => {
    return updateObject( state, {
        updatingUserType : true
    });
}

const updatedUserType = (state, action) => {
    return updateObject( state, {
        updatingUserType : false,
        updateUserTypeError : null
    });
}

const failedToUpdateUserType = (state, action) => {
    return updateObject( state, {
        updatingUserType : false,
        updateUserTypeError : action.error
    });
}

const updatingApiSetting = (state, action) => {
    return updateObject( state, {
        updatingApiSetting : true
    });
}

const updatedApiSetting = (state, action) => {
    return updateObject( state, {
        updatingApiSetting : false,
        updateApiSettingError : null
    });
}

const failedToUpdateApiSetting= (state, action) => {
    return updateObject( state, {
        updatingApiSetting : false,
        updateApiSettingError : action.error
    });
}

const updatingNotificationSetting = (state, action) => {
    return updateObject( state, {
        updatingNotificationSetting : true
    });
}

const updatedNotificationSetting = (state, action) => {
    return updateObject( state, {
        updatingNotificationSetting : false,
        updateNotificationSettingError : null
    });
}

const failedToUpdateNotificationSetting= (state, action) => {
    return updateObject( state, {
        updatingNotificationSetting : false,
        updateNotificationSettingError : action.error
    });
}

const updatingPassword = (state, action) => {
    return updateObject( state, {
        updatingPassword : true
    });
}

const updatedPassword = (state, action) => {
    return updateObject( state, {
        updatingPassword : false,
        updatePasswordError : null
    });
}

const failedToUpdatePassword = (state, action) => {
    return updateObject( state, {
        updatingPassword : false,
        updatePasswordError : action.error
    });
}

const addingMediaLink = (state, action) => {
    return updateObject( state, {
        addingMediaLink : true
    });
}

const addedMediaLink = (state, action) => {
    return updateObject( state, {
        addingMediaLink : false,
        addMediaLinkError : null
    });
}

const failedToAddMediaLink = (state, action) => {
    return updateObject( state, {
        addingMediaLink : false,
        addMediaLinkError : action.error
    });
}
const removingMediaLink = (state, action) => {
    const mediaLinksRemoving = new Set(state.mediaLinksRemoving)
    mediaLinksRemoving.add(action.mediaLinkId)
    return updateObject( state, {
        mediaLinksRemoving : mediaLinksRemoving
    });
}

const removedMediaLink = (state, action) => {
    const mediaLinksRemoving = new Set(state.mediaLinksRemoving)
    mediaLinksRemoving.delete(action.mediaLinkId)
    return updateObject( state, {
        mediaLinksRemoving : mediaLinksRemoving
    });
}

const failedToRemoveMediaLink = (state, action) => {
    const mediaLinksRemoving = new Set(state.mediaLinksRemoving)
    mediaLinksRemoving.delete(action.mediaLinkId)
    return updateObject( state, {
        mediaLinksRemoving : mediaLinksRemoving,
        removeMediaLinkError : action.error
    });
}


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_USER_PROFILE_SUCCESS: return getUserProfileSuccess(state, action);
        case actionTypes.UPDATING_PROFILE: return updatingProfile(state, action);
        case actionTypes.UPDATED_PROFILE: return updatedProfile(state, action);
        case actionTypes.FAILED_TO_UPDATE_PROFILE: return failedToUpdateProfile(state, action);
        case actionTypes.UPDATING_BANK_ACCOUNT: return updatingBankAccount(state, action);
        case actionTypes.UPDATED_BANK_ACCOUNT: return updatedBankAccount(state, action);
        case actionTypes.FAILED_TO_UPDATE_BANK_ACCOUNT: return failedToUpdateBankAccount(state, action);
        case actionTypes.UPDATING_USER_TYPE: return updatingUserType(state, action);
        case actionTypes.UPDATED_USER_TYPE: return updatedUserType(state, action);
        case actionTypes.FAILED_TO_UPDATE_USER_TYPE: return failedToUpdateUserType(state, action);
        case actionTypes.UPDATING_API_SETTING: return updatingApiSetting(state, action);
        case actionTypes.UPDATED_API_SETTING: return updatedApiSetting(state, action);
        case actionTypes.FAILED_TO_UPDATE_API_SETTING: return failedToUpdateApiSetting(state, action);
        case actionTypes.UPDATING_NOTIFICATION_SETTING: return updatingNotificationSetting(state, action);
        case actionTypes.UPDATED_NOTIFICATION_SETTING: return updatedNotificationSetting(state, action);
        case actionTypes.FAILED_TO_UPDATE_NOTIFICATION_SETTING: return failedToUpdateNotificationSetting(state, action);
        case actionTypes.UPDATING_PASSWORD: return updatingPassword(state, action);
        case actionTypes.UPDATED_PASSWORD: return updatedPassword(state, action);
        case actionTypes.FAILED_TO_UPDATE_PASSWORD: return failedToUpdatePassword(state, action);
        case actionTypes.ADDING_MEDIA_LINK: return addingMediaLink(state, action);
        case actionTypes.ADDED_MEDIA_LINK: return addedMediaLink(state, action);
        case actionTypes.FAILED_TO_ADD_MEDIA_LINK: return failedToAddMediaLink(state, action);
        case actionTypes.REMOVING_MEDIA_LINK: return removingMediaLink(state, action);
        case actionTypes.REMOVED_MEDIA_LINK: return removedMediaLink(state, action);
        case actionTypes.FAILED_TO_REMOVE_MEDIA_LINK: return failedToRemoveMediaLink(state, action);
        default:
            return state;
    }
};

export default reducer;