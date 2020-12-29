let colors=['Red','Green','Blue','Orange']

console.log(typeof colors)
console.log(colors)
console.log(colors[0])//Accessing element present in in 0th index

console.log('Array Length :',colors.length)

colors.push('Brown')
colors.push('Yellow')

console.log(Array.isArray(colors))

let newColors=colors.filter(color=>color.length>3)

console.log(newColors)

colors.pop()

let newColors1=colors.map(color=>color.toUpperCase())

console.log(newColors1)

let numbers=[2,4,6,8,10]

let n1=numbers.reduce((number1,number2)=>number1+number2)

console.log(n1)
