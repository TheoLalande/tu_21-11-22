class Cube {
    constructor(length) {
        this.length = length;
    }
    
    getSideLength () {
        return this.length;
    }
    
    getSurfaceArea () {
        return (this.length * this.length) * 6;
    }
    
    getVolume () {
        return Math.pow(this.length,3);
    }
}

class Triangle{
    constructor(firstSide, secondeSide, thirdSide){
        this.firstSide = firstSide;
        this.secondeSide = secondeSide;
        this.thirdSide = thirdSide;
    }

    AreTriangleParamsRight(){
        let areValuesRight = false;
        if(Number.isFinite(this.firstSide) && Number.isFinite(this.secondeSide) && Number.isFinite(this.thirdSide)) areValuesRight = true;
        if(this.firstSide<0 || this.secondeSide<0 || this.thirdSide<0) areValuesRight = false;
        return areValuesRight;
    }

    getSurface(){
        let peremiter = this.firstSide + this.secondeSide + this.thirdSide;
        let s = peremiter/2;
        let squareSurface = s*(s-this.firstSide)*(s-this.secondeSide)*(s-this.thirdSide);
        let surface = Math.sqrt(squareSurface);
        return Math.round(surface);
    }
    isTriangle(){
        let isTriangle = true;
        if(!(this.firstSide+this.secondeSide > this.thirdSide)) isTriangle = false;
        if(!(this.firstSide+this.thirdSide > this.secondeSide)) isTriangle = false;
        if(!(this.secondeSide+this.thirdSide > this.firstSide)) isTriangle = false;
        return isTriangle;
    }
    isTriangleIsoscele(){
        let isTriangleIsoscele = false;
        if(this.firstSide === this.secondeSide || this.firstSide === this.thirdSide || this.secondeSide === this.thirdSide) isTriangleIsoscele = true
        return isTriangleIsoscele;
    }
}

class Circle{
    constructor(diameter){
        this.diameter = diameter;
    }
    isCircleParamsRight(){
        let isValueRight = false;
        if(Number.isFinite(this.diameter)) isValueRight = true;
        if(this.diameter > 0) isValueRight = true;
        else isValueRight = false;
        return isValueRight;
    }
    getPerimeter(){
        let perimeter = Math.PI*this.diameter;
        perimeter = Number(perimeter.toFixed(4));

        return perimeter;
    }
    getSurface(){
        let surface = Math.PI*Math.pow((this.diameter/2), 2);
        surface = Number(surface.toFixed(4));

        return surface;
    }
}


module.exports = {
    Cube:Cube,
    Triangle:Triangle,
    Circle:Circle
}