import { useContext } from "react";
import { AppContext } from "./app-context";


const ListAdd = ({ quote, index }) => {

    const [state, setState] = useContext(AppContext)




    const deleteClick = () => {

        deleteQuote({ quote, index });

    }


    const deleteQuote = (q) => {

        let uusi = state.haetutLinet.filter((quote, index) => {
            console.log(q.quote)
            console.log(q.index)
            return !(
                q.quote == quote.quote 
            )
        }) 

        let h = state.tallennetutLinet.filter((quote) => {
            return !(
                q.quote === quote.quote 
            )
        })

        console.log(uusi)

        setState({ ...state, haetutLinet: uusi, tallennetutLinet: h})

    }


    return(
        <div className="listpart h-36 overflow-y-auto bg-gradient-to-r from-blue-600 to-purple-700 mt-8" >
            <div className="p-4 flex flex-wrap ml-1 w-2/4 float-left flex-1" >
                <p className="mb-3 font-semibold text-2xl text-white mt-1">{quote} : {index}</p>
            </div>
            <div className="flex bg-blue-500 w-4/12 flex-2">
                <button className="btn btn-green text-center " onClick={deleteClick}> Delete </button>
            </div>
        </div>
    )
}

export default ListAdd;