class Square{
    constructor(color){
        this.color = color
    }
    
    render(){
        return `<rect width="100%" height="100%" fill="${this.color}"/>`
    }

}

const square2 = new Square('green')
console.log(square2.render());