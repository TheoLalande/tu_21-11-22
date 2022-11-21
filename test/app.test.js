const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const Circle = require('../src/app').Circle;
const expect = require('chai').expect;

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function(done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });
    
    it('2. The surface area of the Cube', function(done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });
    
    it('3. The volume of the Cube', function(done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
    
});

describe('Testing the Triangle Functions', function() {
    it('1. Are side values right?', function(done){
        let t1 = new Triangle(4,7,8);
        let t2 = new Triangle('a','b','c');
        let t3 = new Triangle ('cochon', 1, '1312');
        let t4 = new Triangle ('', 2, 6);
        let t5 = new Triangle (-3,-2,-6);

        expect(t1.AreTriangleParamsRight()).to.equal(true);
        expect(t2.AreTriangleParamsRight()).to.equal(false);
        expect(t3.AreTriangleParamsRight()).to.equal(false);
        expect(t4.AreTriangleParamsRight()).to.equal(false);
        expect(t5.AreTriangleParamsRight()).to.equal(false);
        done();
    });

    it('2. Is it a triangle ?', function(done){
        let t1 = new Triangle(4,7,8);
        expect(t1.isTriangle()).to.equal(true);
        done();

    });
    it('3. The surface of the Triangle', function(done){
        let t1 = new Triangle(4,7,8);
        expect(t1.getSurface()).to.equal(14);
        done();
    });
    it('4. Is the Triangle Isoscele', function(done){
        let t1 = new Triangle(2.9, 2.9, 4.1);
        expect(t1.isTriangleIsoscele()).to.equal(true)
        done();
    });
    
});

describe('Testing the Circle Functions', function() {
    it('1. Is Diameter value right?', function(done){
        let c1 = new Circle(3);
        let c2 = new Circle('a');
        let c3 = new Circle(-1);
        expect(c1.isCircleParamsRight()).to.equal(true);
        expect(c2.isCircleParamsRight()).to.equal(false);
        expect(c3.isCircleParamsRight()).to.equal(false);
        done();
    });
    it('2. The disk Perimeter', function(done){
        let c1 = new Circle(3);
        expect(c1.getPerimeter()).to.equal(9.4248);
        done();

    });
    it('2. The disk surface', function(done){
        let c1 = new Circle(3);
        expect(c1.getSurface()).to.equal(7.0686);
        done();

    });
});