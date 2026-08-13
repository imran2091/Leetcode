// In modern JavaScript, the constructor is a dedicated constructor() method placed inside a class block. 
// It runs automatically whenever you create a new instance using the new keyword
class SmartPhone{
    constructor(brand, model)
    {
        this.brand=brand;
        this.model=model;
    }

    ring(){
        console.log(`ringinggg.....${this.brand}`);
    }
}

const phone1 = new SmartPhone("I Phone", "17pro");
const phone2 = new SmartPhone("samsunng", "s23 ultra");
console.log(phone1.brand)
phone2.ring();




  