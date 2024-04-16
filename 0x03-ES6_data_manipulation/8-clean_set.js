export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !set || typeof startString !== 'string') return '';
  let result = '';
  for (const val of set) {
    if (val.startsWith(startString) && typeof val === 'string') {
      result += `${val.slice(startString.length)}-`;
    }
  }
  if (!set || !startString) return '';
  return result.slice(0, -1);
}
