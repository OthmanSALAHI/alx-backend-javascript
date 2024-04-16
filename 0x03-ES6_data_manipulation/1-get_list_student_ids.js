export default function getListStudentIds(students) {
  return typeof (students) === 'object' ? students.map(({ id }) => id) : [];
}
