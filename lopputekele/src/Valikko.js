import { data } from "autoprefixer";
import { useContext } from "react";
import { AppContext } from "./app-context";

const Menu = () => {

    const [state, setState] = useContext(AppContext)

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

    return(

        <div className = "w-full">

            <h1 className="font-bold text-2xl m-4">Kanye Oneliners</h1>

            <div className="h-48 flex flex-wrap flex-auto content-center bg-gray-500">
                
                <div className=" h-30 flex flex-col flex-auto content-center flex-wrap  ">
                    <button className="btn btn-green" onClick={ fetchQuote } >Fetch 1 quote</button>
                    <button className="btn btn-green">Delete 1 quote</button>

                </div>
                <div className=" h-10 flex flex-col flex-auto content-center ">
                    <input className="mt-10"></input>
                </div>


                <div className="flex flex-col flex-wrap flex-auto content-center ">
                    <p className="btn btn-green">Näin monta näytetään</p>
                    <p className="btn btn-green">Näin monta on tallennettu</p>

                </div>
            </div>

        </div>

        
    )
}

export default Menu;