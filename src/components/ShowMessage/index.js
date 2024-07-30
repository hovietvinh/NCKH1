
import {TwitchOutlined} from "@ant-design/icons"
import ContentChatBox from "../ContentChatBox";
import User from "./User";
import Machine from "./Machine";
import Header from "../Header";
import "./script"



function ShowMessage(props) {
    const {message,id,setReloadAll} = props;
    // console.log(message,id);


    let mess_id=[];
    const mess = [];
    for(let i =0;i<message.length;i++){
        if(id== message[i]._id){
            mess_id = message[i];
        }
    }

    if("chatUser" in mess_id){
        for(let i =0;i<mess_id.chatUser.length;i++){
            mess.push(i);
        }
    }
    
    return (
        <>
            {mess.length==0? (
                <>  
                    <div className="relative h-full">
                        <div className="overflow-y-auto absolute left-0 right-0">
                            <Header message={message} />
                        </div>

                        <div className=" flex h-full flex-col items-center justify-center text-primary">
                            <TwitchOutlined  className="content_logo" />
                            <div style={{opacity :1}}>
                                <div className="content_chatBot">
                                    <ContentChatBox  setReloadAll={setReloadAll} id={id} message={"Kể cho tôi nghe một sự thật thú vị ngẫu nhiên về Đế chế La Mã"}></ContentChatBox>
                                    <ContentChatBox setReloadAll={setReloadAll} id={id} message={"Siêu anh hùng cá mập biết đánh răng."}></ContentChatBox>
                                    <ContentChatBox setReloadAll={setReloadAll} id={id} message={"Tôi cần bắt đầu rèn luyện để tăng sức mạnh cơ bắp"}></ContentChatBox>
                                    <ContentChatBox setReloadAll={setReloadAll} id={id} message={"Viết một tin nhắn văn bản ngắn gọn và ngọt ngào mời hàng xóm."}></ContentChatBox>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                  
                
                </>
            ):(
                <>
                    <div className="h-full inner-chat">
                        <div className="flex flex-col overflow-y-auto">
                            <Header/>
                            {mess.map((item)=>(
                                <>
                                    <User key={`${mess_id._id}-user`} data={mess_id.chatUser[item]}/>
                                    <Machine key={`${mess_id._id}-machine`} data={mess_id.chatMachine[item]}/>

                                </>
                                
                            ))}
                        </div>
                    </div>
                    
                    


                    
                </>
                

            )}   
        
        
        </>
     
    );
}

export default ShowMessage;