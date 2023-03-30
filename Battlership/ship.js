export class Ship{
    constructor(length, nHit, issSunk){
        this.length=length;
        this.nHit=nHit;
        this.issSunk=issSunk;
    }
    hit(){
        //Increases the number of hits in the ship
        this.nHit++;
        if(this.length==this.nHit){
            this.isSunk();
        }
    }
    isSunk(){
        //calculates it based on their length and the 
        //number of ‘hits’.
        if(this.length==this.nHit){
            this.issSunk=true;
            return this.issSunk;
        }
        return false;
    }
}