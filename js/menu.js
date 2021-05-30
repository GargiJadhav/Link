class Menu{
    constructor(){
        this.grocery = createElement('h2');

    }
    display(){
        this.grocery.html("Groceries..");
        this.grocery.position(displayWidth/2-200,200);
       
    }
}