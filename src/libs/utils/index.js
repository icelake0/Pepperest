/**
 * @description generates hash value for a provided value
 * @link https://stackoverflow.com/a/8831937/4398075
 * @param stringValue
 * @returns {number}
 */
export const getStringHash = stringValue => {
  let hash = 0;
  if (stringValue.length === 0) {
    return hash;
  }
  for (let i = 0; i < stringValue.length; i++) {
    let char = stringValue.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};


export const getStatusTextClass = status => {
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
      return 'text--flagged';
    case 'refund':
      return 'text--refund';
    case 'initial':
      return 'text--initial';
    case 'release':
      return 'text--release';
    case 'stop':
      return 'text--stop';
    case 'fulfilled':
      return 'text--fulfilled';
    case 'active':
      return 'text--active';
    case 'blocked':
      return 'text--blocked';
    default:
      return 'text--pending';
  }
}

export const getIndicatorClass = status => {
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
      return 'list-item__indicator-flagged';
    case 'refund':
      return 'list-item__indicator-refund';
    case 'initial':
      return 'list-item__indicator-initial';
    case 'release':
      return 'list-item__indicator-release';
    case 'stop':
      return 'list-item__indicator-stop';
    case 'fulfilled':
      return 'list-item__indicator-fulfilled';
    case 'active':
      return 'list-item__indicator-active';
    case 'blocked':
      return 'list-item__indicator-blocked';
    default:
      return 'list-item__indicator-pending';
  }
};


export const getStatusTagClass = status => {
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
      return 'list-item__status-tag--flagged';
    case 'refund':
      return 'list-item__status-tag--refund';
    case 'initial':
      return 'list-item__status-tag--initial';
    case 'release':
      return 'list-item__status-tag--release';
    case 'stop':
      return 'list-item__status-tag--stop';
    case 'fulfilled':
      return 'list-item__status-tag--fulfilled';
    case 'active':
      return 'list-item__status-tag--active';
    case 'blocked':
      return 'list-item__status-tag--blocked';
    default:
      return 'list-item__status-tag--pending';
  }
}

export const getStatusText = status => {
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
    default:
      return '';
  }
};
