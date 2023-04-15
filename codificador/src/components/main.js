import { useState } from 'react';
import Right from './right.js';
import Left from './left.js';

function Main(){
    var [textEncoded, setTextEncoded ] = useState({text: "",});   

    function childToParent(childData){
        setTextEncoded({text: childData});
    }
    return (
        <main>
            <Left childToParent={ childToParent }></Left>
            <Right state={ textEncoded }></Right>
        </main>
    );
}

export default Main;