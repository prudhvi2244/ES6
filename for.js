let colors=['Red','Green','Pink','Blue']

console.log('Printing Elements of colors Array using for loop')

for(let i=0;i<colors.length;i++)
{
    console.log(colors[i])
}

console.log('Printing Elements of colors Array using for in loop')

for(let color in colors)
{
    console.log(colors[color])
}

console.log('Printing Elements of colors Array using for of loop')

for(let color of colors)
{
    console.log(color)
}

console.log('Printing Elements of colors Array using for each  loop')

colors.forEach(color=>console.log(color))










