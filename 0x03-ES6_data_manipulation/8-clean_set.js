export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString === '') return '';

  let result = '';

  for (const val of set) {
    if (typeof val === 'string' && val.startsWith(startString)) {
      result += `${val.slice(startString.length)}-`;
    }
  }

  if (result !== '') {
    return result.slice(0, -1);
  }
  return '';
}
