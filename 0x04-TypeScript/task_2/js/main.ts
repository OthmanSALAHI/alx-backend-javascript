interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee (salary: any) {
    return salary < 500 ? new Teacher() : new Director();
}

// console.log(createEmployee(200));
// console.log(createEmployee(600));
// console.log(createEmployee('$500'));

function isDirector (employee: DirectorInterface | TeacherInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork (employee: DirectorInterface | TeacherInterface ): string {
    let res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}

// console.log(executeWork(createEmployee(200)));
// console.log(executeWork(createEmployee(1700)));

type Subjects = "Math" | "History";

const teachClass =(todayClass :Subjects) : string => 
    todayClass === "Math" ? "Teaching Math" : "Teaching History";

console.log(teachClass('History'));