const ListAdd = ({ quote }) => {
    return(
        <div className="listpart h-3/6 overflow-y-auto" >
            <div className="p-4 flex flex-wrap ml-3 w-2/4 float-left" >
                <p>{quote}</p>
            </div>
            <div className="flex flex-wrap">
                <button className="btn btn-green">Delete</button>
            </div>
        </div>
    )
}

export default ListAdd;