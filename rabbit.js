let {Pet} = require ('./cpet');
class Rabbit extends Pet{
constructor(name,breed){
    super(name,breed);
    this.breed=breed;
    this.ptimes = 8
    this.etimes = 4
}
play(){
  
   if(this.ptimes < this.etimes){
   
    console.log(`${this.name} ,has good playtime`)
    this.ptimes++
    this.etimes--
   } else{
    console.log(`${this.name} ,has bad playtime`)
    this.ptimes--
    this.etimes++
   }
   return this;
}
eat(){
    if(this.etimes > 5) {
    console.log(`${this.name} has eaten a lot`)
    this.etimes -- 
    this.ptimes ++
}
else{
    console.log(`${this.name} needs to eat more`)
    this.ptimes -- 
    this.etimes ++
}
return this
}
vacc(){
    let vtime= 2;
    if (vtime<=0){
        console.log(' Vaccination is due')
    }else{
        console.log('vaccination status is ok')
    }
    return this
}
stats(){
    return console.table({
        name:this.name,
        age:this.age,
        breed:this.breed,
        play:this.ptimes,
        eat: this.etimes,
        vacstatus:this.vtime
    });
    }

}


module.exports= {Rabbit}