export class Pizza{
    constructor(private toppings: string){
    }
    preparePizza(){
    return `Pizza with ${this.toppings} is being prepared`
    }

    bakePizza(){
        return `Pizza with ${this.toppings} is baking`
        }
    }
    