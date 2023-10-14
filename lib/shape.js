class Shapes {
    constructor(color,text) {
        this.color = color;
        this.text= text
    }

    
    
}

class Triangle extends Shapes {
    constructor(color,text){
        super(color,text);
    } 
    render() {
        return ' <polygon points="27,60 10,90, 45,90" fill="green"/>'
    }
}

    

class Circle extends Shapes {
    constructor(color,text){
        super(color,text);
    }

    render() {
        return '<circle cx="25" cy="75" r="20" stroke="red" fill="red" stroke-width="1"/>'
    }
}


class Square extends Shapes {
    constructor(color,text){
        super(color,text);
    }
    render() {
        return '<rect x="10" y="10" width="30" height="30" stroke="white" fill="white" stroke-width="1"/>'
    }
}


export {Triangle,Circle,Square};
