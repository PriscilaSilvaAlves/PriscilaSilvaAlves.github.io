import { Ship } from './ship.js'

describe("Test the class Ship", ()=>{
    test("Check if the object was created", () =>{
        var ship1 = new Ship(4, 0, false);
        expect(ship1).toEqual({"length": 4, "nHit": 0, "issSunk": false});
    });
    test("Check the method hit()", ()=>{
        var ship2 = new Ship(4,0,false);
        ship2.hit();
        expect(ship2).toEqual({"length": 4, "nHit": 1, "issSunk": false});
    });
    test("Check the method isSunk()", ()=>{
        var ship3 = new Ship(2,0,false);
        ship3.hit();
        ship3.hit();
        ship3.isSunk();
        expect(ship3).toEqual({"length": 2, "nHit": 2, "issSunk": true});
    });
})

