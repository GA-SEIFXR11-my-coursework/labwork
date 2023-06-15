const users = [
    { id: 1, username: "Alpha", active: true,  age: 20 },
    { id: 2, username: "Bravo", active: false, age: 35 },
    { id: 3, username: "Echo", active: false, age: 14 },
    { id: 4, username: "Delta", active: true,  age: 18 },
    { id: 5, username: "Charlie", active: true,  age: 8 },
    { id: 6, username: "Echo", active: true,  age: 95 },
];

let activeUsers = users.filter((val)=>{
    return(val.active)
})

console.log(
    "All active users (will be array of objects)", 
    activeUsers,
    "\n"
)

console.log(
    "The ids of all users",
    users.map((val)=>{
        return(val.id)
    }),
    "\n"
)

console.log(
    "The usernames of all users 60 or above",
    users.filter((val)=>{
        return(val.age >= 60)
    })
    .map((val)=>{
        return(val.username)
    }),
    "\n"
)

// extensions

console.log(
    "The average (mean) age of all users",
    users.reduce((accumulator: number, next)=>{
        return(accumulator + next.age)
    },0)
    / users.length,
    "\n"
)



console.log(
    "The average (mean) age of all active users",
    activeUsers.reduce((accumulator: number, next)=>{
        return(accumulator + next.age)
    },0)
    / activeUsers.length,
    "\n"
)

console.log(
    "The id of the active user with the longest username",
    activeUsers.reduce((accumulator: string, next)=>{
        return(
            accumulator.length < next.username.length
                ? next.username
                : accumulator
        )
    }, ""),
    "\n"
)

console.log(
    "All users but with an additional property isMinor",
    users.map((val)=>{
        return({
            ...val,
            isMinor: (val.age < 18),
        })
    }),
    "\n"
)