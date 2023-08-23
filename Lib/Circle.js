class Circle{
    constructor(color){
        this.color = color
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }

}

const circle2 = new Circle('red')
console.log(circle2.render());

module.exports = Circle