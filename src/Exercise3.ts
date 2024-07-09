/*
Fix type errors in logPerson function.
logPerson function should accept both User and Admin
and should output relevant information according to the
input: occupation for User and role for Admin
*/

interface User {
    name: string;
    age: number;
    occupation: string
 }

 interface Admin {
    name: string;
    age: number;
    role: string
 }

 type Person1 = User | Admin;

 const persons1: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        role: 'CEO'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
 ]


function logPerson3(person: Person1){
 let additionalInfo: string;
 if('role' in person){
    additionalInfo = person.role
 } else{
    additionalInfo = person.occupation
 }
}

persons1.forEach(logPerson3);