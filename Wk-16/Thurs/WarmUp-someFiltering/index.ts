import Main, {users} from "./Main"

console.log(
    "All active users (will be array of objects)",
    Main.getActiveUsers(users),
    "\n"
)
console.log(
    "The ids of all users",
    Main.getIdsOfAllUsers(users),
    "\n"
)
console.log(
    "The usernames of all users 60 or above",
    Main.getUsernamesOfUsersOver60(users),
    "\n"
)
// extensions
console.log(
    "The average (mean) age of all users",
    Main.getMeanAgeOfAllUsers(users),
    "\n"
)
console.log(
    "The average (mean) age of all active users",
    Main.getMeanAgeOfActiveUsers(users),
    "\n"
)
console.log(
    "The id of the active user with the longest username",
    Main.getIdOfActiveUserWithTheLongestUsername(users),
    "\n"
)
console.log(
    "All users but with an additional property isMinor",
    Main.getUsers_addAddtionalProp_isMinor(users),
    "\n"
)