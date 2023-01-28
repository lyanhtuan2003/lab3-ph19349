const restaurant = {
    name: 'tuanAP',
    location: 'via Angelo Tavanti 23, firenze, italy',
    catergory: ['Italan', 'pizzeria', 'vegetarian', 'organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese Salad'],
    mainMenu: ['pizza', 'Pasta', 'Risotto'],
    oder: function (staterindex, mainidex) {
        return [this.starterMenu[staterindex], this.mainMenu[mainidex]];
    },
    oderDilivery: function ({ time = '20:00', address, mainIndex, starterIndex }) {
        console.log(`thời gian vào quán là ${time} và địa chỉ ở ${address}and menu là ${this.mainMenu[mainIndex]} +++ ${this.starterMenu[starterIndex]}`)
    },

    openingHoues: {
        thu: {
            open: 12,
            close: 22
        },
        tri: {
            open: 11,
            close: 23
        },
        sat: {
            open: 0,
            close: 23
        }

    },
};
restaurant.oderDilivery({
    // time: '22:30',
    address: 'quỳnh lưu, nghệ an',
    mainIndex: 2,
    starterIndex: 2

});
const { name, openingHoues, catergory } = restaurant;
console.log(name, openingHoues, catergory);

const { name: restaurantName, openingHoues: house, catergory: ter } = restaurant
console.log(restaurantName, house, ter)

const { tri: { open: a, close: c } } = openingHoues;
console.log(a, c)
// const arr = [1, 2, 3];
// const x = arr[0];
// const y = arr[1];
// const z = arr[2];
// const [a, b, c] = arr;
// console.log(a, b, c);
// console.log(arr)


// let [first, secons] = restaurant.catergory;
// console.log(first, secons);
// [first, secons] = [secons, first];
// console.log(first, secons)

const [stater, mainCuorn] = restaurant.oder(2, 0);
console.log('nè', stater, mainCuorn)

// const nester = [1, 2, [4, 5]];
// const nester1 = [i, , [j, k]] = nester
// console.log(i, j, k)

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu)
for (let day of Object.keys(restaurant.openingHoues)) {
    console.log(day)
}