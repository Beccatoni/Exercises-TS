/**
 Type "Person" is missing, please define it and use it in persons
 array and logPerson function in order to fix
 all the TS errors
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

 type Person = User | Admin;

 const persons: Person[] = [
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


 function logPerson2(user: Person){
    console.log(`- ${user.name}, ${user.age}`);
}
persons.forEach(logPerson2);