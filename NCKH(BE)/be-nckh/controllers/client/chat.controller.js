const Chat = require("../../models/chat.model");
const { createChat, getChatById, addMessage, deleteMessage, getAllChat } = require("../../services/chatServices")
//[GET] api/chat 
module.exports.index = async (req, res) => {
    const result = await getAllChat();
    
    return res.status(200).json({result})
}

//[POST] api/chat/create 
module.exports.post = async(req, res) => {
    const {chatUser} = req.body
    // console.log(chatUser);

    const data = await createChat(chatUser)
    

    // res.send(req.body)
    return res.status(200).json({data});
}
//[GET] api/chat/:id 
module.exports.getById = async (req, res) => {
    // console.log(req.params.id);
    // res.send("!23")
    const result = await getChatById(req.params.id)
    return res.status(200).json({result})
}

//[POST] api/chat/update
module.exports.update = async (req, res) => {
    const {chatUser,_id} = req.body
    
    const result = await addMessage(chatUser,_id)
    return res.status(200).json({result})
}

//[PATCH] api/chat/delete
module.exports.delete = async (req, res) => {
  
    
    const result = await deleteMessage(req.query.id)
    return res.status(200).json({result})
}
