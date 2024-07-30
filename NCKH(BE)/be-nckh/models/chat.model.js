const mongoose = require("mongoose")
const chatSchema = new mongoose.Schema(
    { 
        chatUser:{
            type:Array,
            default:[]
        },
        chatMachine:{
            type:Array,
            default:[]
        },
        deleted: Boolean

    }
 );

const Chat = mongoose.model('Chat', chatSchema,"chats");

module.exports = Chat