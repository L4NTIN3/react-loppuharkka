import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { AppContext } from "./app-context";

const Menu = () => {

    const [state, setState] = useContext(AppContext);
    const [maara, setMaara] = useState(0);

    const fetchQuote = async () => {
        

        const API_URL = "https://api.kanye.rest/";
        let response = await fetch(API_URL);
        let data = await response.json();

        state.tallennetutLinet.push(data)
        console.log(state.tallennetutLinet)

        setState({...state, 
            haetutLinet: state.tallennetutLinet
             
        })
        

    }

    const deleteAll = () => {
        setState({...state, tallennetutLinet: state.tallennetutLinet.length = 0})
        setState({...state, haetutLinet: []})
        
    }

    useEffect(() => {

        //TÄMÄ FUNKKARI OLI SEN VERRAN KARMIVA KASATA ETTEN VIITSINYT ENÄÄ ALKAA HIOMAAN SITÄ TÄMÄN ENEMPÄÄ.


        if(maara < 2 && maara > 0){
            setState({...state, haetutLinet: state.tallennetutLinet})
        }
        else if(maara == 0 || maara == null){
            setState({...state, haetutLinet: state.tallennetutLinet})
        }
        else if(maara > 1 && maara < 999){


            //tehdään lista joka lisätään sitten renderöitävään listaan.
            let tallennettava = []

            for(let i = 0; i < state.tallennetutLinet.length; i++){


                //haetaan arrayksi splitattava quote kaikista tallennetuista arvoista.
                let jono = state.tallennetutLinet[i].quote;

                //tehdään olio jolle annetaan property quote ja sen arvoksi kunkin haetun arvon indeksi
                let n = {quote: jono}

                //array joka on splitattu sanoiksi 
                let l = jono.split(" ");

                if(l.length >= maara){
                    tallennettava.push(n)
                }
            }

            setState({...state, haetutLinet: tallennettava})

            
        }

    }, [maara])


    return(

        <div className = "w-full">

            <h1 className="font-bold text-2xl m-4">Kanye Oneliners</h1>

            <div className="h-48 flex flex-wrap flex-auto content-center bg-gray-500">
                
                <div className=" h-30 flex flex-col flex-auto content-center flex-wrap  ">
                    <button className="btn btn-green" onClick={ fetchQuote } >  Fetch 1 quote  </button>
                    <button className="btn btn-green" onClick={ deleteAll } >  Delete all quotes  </button>

                </div>
                <div className=" h-10 flex flex-col flex-auto content-center ">
                    <input className="mt-10" type="Text" pattern="[0-9999]*" value={maara} onChange={(e) => setMaara(e.target.value)} />

                </div>


                <div className="flex flex-col flex-wrap flex-auto content-center ">
                    <p className="btn btn-green w-32">{state.haetutLinet.length}</p>
                    <p className="btn btn-green w-32">{state.tallennetutLinet.length}</p>

                </div>
            </div>

        </div>

        
    )
}

export default Menu;