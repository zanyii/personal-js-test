// for of

// for in
// filter
// find
// findIndex
// map
// reduce
// every
// some
// entries
// fromEntries
// includes
// splice
// slice
// concat
    
const users = [
    { name: 'zanyaihtet', age: 24 },
    { name: 'waiyan', age: 21 },
    { name: 'meme', age: 14 },
    { name: 'popo', age: 30 },
    { name: 'luhla', age: 18 },
    { name: 'thawtar', age: 9 }
]
console.log("🚀 ~ file: index.js:9 ~ users:", users)

for (let user of users) {
    console.log("🚀 ~ file: index.js:12 ~ user:", user)
}

const user = users[0]
for (let userProp in user) {
    console.log("🚀 ~ file: index.js:17 ~ userProp:", userProp, user[userProp])
}

const filteredUsers = users.filter(user => {
    return user.age > 18
})
console.log("🚀 ~ file: index.js:22 ~ filteredUsers ~ filteredUsers:", filteredUsers)

const foundUser = users.find(user => {
    return user.age < 0
})
console.log("🚀 ~ file: index.js:27 ~ foundUser ~ foundUser:", foundUser)

const foundIndex = users.findIndex(user => {
    return user.name === 'popo'
})
console.log("🚀 ~ file: index.js:32 ~ foundIndex ~ foundIndex:", foundIndex)

const names = users.map(user => {
    return user.description = `${user.name} is ${user.age} years old.`;
})
console.log("🚀 ~ file: index.js:37 ~ names ~ names:", names)

const keyUsers = users.reduce((acc, user) => {
    if (user.age < 18) {
        return acc;
    }
    acc[user.name] = user;
    return acc;
}, {})
console.log("🚀 ~ file: index.js:43 ~ keyUsers ~ keyUsers:", keyUsers)

const areAllKid = users.every(user => user.age < 10)
const areAllYoung = users.every(user => user.age < 40)
console.log("🚀 ~ file: index.js:51 ~ areAllYoung:", areAllYoung)
console.log("🚀 ~ file: index.js:50 ~ areAllKid:", areAllKid)

const hasKids = users.some(user => user.age < 10)
console.log("🚀 ~ file: index.js:55 ~ hasKids:", hasKids)


const userEntry = users[0]
const entries = Object.entries(userEntry);
console.log("🚀 ~ file: index.js:60 ~ entries:", entries)
console.log("🚀 ~ file: index.js:60 ~ entries:", Object.fromEntries(entries))

const colors = ['red', 'purple', 'green', 'yellow', 'white', 'black', 'orange', 'blue']
console.log("🚀 ~ file: index.js:64 ~ colors:", colors)
console.log("🚀 ~ file: index.js:64 ~ colors:", colors.includes('green', 'red'))

// const newColors = colors.splice(2,2)
// console.log("🚀 ~ file: index.js:64 ~ colors:", colors)
// console.log("🚀 ~ file: index.js:67 ~ newColors:", newColors)

const newSliceColors = colors.slice(2, 3)
console.log("🚀 ~ file: index.js:71 ~ newSliceColors:", newSliceColors)
console.log("🚀 ~ file: index.js:64 ~ colors:", colors)

const newFineColors = ['grey', 'maroon']
const mergedColors = colors.concat(newFineColors, ['haha', 'tata'], ['papapa'])
console.log("🚀 ~ file: index.js:77 ~ mergedColors:", mergedColors)
const mergedNewcolors = [...colors, ...newFineColors, 'hahaha', 'lala']
console.log("🚀 ~ file: index.js:79 ~ mergedNewcolors:", mergedNewcolors)
