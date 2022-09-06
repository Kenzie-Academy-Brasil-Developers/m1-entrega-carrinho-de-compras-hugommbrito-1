const products = [
    {
        id: 1,
        name: "Pão",
        price: 7.00
    },
    {
        id: 2,
        name: "Carne",
        price: 35.50
    },
    {
        id: 3,
        name: "Tomates",
        price: 15.00
    },
    {
        id: 4,
        name: "Macarrão",
        price: 4.85
    },
    {
        id: 5,
        name: "vinho",
        price: 55.00
    }
]

let body = document.querySelector('body')


//CRIAÇÃO DO TÍTULO E CABEÇALHO
let header = document.createElement('header')
header.classList.add('topPart')
body.appendChild(header)

let headerH1 = document.createElement('h1')
headerH1.innerText = 'Virtual Market'
header.appendChild(headerH1)

let headerDiv = document.createElement('div')
headerDiv.className = 'topBlock'
header.appendChild(headerDiv)
let headerDivItem = document.createElement('p')
let headerDivValor = document.createElement('p')
headerDivItem.innerText = 'Item'
headerDivValor.innerText = 'Valor'
headerDiv.appendChild(headerDivItem)
headerDiv.appendChild(headerDivValor)


//CRIAÇÃO DOS BLOCOS DE ÍTENS
let main = document.createElement('main')
body.appendChild(main)

let ul = document.createElement('ul')
main.appendChild(ul)

for (let i = 0; i < products.length; i++) {
    let li = document.createElement('li')
    li.classList.add('itemBlock')
    ul.appendChild(li)

    li.innerHTML = `<span class='itemName'>${products[i].name}</span><span class='itemPrice'>R$${products[i].price.toFixed(2)}</span>`
}


//CRIANDO O TOTALIZADOR E BOTÃO
let section = document.createElement('section')
main.appendChild(section)

let sectionDiv = document.createElement('div')
sectionDiv.className = 'total'
section.appendChild(sectionDiv)

let cartSum = 0
for (let i = 0; i < products.length; i++) {
    cartSum += products[i].price    
}

let sectionDivTotal = document.createElement('p')
let sectionDivSum = document.createElement('p')
sectionDivTotal.innerText = 'Total'
sectionDivSum.innerText = `R$${cartSum.toFixed(2)}`
sectionDiv.appendChild(sectionDivTotal)
sectionDiv.appendChild(sectionDivSum)

let button = document.createElement('button')
button.innerText = 'Finalizar Compra'
section.appendChild(button)