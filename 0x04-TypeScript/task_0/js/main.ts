interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 22,
    location: 'New York'
}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 21,
    location: 'California'
}

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th1 = document.createElement('th');
th1.textContent = 'First Name';

const th2 = document.createElement('th');
th2.textContent = 'Last Name';

const th3 = document.createElement('th');
th3.textContent = 'Age';

const th4 = document.createElement('th');
th4.textContent = 'Location';

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);

studentsList.forEach(student => {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const td1 = document.createElement('td');
    td1.textContent = student.firstName;

    const td2 = document.createElement('td');
    td2.textContent = student.lastName;

    const td3 = document.createElement('td');
    td3.textContent = student.age.toString();

    const td4 = document.createElement('td');
    td4.textContent = student.location;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
});

// Path: 0x04-TypeScript/task_0/js/main.ts
