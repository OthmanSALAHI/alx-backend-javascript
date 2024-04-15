export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter(({ location }) => location === city)
    .map((student) => {
      const studentGrade = newGrade.filter(({ studentId }) => student.id === studentId);
      const { grade = 'N/A' } = studentGrade.length > 0 ? studentGrade[0] : {};
      return { ...student, grade };
    });
}
