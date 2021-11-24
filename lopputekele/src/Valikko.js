const Menu = () => {
    return(

        <div className = "w-full">

            <h1 className="font-bold">Kanye Oneliners</h1>

            <div className="h-48 flex flex-wrap content-start bg-gray-500">
                
                <div className=" h-30 flex flex-col flex-wrap w-1/4 m-5">
                    <button className="btn btn-green">Fetch 1 quote</button>
                    <button className="btn btn-green">Delete 1 quote</button>

                </div>
                <div className=" h-10 flex flex-wrap w-1/4 m-5">
                    <input></input>
                </div>


                <div className="flex flex-col flex-wrap w-1/4 m-5">
                    <p>Fetch 1 quote</p>
                    <p>Delete 1 quote</p>

                </div>

                
            </div>

        </div>

        
    )
}

export default Menu;