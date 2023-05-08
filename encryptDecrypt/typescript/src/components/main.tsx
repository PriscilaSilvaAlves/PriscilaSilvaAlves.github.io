import { useState } from 'react';
import Right from './right';
import Left from './left';

function Main(){
    interface tipoString{
        text: string
    }
    var [textEncoded, setTextEncoded ] = useState<tipoString>({text: "",});   

    function childToParent(childData: string):void{
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