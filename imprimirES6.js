const courses = [
  { _id: 1, title: "JavaScript I" },
  { _id: 2, title: "HTML y CSS I" },
];

const students = [
  { _id: 1, name: "Pedro Perez" },
  { _id: 2, name: "Maria Gomez" },
];

const enrollments = [
  { course_id: 1, student_id: 1 },
  { course_id: 2, student_id: 1 },
  { course_id: 2, student_id: 2 },
];
console.log("***IMPRIME LOS ESTUDIANTES DEL CURSO***");
const imprimirCursos = (enrollmentsDB, coursesDB, studentsDB) => {
  const arrIdCurso = [coursesDB[0]._id, coursesDB[1]._id]; //crear un arreglo con los id de cada curso

  //para cada curso llama a la función que imprime todos los estudiantes del curso.
  arrIdCurso.forEach((element) =>
    imprimirUnCurso(element, enrollmentsDB, coursesDB, studentsDB)
  );

  /*   Esta función auxiliar imprime todas las personas asociadas a un curso: 
    1. requiere el id del curso 
    2. y pasa también los argumentos que entraron a imprimirCursos -es decir, la función que imprime todos los cursos-). */

  function imprimirUnCurso(
    idCurso,
    relacion,
    todosLosCursos,
    todosLosEstudiantes
  ) {
    const course = relacion.filter((item) => item.course_id === idCurso); //filtra los curso con el id de entrada (course_id) y quedan asociados los id de estudiantes
    //course: es un array que contiene objetos; con la forma [{id-curso: 1, id-estudiante: 1},{id-curso:1, id-estudiante:2}], es decir todos los id de estudiantes del curso 1.

    const targetCourse = todosLosCursos.filter(
      (item) => item._id === course[0].course_id
    ); //filtra el objeto curso con el id de entrada. Así se puede pedir que lea el nombre del curso asociado a ese id.
    //targetCourse es arreglo con un único objeto adentro: contiene el id y el nombre.
    console.log(`- ${targetCourse[0].title}`);

    //recordar que course tiene una lista de todos los estudiante asociado a un curso ya filtrado por id-curso.
    course.forEach((element) => {
      const targetStudent = todosLosEstudiantes.filter(
        (item) => item._id === element.student_id
      ); // filtra un único objeto estudiante y así se puede solicitar su nombre en la posición 0 de arreglo.
      console.log(`  * ${targetStudent[0].name}`);
    });
  }
};
imprimirCursos(enrollments, courses, students); //NOTA: la función no retorna nada, solamente ejecuta los console log para imprimir un listado.

console.log("***IMPRIME LOS CURSOS DE ESTUDIANTE***");
const imprimirEstudiantes = (enrollmentsDB, coursesDB, studentsDB) => {
  const arrIdEstudiante = [studentsDB[0]._id, studentsDB[1]._id];
  arrIdEstudiante.forEach((element) =>
    imprimirUnEstudiante(element, enrollmentsDB, coursesDB, studentsDB)
  );

  /*   Esta función auxiliar imprime todas las personas asociadas a un curso: 
    1. requiere el id del curso 
    2. y pasa también los argumentos que entraron a imprimirEstudiantes -es decir, la función que imprime todos los cursos-). */

  function imprimirUnEstudiante(
    idEstudiante,
    relacion,
    todosLosCursos,
    todosLosEstudiantes
  ) {
    const student = relacion.filter((item) => item.student_id === idEstudiante);

    const targetStudent = todosLosEstudiantes.filter(
      (item) => item._id === student[0].course_id
    );
    console.log(`- ${targetStudent[0].name}`);

    student.forEach((element) => {
      const targetCourse = todosLosCursos.filter(
        (item) => item._id === element.course_id
      );
      console.log(`  * ${targetCourse[0].title}`);
    });
  }
};
imprimirEstudiantes(enrollments, courses, students); //NOTA: la función no retorna nada, solamente ejecuta los console log para imprimir un listado.
