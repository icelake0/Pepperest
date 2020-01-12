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
