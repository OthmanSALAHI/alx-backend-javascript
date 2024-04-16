export default function getStudentsByLocation(students, city) {
    Array.isArray(students) ? students.filter(({ location }) => location === city) : [];
}