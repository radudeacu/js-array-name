// 1. Write code to get array of names from given array of users
// 2. Get back only active users
// 3. Sort users by age descending

const users = [
    {
        id: 1,
        name: "Jack",
        isActive: true,
    },
    {
        id: 2,
        name: "John",
        isActive: true,
    },
    {
        id: 3,
        name: "Mike",
        isActive: false,
    },
];


console.log("Original Array: " + JSON.stringify(users));

// (Best Implementation)

const names = users.filter(user => user.isActive).map(user => user.name);

console.log("%c" + JSON.stringify(names), "color: orange;");





// basic step by step implementation

// let names = [];

// for (let i = 0; i < users.length; i++) {
//     names.push(users[i].name);
// }

// console.log("%c" + JSON.stringify(names), "color: orange;");


// or 

// let names = [];
// users.forEach((user) => {
//     names.push(user.name);
// });
// console.log("%c" + JSON.stringify(names), "color: orange;");


