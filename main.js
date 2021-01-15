console.log(items)

//1

// total price /number of items
// const

const totalNumberOfItems = items.length

// map, forEach, or filiter
let total = 0

items.forEach(function (item) {
    const itemPrice = item.price
    total = total + item.price
})
const avgPrice = total/ totalNumberOfItems
console.log(avgPrice)

document.querySelector('#answer1').innerHTML = `$${avgPrice}`

//2
// exclude items with .price < 14 && > 18
// map to display as list 


let filteredItems2 = items.filter(function(item){
    const itemPrice = item.price
    // console.log(itemPrice > 14.00 && itemPrice < 18.00)
    return itemPrice > 14.00 && itemPrice < 18.00

})
// console.log(filteredItems2)

let outputList = filteredItems2.map(function(item){
    return `<li>${item.title}</li>`
}).join('')


document.querySelector('#answer2').innerHTML = `${outputList}`


//3

//check to see if .currency_code = 'GBP'

let filteredItems3 = items.filter(function(item){
    const curCode = item.currency_code
    // console.log(curCode)
    return  curCode === 'GBP'
    
})


let outputList3 = filteredItems3.map(function(item){
    return `<li>${item.title}</li>
            <li>$${item.price}</li>`
}).join('')


document.querySelector('#answer3').innerHTML = `${outputList3}`



//4

// get items witch have materials of wood
// step 1 find which materials have wood
// step 2 display list of said items in the html

// so for each instance of "wood" in "materials" display the 

let filteredItems4 = items.filter(function(item){
    const itemMat = item.materials
    // console.log(itemMat)
    return itemMat == 'wood'
    
})
console.log(filteredItems4)

//5 
// check the materials.lenghth is >= 8 or 9?


let filteredItems5 = items.filter(function(item) {
    const itemMat = item.materials
    // console.log(itemMat.length > 7)
    return itemMat.length > 8

})

let outputList5 = filteredItems5.map(function(item){
    return `<li>${item.title}</li>
            <li>${item.quantity}</li>
            <li>${item.materials}</li>`
}).join('')

document.querySelector('#answer5').innerHTML = `${outputList5}`

//  console.log(filteredItems5)


//6 
// who made and i_did properties

