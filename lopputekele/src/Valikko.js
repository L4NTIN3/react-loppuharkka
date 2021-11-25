import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "./app-context";

const Menu = () => {

    const [state, setState] = useContext(AppContext)
    const [määrä, setMäärä] = useState(1)

    const fetchQuote = async () => {
        

        const API_URL = "https://api.kanye.rest/";
        let response = await fetch(API_URL);
        let data = await response.json();

        const newArray = state.haetutLinet.slice()
        newArray.push(data)

        setState({...state, 
            haetutLinet: state.haetutLinet.concat(data)
             
        })
    }

    const deleteAll = () => {
        setState({...state, haetutLinet: []})
    }

    const wordCount = (item, index) => {

        let l = 0;
        for(let i = 0; i <= item.length; i++){
            if(item.charAt(i) === " "){
                l++;
            }
        }

        console.log(l)
        if (l >= määrä){
            setState({...state, sopivatQuotet: state.sopivatQuotet.concat(item)})
        }

    }

    useEffect(() => {
        
        if(määrä === 0){
            
            setState({...state, sopivatQuotet: state.haetutLinet})
        }

        else{
            
            state.haetutLinet.forEach(wordCount)
            setState({...state, haetutLinet: state.sopivatQuotet})

        }


    }, [ määrä ]);

    return(

        <div className = "w-full">

            <h1 className="font-bold text-2xl m-4">Kanye Oneliners</h1>

            <div className="h-48 flex flex-wrap flex-auto content-center bg-gray-500">
                
                <div className=" h-30 flex flex-col flex-auto content-center flex-wrap  ">
                    <button className="btn btn-green" onClick={ fetchQuote } >Fetch 1 quote</button>
                    <button className="btn btn-green" onClick={ deleteAll } >Delete all quotes</button>

                </div>
                <div className=" h-10 flex flex-col flex-auto content-center ">
                    <input className="mt-10" type="Text" value={määrä} onChange ={(e) => setMäärä(e.target.value)} />
                </div>


                <div className="flex flex-col flex-wrap flex-auto content-center ">
                    <p className="btn btn-green">Näin monta näytetään</p>
                    <p className="btn btn-green">{state.haetutLinet.length}</p>

                </div>
            </div>

        </div>

        
    )
}

export default Menu;