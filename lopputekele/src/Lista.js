import { useContext } from "react";
import ListAdd from "./AddList";
import { AppContext } from "./app-context";


const Linet = () => {
    const [state, setState] = useContext(AppContext)


    if(state.haetutLinet.length == 0){
        return(
            <div className="p-5">
                <h1 className="font-bold text-3xl"> No quotes available. </h1>
            </div>
        )
    }

    return(


        <div className="h-4/5 overflow-y-auto  ">
            <div className="flex flex-col justify-center items-center border-green-200 pb-8">
                {state.haetutLinet.map(({quote}, index) => {
                return (
                    <ListAdd
                        quote = {quote} 
                        index = {index}
                        key = {quote + ": " + index}
                        />
                )
                
                })}
            </div>
        </div>
    )
}

export default Linet;