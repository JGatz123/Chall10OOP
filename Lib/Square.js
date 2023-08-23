class Square{
    constructor(color){
        this.color = color
    }
    
    render(){
        return `<rect width="100%" height="100%" fill="${this.color}"/>`
    }

}

module.exports = Square