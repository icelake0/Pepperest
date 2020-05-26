import PepperestAxios from '../../libs/utils/PepperestAxios'
import { UserAccount, UserAccountErrorMessages } from '../../libs/constants/PepperestWebServices';
import * as actionTypes from './actionTypes';

export const getUserProfile = (token, user) => {
    return dispatch => {
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        const params = {
            customerID : user.customerID,
        }
        PepperestAxios.get(UserAccount.PROFILEINFO, { params, headers })
        .then(response => {
            dispatch(getUserProfileSuccess(response.data.userProfile))
        })
        .catch(error => {})
    };
}

export const getUserProfileSuccess = (userProfile) => {
    return {
        type: actionTypes.GET_USER_PROFILE_SUCCESS,
        userProfile: userProfile
    };
}

export const updateProfile = (payLoad, token, user) => {
    return dispatch => {
        dispatch(updatingProfile());
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(UserAccount.UPDATE_PROFILE, payLoad, {headers: headers})
        .then( response => {
            const updatedUserProfile = response.data.userProfile;
            dispatch(updatedProfile());
            dispatch(getUserProfileSuccess(updatedUserProfile));
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                UserAccountErrorMessages.updateProfileFailed;
            dispatch(failedToUpdateProfile(error))
        });
    };
}

export const updatingProfile = () => {
    return {
        type: actionTypes.UPDATING_PROFILE,
    };
}

export const updatedProfile = () => {
    return {
        type: actionTypes.UPDATED_PROFILE,
    };
}

export const failedToUpdateProfile = (error) => {
    return {
        type: actionTypes.FAILED_TO_UPDATE_PROFILE,
        error : error
    };
}

export const updateBankAccount = (payLoad, token, user) => {
    return dispatch => {
        dispatch(updatingBankAccount());
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(UserAccount.UPDATE_BANK_ACCOUNT, payLoad, {headers: headers})
        .then( response => {
            const updatedUserProfile = response.data.userProfile;
            dispatch(updatedBankAccount());
            dispatch(getUserProfileSuccess(updatedUserProfile));
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                UserAccountErrorMessages.updateBankAccountFailed;
            dispatch(failedToUpdateBankAccount(error))
        });
    };
}

export const updatingBankAccount = () => {
    return {
        type: actionTypes.UPDATING_BANK_ACCOUNT,
    };
}

export const updatedBankAccount = () => {
    return {
        type: actionTypes.UPDATED_BANK_ACCOUNT,
    };
}

export const failedToUpdateBankAccount = (error) => {
    return {
        type: actionTypes.FAILED_TO_UPDATE_BANK_ACCOUNT,
        error : error
    };
}

export const updateUserType = (payLoad, token, user)  => {
    return dispatch => {
        dispatch(updatingUpdateUserType());
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(UserAccount.UPDATE_USER_TYPE, payLoad, {headers: headers})
        .then( response => {
            const updatedUserProfile = response.data.userProfile;
            dispatch(updatedUpdateUserType());
            dispatch(getUserProfileSuccess(updatedUserProfile));
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                UserAccountErrorMessages.updateUserTypeFailed;
            dispatch(failedToUpdateUpdateUserType(error))
        });
    };
}

export const updatingUpdateUserType = () => {
    return {
        type: actionTypes.UPDATING_USER_TYPE,
    };
}

export const updatedUpdateUserType = () => {
    return {
        type: actionTypes.UPDATED_USER_TYPE,
    };
}

export const failedToUpdateUpdateUserType = (error) => {
    return {
        type: actionTypes.FAILED_TO_UPDATE_USER_TYPE,
        error : error
    };
}

export const updateApiSetting = (payLoad, token, user)  => {
    return dispatch => {
        dispatch(updatingApiSetting());
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(UserAccount.UPDATE_API_SETTING, payLoad, {headers: headers})
        .then( response => {
            const updatedUserProfile = response.data.userProfile;
            dispatch(updatedApiSetting());
            dispatch(getUserProfileSuccess(updatedUserProfile));
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                UserAccountErrorMessages.updateApiSettingFailed;
            dispatch(failedToUpdateApiSetting(error))
        });
    };
}

export const updatingApiSetting = () => {
    return {
        type: actionTypes.UPDATING_API_SETTING,
    };
}

export const updatedApiSetting = () => {
    return {
        type: actionTypes.UPDATED_API_SETTING,
    };
}

export const failedToUpdateApiSetting = (error) => {
    return {
        type: actionTypes.FAILED_TO_UPDATE_API_SETTING,
        error : error
    };
}

export const updateNotificationSetting = (payLoad, token, user)  => {
    return dispatch => {
        dispatch(updatingNotificationSetting());
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        PepperestAxios.post(UserAccount.UPDATE_NOTIFICATION_SETTING, payLoad, {headers: headers})
        .then( response => {
            const updatedUserProfile = response.data.userProfile;
            dispatch(updatedNotificationSetting());
            dispatch(getUserProfileSuccess(updatedUserProfile));
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                UserAccountErrorMessages.updateNotificationSettingFailed;
            dispatch(failedToUpdateNotificationSetting(error))
        });
    };
}

export const updatingNotificationSetting = () => {
    return {
        type: actionTypes.UPDATING_NOTIFICATION_SETTING,
    };
}

export const updatedNotificationSetting = () => {
    return {
        type: actionTypes.UPDATED_NOTIFICATION_SETTING,
    };
}

export const failedToUpdateNotificationSetting = (error) => {
    return {
        type: actionTypes.FAILED_TO_UPDATE_NOTIFICATION_SETTING,
        error : error
    };
}

export const updatePassword = (payLoad, token, user)  => {
    return dispatch => {
        dispatch(updatingPassword());
        const headers = {
            Authorization : token,
            customerID : user.customerID
        }
        payLoad.customerID = user.customerID;
        payLoad.email = user.email; //TODO please remove this after backend change
        PepperestAxios.post(UserAccount.UPDATE_PASSWORD, payLoad, {headers: headers})
        .then( response => {
            dispatch(updatedPassword());
        })
        .catch( error => {
            error = error.response.data?.message ? 
                Object.values(error.response.data?.message).flat().join(' ') : 
                UserAccountErrorMessages.updatePasswordFailed;
            dispatch(failedToUpdatePassword(error))
        });
    };
}

export const updatingPassword = () => {
    return {
        type: actionTypes.UPDATING_PASSWORD,
    };
}

export const updatedPassword  = () => {
    return {
        type: actionTypes.UPDATED_PASSWORD,
    };
}

export const failedToUpdatePassword = (error) => {
    return {
        type: actionTypes.FAILED_TO_UPDATE_PASSWORD,
        error : error
    };
}
