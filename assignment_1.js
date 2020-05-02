const students = [
    {
      name: 'Nam',
      age: 24,
      gender: 'male',
    },
    {
      name: 'Mai',
      age: 22,
      gender: 'female',
    },
    {
      name: 'Trang',
      age: 23,
      gender: 'female',
    },
    {
      name: 'An',
      age: 20,
      gender: 'male',
    },
    {
      name: 'Thien',
      age: 27,
      gender: 'male',
    },
  ];

const countStudent = (student_array) => {
    const result = {
        female: 0,
        male: 0
    }
    student_array.forEach(student => {
        if(student.gender === 'male') {
            result.male++;
        } else {
            result.female++;
        }
    });
    return result;
}

const listName = (student_array) => {
    return student_array.map( student => {
        return student.name;
    })
}

console.log(countStudent(students));
console.log(listName(students));