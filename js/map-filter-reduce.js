const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];





// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

console.log(users.filter(user => user.languages.length >= 3));

// Use .map to create an array of strings where each element is a user's email address

// console.log(users.map(user => {
//     return user.email;
// }))

// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

let totalYearsExp = users.reduce((sum, user) => {
    return sum + user.yearsOfExperience;
}, 0)
let averageExp = totalYearsExp/users.length;

// Use reduce to get the longest email from the list of users.

console.log(users.reduce((longest, user) => {
    if (user.email.length > longest.length) return user.email;
    else return longest;
}, ""));

// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

console.log(users.reduce((message, user, i) => {
    if (i < users.length-1)
        return `${message} ${user.name},`
    else return `${message} and ${user.name}.`
},"Your instructors are: "))