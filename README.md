# Javascript con ES6

Dados los siguientes arreglos de objetos completas la misión:

```JS
cons courses = [
{ _id: 1, title: "JavaScript I" },
{ _id: 2, title: "HTML y CSS I" },
]

const students = [
{ _id: 1, name: "Pedro Perez" },
{ _id: 2, name: "Maria Gomez" },
]

const enrollments = [
{ course_id: 1, student_id: 1 },
{ course_id: 2, student_id: 1 },
{ course_id: 2, student_id: 2 }
]
```

1.  Imprimir los cursos y los estudiantes de cada curso con el siguiente format:

```js
/* 
* JavaScript I
  - Pedro Perez

* HTML y CSS I
  - Pedro Perez
  - Maria Gomez 
  */
```

2.  Imprimir los estudiantes y los cursos a los que están matriculados con el siguiente formato:

```js
/* 
* Pedro Perez
  - JavaScript I
  - HTML y CSS I
* Maria Gomez
  - HTML y CSS I
  */
```
