import { useContext } from "react";
import ListAdd from "./AddList";
import { AppContext } from "./app-context";


const Linet = () => {
    const [state] = useContext(AppContext)

    return(
        <div className="flex flex-col justify-center items-center ">
            {state.haetutLinet.map(({quote}) => {
            return (
                <ListAdd quote = {quote} />
            )
            
            })}
        </div>
    )
}

export default Linet;