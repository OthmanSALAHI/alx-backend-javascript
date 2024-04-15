export default function updateStudentGradeByCity(students, city, newGrade) {
  return students.filter(({ location }) => location === city)
    .map((student) => {
      const studentGrade = newGrade.filter(({ id }) => student.id === id);
      let grade = 'N/A';
      if (studentGrade.length > 0) {
        grade = studentGrade[0] || 'N/A';
      }
      return { ...student, grade };
    });
}
