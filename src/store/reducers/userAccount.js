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
        default:
            return state;
    }
};

export default reducer;