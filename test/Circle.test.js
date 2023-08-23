const Circle = require("../lib/Circle.js");
describe('Circle', ()=>{

    describe('Color', () =>{
        
        it('Should set the color the wat we pass in the constructor', () =>{
           const circle2 = new Circle("cyan");
           expect(circle2.color).toBe ('cyan')
        })
    })
    describe('rendering', () =>{
        it('Should render at the proper size when we pass in the dimensions', () =>{
            const circle3 = new Circle("cyan")
            expect(circle3.render()).toBe('<circle cx="150" cy="100" r="80" fill="cyan"/>')
        })
    })
})