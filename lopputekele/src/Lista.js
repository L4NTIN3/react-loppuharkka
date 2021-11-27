import { useContext } from "react";
import ListAdd from "./AddList";
import { AppContext } from "./app-context";


const Linet = () => {
    const [state] = useContext(AppContext)

    return(


        <div className="h-96 overflow-y-auto ">
            <div className="flex flex-col justify-center items-center border-green-200 ">
                {state.haetutLinet.map(({quote}) => {
                return (
                    <ListAdd quote = {quote} />
                )
                
                })}
            </div>
        </div>
    )
}

export default Linet;