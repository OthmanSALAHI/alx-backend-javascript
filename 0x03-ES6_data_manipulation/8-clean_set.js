export default function cleanSet(set, startString) {
  let result = '';
  for (const val of set) {
    if (val.startsWith(startString)) {
      result += `${val.slice(startString.length)}-`;
    }
  }
  return startString ? result.slice(0, -1) : '';
}
