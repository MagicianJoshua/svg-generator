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
        return `<svg width="150" height="150"> \n <polygon points="27,60 10,90, 45,90" fill="${this.color}"/>`
    }
}

    

class Circle extends Shapes {
    constructor(color,text,textColor){
        super(color,text,textColor);
    } 

    render(color) {
        return `  <svg width="150" height="150"> \n  <circle cx="25" cy="75" r="20" fill="${this.color}" stroke-width="1"/>`
    }
}


 class Square extends Shapes {
    constructor(color,text,textColor){
        super(color,text,textColor);
    } 
    render() {
        return `<svg width="200" height="200"> 
        <rect x="50" y="50" width="100" height="100" fill="${this.color}" stroke-width="1"/>
         <text x="100" y="100" font-family="arial" font-size="35" fill="${this.textColor}" alignment-baseline="middle" text-anchor="middle" >${this.text}</text>
         </svg>`
    }
}


module.exports = {Circle,Square,Triangle}