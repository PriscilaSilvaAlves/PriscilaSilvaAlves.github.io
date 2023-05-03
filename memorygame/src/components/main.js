import { useState, useEffect } from 'react';
import '../styles/main.css';
import HarryPotter from '../images/Harry-Potter.png';
import AlbusDumbledore from '../images/Albus-Dumbledore.jpg';
import BellatrixLestrange from '../images/Bellatrix-Lestrange.png';
import Boddy from '../images/Dobby.png';
import DoloresUmbredge from '../images/Dolores-Umbridge.jpg';
import DracoMalfoy from '../images/Draco-Malfoy.png';
import GineWeasley from '../images/Ginevra-Molly-Weasley.png';
import HermioneGranger from '../images/Hermione-Granger.png';
import LordVoldemort from '../images/Lord-Voldemort.jpg';
import LunaLovegood from '../images/Luna-Lovegood.jpg';
import MinervaMcGonagall from '../images/Minerva-McGonagall.jpg';
import NevilleLongbottom from '../images/Neville-Longbottom.png';
import RonWeasley from '../images/Ron-Weasley.jpg';
import RúbeoHagrid from '../images/Rúbeo-Hagrid.png';
import SeverusSnape from '../images/Severus-Snape.png';
import SiriusBlack from '../images/Sirius-Black.jpg';

function Main(){
    var arrPictures = [
        {
            id: 1,
            name: "Harry Potter",
            src: HarryPotter
        },
        {
            id: 2,
            name: "Albus Dumbledore",
            src: AlbusDumbledore,
        },
        {
            id: 3,
            name: "Bellatrix Lestrange",
            src: BellatrixLestrange,
        },
        {
            id: 4,
            name: "Boddy",
            src: Boddy,
        },
        {
            id: 5,
            name: "Dolores Umbredge",
            src: DoloresUmbredge,
        },
        {
            id: 6,
            name: "Draco Malfoy",
            src: DracoMalfoy,
        },
        {
            id: 7,
            name: "Ginevra Molly Weasley",
            src: GineWeasley,
        },
        {
            id: 8,
            name: "Hermione Granger",
            src: HermioneGranger
        },
        {
            id: 9,
            name: "Lord Voldemort",
            src: LordVoldemort
        },
        {
            id: 10,
            name: "Luna Lovegood",
            src: LunaLovegood
        },
        {
            id: 11,
            name: "Minerva McGonagall",
            src: MinervaMcGonagall
        },
        {
            id: 12,
            name: "Neville Longbottom",
            src: NevilleLongbottom
        },
        {
            id: 13,
            name: "Ron Weasley",
            src: RonWeasley
        },
        {
            id: 14,
            name: "Rúbeo Hagrid",
            src: RúbeoHagrid
        },
        {
            id: 15,
            name: "Severus Snape",
            src: SeverusSnape
        },
        {
            id: 16,
            name: "Sirius Black",
            src: SiriusBlack
        }
    ];
    var local=0;
    const localHS = localStorage.getItem("HighestScore");
    if(localHS !== null){
        local = localHS;
    }
    const [score, setScore]=useState(0);
    const [highest, setHighest]=useState(local);
    const [pictures, setPictures]=useState(arrPictures); 
    const [lastPicture, setLastPicture]=useState([]); 
    useEffect(() => {
        localStorage.setItem("HighestScore", highest);
      }, [highest]);
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function selectCard(id){
        var exist = false;
        var cont=0;
        lastPicture.map((pic) => {
            if(pic.key === id){
                exist=true;
                return false;
            }else{
                cont++;
            }
        });
        if(exist === false){
            setLastPicture((prevState) => [...prevState, {key: id},]);
            setScore((prevState)=> prevState+1);
            if(cont===15){
                setHighest(16);
                setLastPicture([]);
                alert("Congratulations, you win the game! Your score was 16.");
                setScore(0);
            }
        }else{
            setHighest((prevScore) => {
                if(prevScore<score){
                    return score;
                }else{
                    return prevScore;
                }
            });
            alert("Game over, your score was "+score);
            setScore(0);
            setLastPicture([]);
        }
        const arr = [...shuffleArray(pictures)];
        setPictures(arr);
    }
    return (
        <main>
            <div id="score">
                <p id="current-score">Current score: { score }</p>
                <p id="highest-score" aria-labelledby="current-score highest-score">Highest score: { highest }</p>
            </div>
            <div id="instructions">
                <p>Click to select a different card each round.</p>
            </div>
            <div id="cards">
                {pictures.map((picture) => (
                    <button type="button" aria-label={"Select the card of" + picture.name} className="card" key={ picture.id } onClick={ () => { selectCard(picture.id) } }>
                        <img src={ picture.src } alt={ picture.name } aria-describedby={"p-" + picture.id }></img>
                        <p id={"p-" + picture.id }>{ picture.name }</p>
                    </button>
                ))}
            </div>
        </main>
    );
}

export default Main;