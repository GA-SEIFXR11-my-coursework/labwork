export type typeUser = { id: number, username: string, active: boolean, age: number };
export type typeUser2 = typeUser & { isMinor: boolean }

export const users: typeUser[] = [
    { id: 1, username: "Alpha", active: true,  age: 20 },
    { id: 2, username: "Bravo", active: false, age: 35 },
    { id: 3, username: "Echo", active: false, age: 14 },
    { id: 4, username: "Delta", active: true,  age: 18 },
    { id: 5, username: "Charlie", active: true,  age: 8 },
    { id: 6, username: "Echo", active: true,  age: 95 },
];

export default class Main{
    // All active users (will be array of objects
    static getActiveUsers(users: typeUser[]){ return(
        users.filter((val)=>{
            return(val.active)
        })
    )}

    // The ids of all users
    static getIdsOfAllUsers(users: typeUser[]){ return(
        users.map((val)=>{
            return(val.id)
        })
    )}

    // The usernames of all users 60 or above
    static getUsernamesOfUsersOver60(users: typeUser[]){ return(
        users.filter((val)=>{
            return(val.age >= 60)
        })
        .map((val)=>{
            return(val.username)
        })
    )}

    // The average (mean) age of all users
    static getMeanAgeOfAllUsers(users: typeUser[]){return(
        users
        .reduce((accumulator: number, next)=>{
            return(accumulator + next.age)
        },0)
        / users.length
    )}

    // The average (mean) age of all active users
    static getMeanAgeOfActiveUsers(users: typeUser[]){
        let activeUsers = this.getActiveUsers(users);
        return(
            activeUsers
            .reduce((accumulator: number, next)=>{
                return(accumulator + next.age)
            },0)
            / activeUsers.length
        )
    }

    // The id of the active user with the longest username
    static getIdOfActiveUserWithTheLongestUsername(users: typeUser[]){
        let activeUsers = this.getActiveUsers(users);
        return(
            activeUsers
            .reduce((accumulator, next)=>{return(
                accumulator.username.length < next.username.length
                ? next
                : accumulator
            )})
            .id
        )
    }

    // All users but with an additional property isMinor
    static getUsers_addAddtionalProp_isMinor(users: typeUser[]): typeUser2[]{ return(
        users
        .map((val)=>{return(
            {
                ...val,
                isMinor: (val.age < 18),
            }
        )})
    )}

}
