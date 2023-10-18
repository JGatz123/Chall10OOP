class Text{
    constructor(letters, color){
        this.letters = letters
        this.color = color
    }
    
    render(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.letters}</text>`
    }
}

module.exports = Text