class Triangle{
    constructor(color){
        this.color = color
    }
    
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }

}

const triangle = new Triangle('green')
console.log(triangle.render());

module.exports = Triangle
    