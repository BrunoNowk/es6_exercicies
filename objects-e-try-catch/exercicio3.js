// EXERCICIO 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const getKey = (lesson2, lesson3) => {
  const getTurno = Object.entries(lesson3);
  return Object.assign(lesson2, getTurno[3]);
};

console.log(getKey(lesson2, lesson3));

const getKeysLessons1 = (lesson1) => {
  return console.log(Object.keys(lesson1).length);
};

getKeysLessons1(lesson1);

const getValueForObject = (lesson3) => {
  return console.log(Object.values(lesson3));
};

getValueForObject(lesson3);

const allLessonsFunc = (lesson1, lesson2, lesson3) => {
  return Object.assign({}, { lesson1, lesson2, lesson3 });
};

console.log(allLessonsFunc(lesson1, lesson2, lesson3));
