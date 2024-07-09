/** Given the data, define the interface "User" and use it accordingly. 
 */
interface User{
    name: string;
    age: number;
    occupation: string
}

const users: User[] = [
    {
        name:'Max Mustermann',
        age: 25,
        occupation: 'Developer'
    },
    {
        name:'Ange',
        age: 24,
        occupation: 'Nurse'
    }
];

function logPerson(user: User):void{
    console.log(`- ${user.name}, ${user.age}`);
}

console.log(`Users: `);
users.forEach(logPerson)
