export default {
    PROFILEINFO : '/EscrowBackend/api/userAccount/getProfileInfo',
    UPDATE_PROFILE : '/EscrowBackend/api/userAccount/modifyProfileInfo',
    UPDATE_BANK_ACCOUNT : '/EscrowBackend/api/userAccount/addBankAccount',
    UPDATE_USER_TYPE : '/EscrowBackend/api/userAccount/changeAccountType',
    UPDATE_API_SETTING: '/EscrowBackend/api/userAccount/changeAPIsetting',
    UPDATE_NOTIFICATION_SETTING: '/EscrowBackend/api/userAccount/changeNotificationSetting',
    UPDATE_PASSWORD: '/EscrowBackend/api/resetPassword',
}

export const ErrorMessages =
{
    getProfileInfoFailed : "We are currently unable to get your pfofile information",
    updateProfileFailed : 'We are currently unable to update your profile',
    updateBankAccountFailed : 'We are currently unable to update your Bank details',
    updateUserTypeFailed : 'We are currently unable to update your Account Type,',
    updateApiSettingFailed : 'We are currently unable to update your Api Setting',
    updateNotificationSettingFailed : 'We are currently unable to update your Notification setting',
    updatePasswordFailed : 'We are currently unable to effect your password change',
}
