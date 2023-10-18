const Text = require("../lib/Text.js");
describe('Text', ()=>{

    describe('Color', () =>{
        
        it('Should set the color the wat we pass in the constructor', () =>{
           const text2 = new Text(undefined, "blue");
           expect(text2.color).toBe ('blue')
        })
    })
    describe('rendering', () =>{
        it('Should render a rect tag with the input color', () =>{
            const square3 = new Square("indigo")
            expect(square3.render()).toBe(`<rect width="100%" height="100%" fill="indigo"/>`)
        })
    })
    desrcibe('letters', () =>{
        it('should display the proper letter inputs selected by the user', () =>{
            const text4 = new Text('tgb')

        })
    })
})