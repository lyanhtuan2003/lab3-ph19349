//*----3.2----*//
const checkdong = function (dogjulia, dogkate) {
    const dogjuliacommet = dogjulia
    dogjuliacommet.splice(0, 1)
    dogjuliacommet.splice(-2)
    // console.log(dogjuliacommet)
    const dogs = dogjuliacommet.concat(dogkate)
    console.log(dogs)
    dogs.forEach((value, index) => {
        // console.log(index)
        if (value >= 3) {
            console.log(` chó số${index + 1} là chó trưởng thành và ${value} tuổi`)
        }
        else {
            console.log(`cho ${index + 1} là chó con và ${value} tuổi`)
        }
    });
}
checkdong([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])



//*----3.3----*//
const CallHammelage = function (age) {
    const hammanAge = age.map(age => (age <= 2) ? 2 * age : 16 + age * 4);
    const audus = hammanAge.filter(ages => ages >= 18)
    console.log(hammanAge)
    console.log(audus)
    const avarget = audus.reduce((acc, age) => acc + age, 0) / audus.length
    return avarget
}
const avg1 = CallHammelage([5, 2, 4, 1, 15, 8, 3]);
const avg2 = CallHammelage([16, 6, 10, 5, 6, 1, 4])
console.log(avg1, avg2)

//*----3.4----*//
//1
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)))
console.log(dogs)
// //2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah)
console.log(
    `Sarah's dog is eating too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'}`
)
// //3
const ownersEatTooMuch = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle)
// //4
console.log(`${ownersEatTooMuch.join('and')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and')}'s dogs eat too little`)
// //6
const checkEatingOkey = dog =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 11
console.log(dogs.some(checkEatingOkey))
// //7
console.log(dogs.filter(checkEatingOkey))
// //8
const dogssSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood)
console.log(dogssSorted)

