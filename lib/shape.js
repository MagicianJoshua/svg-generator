class Shapes {
    constructor(color,text,textColor) {
        this.color = color;
        this.text= text
        this.textColor = textColor;
    }

    
    
}

 class Triangle extends Shapes {
    constructor(color,text,textColor){
        super(color,text,textColor);
    } 
    render() {
        return `<svg width="200" height="200"> 
        <polygon points="100,0 160,100, 40,100" fill="${this.color}"/>
        <text x="100" y="70" font-family="arial" font-size="30" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
}

    

class Circle extends Shapes {
    constructor(color,text,textColor){
        super(color,text,textColor);
    } 

    render() {
        return `<svg width="200" height="200">
        <circle cx="100" cy="100" r="50" fill="${this.color}" stroke-width="1"/>
        <text x="100" y="103" font-family="arial" font-size="40" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>`
    }
}


 class Square extends Shapes {
    constructor(color,text,textColor){
        super(color,text,textColor);
    } 
    render() {
        return `<svg width="200" height="200"> 
        <rect x="50" y="50" width="100" height="100" fill="${this.color}" stroke-width="1"/>
         <text x="100" y="100" font-family="arial" font-size="50" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>
         </svg>`
    }
}


module.exports = {Circle,Square,Triangle}