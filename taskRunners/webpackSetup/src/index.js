import getClasses from './getClasses.js'

console.log("ran from index.js")
getClasses()

const obj = { a: 'alpha', b: 'bravo' }
const newObj = { ...obj, c: 'charlie' }
console.log(newObj)
