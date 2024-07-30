function User(props) {
    const {data} = props
    return (
        <>
            
                <div className="w-full text-primary">
                    <div className="py-2 px-2">
                        <div className="mx-auto flex flex-1">
                            <div className=" flex w-full flex-1 flex-col items-end ">
                                <div className="data-user relative py-2 px-5 max-w-70 ">
                                    <div className="font-size-17">{data}</div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          
        
        </>
     
    );
}

export default User;