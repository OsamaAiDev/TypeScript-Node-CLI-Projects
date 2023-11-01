class School {
    students: Student[] = [];
    teachers: Teacher[] = [];
    addStudent(student: Student){
        this.students.push(student);
    }
    addTeacher(teacher: Teacher){
        this.teachers.push(teacher);
    }

    constructor(public name: string) {
        
    }
}

class Student {
    id: number = 1;
    
    constructor(public name: string, public age: number, public schoolName: string){

    }
}

class Teacher extends Student {}

let school1 = new School("Alpha");
let school2 = new School("Rafi public school");

// register students
let student1 = new Student("Osama", 26, school1.name);
let student2 = new Student("Bilal", 28, school1.name);
let student3 = new Student("Ali", 15, school2.name);

// register teachers
let t1 = new Teacher("Hamzah", 25, school1.name);
let t2 = new Teacher("Zia", 75, school1.name);
let t3 = new Teacher("Adil", 40, school2.name);

// add Students
school1.addStudent(student1);
school1.addStudent(student2);
school2.addStudent(student3);

// add Teachers
school1.addTeacher(t1);
school1.addTeacher(t2);
school2.addTeacher(t3);