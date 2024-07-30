import ChatAuthor from "../ChatAuthor";
import ChatHistory from "../ChatHistory";

function SideBar(){
    return (
        <>
            <div className="sideBar">
                <ChatHistory></ChatHistory>
                <ChatAuthor></ChatAuthor>

            </div>
        </>

    )
}

export default SideBar;