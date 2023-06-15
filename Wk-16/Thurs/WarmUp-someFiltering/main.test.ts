import Main, {typeUser, typeUser2} from './Main';

const users: typeUser[] = [
    { id: 1, username: "Alpha", active: true,  age: 20 },
    { id: 2, username: "Bravo", active: false, age: 35 },
    { id: 3, username: "Echo", active: false, age: 14 },
    { id: 4, username: "Delta", active: true,  age: 18 },
    { id: 5, username: "Charlie", active: true,  age: 8 },
    { id: 6, username: "Echo", active: true,  age: 95 },
];

describe("Unit testing each function in Main (filtering users)", () => {
    test("All active users (will be array of objects)", ()=>{
        expect(Main.getActiveUsers(users))
        .toEqual([
            { id: 1, username: "Alpha", active: true,  age: 20 },
            { id: 4, username: "Delta", active: true,  age: 18 },
            { id: 5, username: "Charlie", active: true,  age: 8 },
            { id: 6, username: "Echo", active: true,  age: 95 },
        ]);
    });
    test("The ids of all users", ()=>{
        expect(Main.getIdsOfAllUsers(users))
        .toEqual([1,2,3,4,5,6]);
    })
    test("The usernames of all users 60 or above", ()=>{
        expect(Main.getUsernamesOfUsersOver60(users))
        .toEqual(["Echo"]);
    })
    test("The average (mean) age of all users", ()=>{
        expect(Main.getMeanAgeOfAllUsers(users))
        .toEqual((20+35+14+18+8+95)/6);
    })
    test("The average (mean) age of all active users", ()=>{
        expect(Main.getMeanAgeOfActiveUsers(users))
        .toEqual((20+18+8+95)/4);
    })
    test("The id of the active user with the longest username", ()=>{
        expect(Main.getIdOfActiveUserWithTheLongestUsername(users))
        .toEqual(5)
    })
    test("All users but with an additional property isMinor", ()=>{
        expect(Main.getUsers_addAddtionalProp_isMinor(users))
        .toEqual([
            { id: 1, username: "Alpha", active: true,  age: 20, isMinor: false },
            { id: 2, username: "Bravo", active: false, age: 35, isMinor: false },
            { id: 3, username: "Echo", active: false, age: 14, isMinor: true },
            { id: 4, username: "Delta", active: true,  age: 18, isMinor: false },
            { id: 5, username: "Charlie", active: true,  age: 8, isMinor: true },
            { id: 6, username: "Echo", active: true,  age: 95, isMinor: false },
        ])
    })
})
