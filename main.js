const hero = require('superheroes');
const {name,pet,activity} = require('./nod');

let { Cat } = require('./cat')
let { Dog } = require('./dog')
let { Rabbit} = require (`./rabbit`)
let {Parrot} = require(`./parrot`)

let animal 
const start = async()=>{
    let birdn = await name()
    console.log(`the pet name is ${birdn}`)

    let breed = await pet()
    console.log(`pet you have selected is ${breed}`)
    
    let active =await activity()
    console.log(`you have choosen ${active}`)


    if (breed == 'cat'){
        animal = new Cat (birdn,breed)
        

    }else if (breed == 'dog')
    {
        animal = new Dog (birdn,breed)

    }        

     else if (breed == `rabbit`){
        animal = new Rabbit (birdn,breed)

    }
    else if (breed ==`parrot`){
        animal = new Parrot (birdn,breed)
    }
    
    


    animal.stats()
    animal.vacc()
    animal.play()
    animal.eat()
}
start()

