export default function getStudentsByLocation(students, city) {
  return Array.isArray(students) ? students.filter(({ location }) => location === city) : [];
}
