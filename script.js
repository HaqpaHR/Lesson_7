'use strict'

const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

let golemRecipe = magicBook.recipes.golem;
let littleDevilRecipe = magicBook.recipes.littleDevil;

let empty = '';

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {
        },
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        this[nameOfIngridient] -= amount;
        this.kettle.ingridients[nameOfIngridient] = 
        (this.kettle.ingridients[nameOfIngridient] || 0) + amount;

    },

    cook(recipe) {
        for (const key in recipe) {
            const enoughIngridients = recipe[key];
            if( !this.kettle.ingridients[key] ||
                this.kettle.ingridients[key] < enoughIngridients[key]
            ) {
                return false; 
            }
        }
        return true;
    },
};

kitchen.addIngridientToKettle('bone', 10,);
kitchen.addIngridientToKettle('stone', 100,);
kitchen.addIngridientToKettle('nail', 100,);
kitchen.addIngridientToKettle('poo', 53);

console.log(kitchen.kettle.ingridients);
console.log(kitchen);

let couldBeCooked = kitchen.cook(golemRecipe);

if (couldBeCooked) {
    console.log('Can be cooked')
} else { 
    console.log('Not enough ingridients')
};  