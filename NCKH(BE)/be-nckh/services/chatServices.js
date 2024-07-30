const Chat = require("../models/chat.model")
module.exports.createChat =async (chatUser)=>{
    try{
        // const response = await axios.post('http://localhost:5000/api/chat', { message: chatUser });
        // const data =await response.json();
        if(chatUser){
            const result =await Chat.create({
                chatUser:[chatUser],
                chatMachine:["test ne`"],
                deleted:false
            });
            return result
        }
        else{
            const result =await Chat.create({
                
                deleted:false
            });
            return result
        }
        
        
        
        
    }catch(e){
        console.log(e);
        return null
    }
}
module.exports.getChatById =async (id)=>{
    try{
        
        let result = await Chat.find({_id:id,deleted:false});
        return result;
    }catch(e){
        console.log("error find chat");
        return null
    }
}

module.exports.addMessage =async (chatUser,id)=>{
    try{
        // console.log(chatUser);
        // const response = await axios.post('http://localhost:5000/api/chat', { message: chatUser });
        // const data =await response.json();
        let result = await Chat.updateOne({_id:id},{
            $push:{
                chatUser:chatUser,
                chatMachine:"test ne"
            }
        })
        return result;
    }catch(e){
        console.log("error add chat");
        return null
    }
}

module.exports.deleteMessage =async (id)=>{
    try{
        let result = await Chat.updateOne({_id:id},{deleted:true})
        return result;
    }catch(e){
        console.log("error del chat");
        return null
    }
}

module.exports.getAllChat =async ()=>{
    try{
        let result = await Chat.find({deleted:false});
        // console.log(result);
        return result;
    }catch(e){
        console.log("error find all chat");
        return null
    }
}