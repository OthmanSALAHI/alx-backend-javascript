export default function getStudentIdsSum(students) {
  return Array.isArray(students) ? students.reduce((acc, { id }) => acc + id, 0) : 0;
}
