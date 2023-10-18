class Triangle{
    constructor(color){
        this.color = color
    }
    
    render(){
        return `<polygon points="150,0 244,162 56,162" fill="${this.color}" />`
    }

}

const triangle = new Triangle('green')
console.log(triangle.render());

module.exports = Triangle
    