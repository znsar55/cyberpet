let {Pet} = require ('./cpet');
class Cat extends Pet{
constructor(name,breed){
    super(name,breed);
    this.breed=breed;
    this.ptimes = 5
    this.etimes = 3
    this.vtime = 1
    
    
    
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
    
    if (this.vtime<=0){
        console.log(' life is in danger')
    }else{
        console.log('its good')
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


module.exports= {Cat}
