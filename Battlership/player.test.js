import { Player } from "./player.js"

describe("Test the class Player", ()=>{
    test("Check the function makeMove()", ()=>{
        var player = new Player();
        const play = player.makeMove();      
        expect(play[0]).not.toEqual(0);
        expect(play[0]).toBeLessThanOrEqual(100);
        expect(play[1]).toBe(false);
    });
});