import { v4 as uuidv4 } from 'uuid';
/**
 * @description generates hash value for a provided value
 * @link https://stackoverflow.com/a/8831937/4398075
 * @param stringValue
 * @returns {number}
 */
// export const getStringHash = (stringValue) => {
//   let hash = 0;
//   if (stringValue.length === 0) {
//     return hash;
//   }
//   for (let i = 0; i < stringValue.length; i++) {
//     const char = stringValue.charCodeAt(i);
//     hash = (hash << 5) - hash + char;
//     hash &= hash; // Convert to 32bit integer
//   }
//   return hash;
// };

export const getStringHash = (stringValue = '') => uuidv4().match(/(\w?\d)/g).join('').substring(0, 16);

export const getAvatarSize = (size) => {
  switch (size) {
    case 'xs':
      return 'avatar-xs';
    case 'md':
      return 'avatar-md';
    default:
      return ' ';
  }
};


export const getStatusTextClass = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'text--pending';
    case 'closed':
      return 'text--closed';
    case 'open':
      return 'text--open';
    case 'awaiting':
      return 'text--awaiting';
    case 'flagged':
    case 'canceled':
      return 'text--flagged';
    case 'refund':
      return 'text--refund';
    case 'initial':
      return 'text--initial';
    case 'release':
    case 'shipped':
      return 'text--release';
    case 'stop':
      return 'text--stop';
    case 'fulfilled':
    case 'delivered':
      return 'text--fulfilled';
    case 'active':
      return 'text--active';
    case 'blocked':
      return 'text--blocked';
    case 'processing':
      return 'text--initial';
    case 'in transit':
      return 'text--open';
    default:
      return 'text--pending';
  }
};

export const getIndicatorClass = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'list-item__indicator-pending';
    case 'closed':
      return 'list-item__indicator-closed';
    case 'open':
      return 'list-item__indicator-open';
    case 'awaiting':
      return 'list-item__indicator-awaiting';
    case 'flagged':
    case 'canceled':
      return 'list-item__indicator-flagged';
    case 'refund':
      return 'list-item__indicator-refund';
    case 'initial':
      return 'list-item__indicator-initial';
    case 'release':
    case 'shipped':
      return 'list-item__indicator-release';
    case 'stop':
      return 'list-item__indicator-stop';
    case 'fulfilled':
    case 'delivered':
      return 'list-item__indicator-fulfilled';
    case 'active':
      return 'list-item__indicator-active';
    case 'blocked':
      return 'list-item__indicator-blocked';
    case 'processing':
      return 'list-item__indicator-initial';
    case 'in transit':
      return 'list-item__indicator-open';
    default:
      return 'list-item__indicator-pending';
  }
};


export const getStatusTagClass = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'list-item__status-tag--pending';
    case 'closed':
      return 'list-item__status-tag--closed';
    case 'open':
      return 'list-item__status-tag--open';
    case 'awaiting':
      return 'list-item__status-tag--awaiting';
    case 'flagged':
    case 'canceled':
      return 'list-item__status-tag--flagged';
    case 'refund':
      return 'list-item__status-tag--refund';
    case 'initial':
      return 'list-item__status-tag--initial';
    case 'release':
    case 'shipped':
      return 'list-item__status-tag--release';
    case 'stop':
      return 'list-item__status-tag--stop';
    case 'fulfilled':
    case 'delivered':
      return 'list-item__status-tag--fulfilled';
    case 'active':
      return 'list-item__status-tag--active';
    case 'blocked':
      return 'list-item__status-tag--blocked';
    case 'processing':
      return 'list-item__status-tag--initial';
    case 'in transit':
      return 'list-item__status-tag--open';
    default:
      return 'list-item__status-tag--pending';
  }
};

export const getStatusText = (status) => {
  switch (status.toLowerCase()) {
    case 'pending':
      return 'Pending';
    case 'closed':
      return 'Closed';
    case 'open':
      return 'Open';
    case 'awaiting':
      return 'Awaiting Payment';
    case 'flagged':
      return 'Flagged';
    case 'refund':
      return 'Refund';
    case 'initial':
      return 'Initial Payment';
    case 'release':
      return 'Release Payment';
    case 'stop':
      return 'Stop Payment';
    case 'fulfilled':
      return 'Fulfilled';
    case 'active':
      return 'Active';
    case 'blocked':
      return 'Blocked';
    case 'processing':
      return 'Processing';
    case 'in transit':
      return 'In Transit';
    case 'delivered':
      return 'Delivered';
    case 'canceled':
      return 'Canceled';
    case 'shipped':
      return 'Shipped';
    default:
      return '';
  }
};


export const getCamelCase = (value) => {
  const char = value.charAt(0).toUpperCase();
  const restOfString = value.substring(1, value.length);
  return `${char}${restOfString}`;
};

export {default as PepperestAxios} from './PepperestAxios';
