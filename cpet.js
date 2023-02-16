
class Pet {
    constructor(name,breed, ptimes, etimes){
        this.name=name;
        this.age=3;
        this.breed=breed;
        this.ptimes = ptimes
        this.etimes = etimes
    }
    age1(){
        
        this.age +=1;
            return this;
    }
    data(){
        
        this.age += 2;
        console.log(`${this.name},${this.age},${this.breed}`);
    return this;
    }

}
module.exports= {Pet}
 