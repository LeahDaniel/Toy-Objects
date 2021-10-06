const toys = [
    {
        id: 1,
        name: "Toy Piano",
        inventory: 5,
        inStock: true,
        price: 25.35,
        minimumAge: 2,
        requiresBatteries: false,
        shelfLocation: "A30"
    },
    {
        id: 2,
        name: "Teddy Bear",
        inventory: 3,
        inStock: true,
        price: 19.99,
        minimumAge: 2,
        requiresBatteries: false,
        shelfLocation: "B25"
    },
    {
        id: 3,
        name: "Remote-Controlled Car",
        inventory: 0,
        inStock: false,
        price: 50.00,
        minimumAge: 10,
        requiresBatteries: true,
        shelfLocation: "C05"
    }
]

const coloringBook = {
    name: "Coloring Book",
    inventory: 1,
    inStock: true,
    price: 5.50,
    minimumAge: 2,
    requiresBatteries: false,
    shelfLocation: "D15"
}

const dinosaurFigurine = {
    name: "Dinosaur Figurine",
    inventory: 20,
    inStock: true,
    price: 10.99,
    minimumAge: 5,
    requiresBatteries: false,
    shelfLocation: "E19"
}


const toyToFind = 2


const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    toys.push(toyObject)
}


addToyToInventory(coloringBook)
addToyToInventory(dinosaurFigurine)

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = toy.price * 1.05
//         console.log(`The ${toy.name} costs $${toy.price}.`)
//     }
// }

console.log(toys)
