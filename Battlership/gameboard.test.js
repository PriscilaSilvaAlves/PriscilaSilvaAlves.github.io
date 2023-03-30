import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

describe("Test the class Gameboard.", ()=>{
    var game;
    beforeAll(()=>{
        game = new Gameboard();
    });
    test("placeShips(): ", ()=>{
        const ship = game.placeShips(50);
        expect(ship[0]).toEqual(3);
        expect(ship[1]).toEqual([50, 51, 52, 53]);
    });
    test("displayScenario(): ", ()=>{
        const array = game.displayScenario();
        expect(array.length).toEqual(10);
        for(let i=0; i<10; i++){
            expect(array[i]).not.toEqual(100);
            expect(array[i]).toBeLessThanOrEqual(200);
        }
    });
    test("receiveAttack(): ", ()=>{
        const isAllSunk = game.receiveAttack(150);
        expect(isAllSunk).toBe(false);
    });
    test("isAllSunk(): ", ()=>{
        const ship4 = new Ship(4,4,false);
        const ship3 = new Ship(3, 3, true);
        const ship2 = new Ship(2,0,true);
        const ship1 = new Ship(1,0, false);
        const issAllSunk = game.isAllSunk(ship4, ship3, ship2, ship1);
        expect(issAllSunk).toBe(false);
        ship2.hit();
        ship2.hit();
        ship1.hit();
        const issAllSunk2 = game.isAllSunk(ship4, ship3, ship2, ship1);
        expect(issAllSunk2).toBe(true);
    });
});