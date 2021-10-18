//Code: 
// let johnSnowAttack = 25
// let jamieLannisterAttack = 35 

// if (johnSnowAttack > jamieLannisterAttack) {
//     console.log("John Snow has a better Attack")
// } else if (johnSnowAttack === jamieLannisterAttack) {
//     console.log("John and Jaime have the same Attack")
// } else {
//     console.log("Jaime Lannister has a better Attack")
// }

// let johnSnowHealth = 100
// let johnSnowDefense = 0

// if (johnSnowHealth <= jamieLannisterAttack) {
//     console.log("John snow has been slain")
// } else {
//     johnSnowHealth = johnSnowHealth - jamieLannisterAttack
//     console.log(`John's Health is ${johnSnowHealth}`)
// }

// johnSnowDefense += 25 

// if (johnSnowHealth <= jamieLannisterAttack - johnSnowDefense){
//     console.log ("John Snow has been slain")
// } else {
//     johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
//     console.log(`Johns Health is ${johnSnowHealth}`)
// }
// //Health Kit
// if((johnSnowHealth + 50) >= 100){
//     johnSnowHealth = 100
// } else {
//     johnSnowHealth += 50
// }
// console.log(johnSnowHealth)

// // coinflip
// let coinLandsHeads = true

// if (coinLandsHeads !== false) {
//     console.log("The Fight Continues")
// } else {
//     console.log("John runs away")
// }

// // for (let i = 0; i < 5; i++) {
// //     if (johnSnowHealth <= 0) {
// //         console.log("John has been slain")
// //     } else {
// //         johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
// //         console.log(`Johns Health is ${johnSnowHealth}`)
// //     }
// // }

// while(johnSnowHealth > 20) {
//     johnSnowHealth -= (jamieLannisterAttack - johnSnowDefense)
//     console.log(`Johns Health is ${johnSnowHealth}`)
//     if (johnSnowHealth === 0) {
//         console.log("John has been slain")
//     } 
// }


// let backpack = []

// backpack.push("sword")
// backpack.push("sheild")
// backpack.push("food")

// console.log(backpack)

// backpack.splice(0, 1 )
// console.log(backpack)

// let furCoat = "fur coat"
// backpack.push(furCoat)
// console.log(backpack)

// backpack.pop()
// console.log(backpack)

// let itemCount = backpack.length
// console.log(itemCount)

// backpack.push("flint", "blanket", "knife", "toothbrush")

// let backpack2 = backpack.splice(2, 5)
// console.log(backpack2)

// console.log(backpack2[0])

// for (let x = 0; x < backpack.length; x++) {
//     console.log(backpack[x])
// }

// if (backpack.length >= 3) {
//     for (let x = 0; x < 3; x++) {
//         console.log(backpack[x])
//     }
// } else {
//     for (let x = 0; x < backpack.length; x++) {
//         console.log(backpack[x]) 
//     }
// }


let guessMe = 54

while (guessMe < 100) {
    console.log("---------------")
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log('guessMe is divisible by 4 or 5')
    } else if (guessMe % 3 == 0) {
        console.log('guessMe is divisible by 3.  Subtracted 27.')
    } else {
        console.log('Added 3.')
    }
    guessMe += 22
    console.log(`guessMe is now ${guessMe}`)
}

