import { addMessage, createChat } from "../../utils/api";

function ContentChatBox(props) {
    const {message,id,setReloadAll} =props
    const handleClick =async()=>{
            if(id){
                
                const rs = await addMessage(id,message)
                setReloadAll();
            }
            else{
                
             
                const res = await  createChat(message)
                window.location = `/api/chat/${res.data._id}`
               
            }
            
        
    }
    return (
        <>
            <button onClick={handleClick}  className="chatbot">{message}</button>
        
        </>
     
    );
}

export default ContentChatBox;