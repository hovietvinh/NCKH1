import { Menu,Tooltip,Button, Popconfirm, notification } from "antd";
import {TwitchOutlined,DeleteOutlined,MenuUnfoldOutlined,PlusCircleOutlined} from "@ant-design/icons"
import { Link } from "react-router-dom";
import {routes} from "../../routes/index"
import Chat from "../pages/Chat";
import { createChat, delMessage } from "../../utils/api";

function MenuSider(props) {
    const {setMess,message,reLoadAll,reload} = props
    const items=[
        {
            label: <Link to="/">Nike Bot</Link>,
            icon:<TwitchOutlined />,
            key:"/"
        },     
        {
            key: 'today',
            label: "Hôm nay",
            type: 'group',
            children: [],
        },     
        {
            key: 'all',
            label: "Tất cả",
            type: 'group',
            children: [],
        }
    ]
    
    for(let i =message.length-1;i>=0;i--){
      
        if(message[i].chatUser.length==0){
            items[1].children.push({
                key:message[i]._id+"day",
                label:
                <Link to={`/api/chat/${message[i]._id}`}>
                    <Tooltip title="Xóa đoạn chat">
                       <Popconfirm title="Bạn có chắc chắn muốn xóa" onConfirm={()=>handleDelete(message[i]._id)}>
                            <Button type="text" icon={<DeleteOutlined />} />
                       </Popconfirm>
                    </Tooltip>
                    <span>New chat</span>
                </Link>
            })
            // set thoi gian
            items[2].children.push({
                key:message[i]._id+"all",
                label:
                    <Link to={`/api/chat/${message[i]._id}`}>
                        <Tooltip title="Xóa đoạn chat">
                            <Popconfirm title="Bạn có chắc chắn muốn xóa" onConfirm={()=>handleDelete(message[i]._id)}>
                                <Button type="text" icon={<DeleteOutlined />} />
                            </Popconfirm>
                        </Tooltip>
                        <span>New chat</span>
                    </Link>
            })
            
        }
        else{
            items[1].children.push({
                key:message[i]._id+"day",
                label:
                    <Link to={`/api/chat/${message[i]._id}`}>
                        <Tooltip title="Xóa đoạn chat">
                            <Popconfirm title="Bạn có chắc chắn muốn xóa" onConfirm={()=>handleDelete(message[i]._id)}>
                                <Button type="text" icon={<DeleteOutlined />} />
                            </Popconfirm>
                        </Tooltip>
                        <span>{message[i].chatUser[0]}</span>
                    </Link>
            })
            // set thoi gian
            items[2].children.push({
                key:message[i]._id+"all",
                label:
                    <Link to={`/api/chat/${message[i]._id}`}>
                        <Tooltip title="Xóa đoạn chat">
                            <Popconfirm title="Bạn có chắc chắn muốn xóa" onConfirm={()=>handleDelete(message[i]._id)}>
                                <Button type="text" icon={<DeleteOutlined />} />
                            </Popconfirm>
                        </Tooltip>
                        <span>{message[i].chatUser[0]}</span>
                    </Link>
            })
        }
    }
    const handleClick = async()=>{
        const res = await createChat()
        
        message.push(res.data)
        routes.push({
            path:`/api/chat/${res.data._id}`,
            
            element:<Chat id={res.data._id}/>
            
        })
      
        window.location = `/api/chat/${res.data._id}`
        
    }

    const handleDelete = async(id)=>{
        const rs = await delMessage(id);
        // reLoadAll();
        window.location = "/"
       
        
    }

    
    return (
        <>
            {/* <div className={'header_left ' +(collapsed && "header_left_small")} >
                <div className={"header_collapse " } onClick={()=>{reload()}}>
                    <Tooltip title="Đóng sidebar">
                        <Button  className="icon"  type="text" icon={<MenuUnfoldOutlined  />} />
                    </Tooltip>
                 
                </div>
                <div className="header_add">
                    <Tooltip title="Thêm đoạn chat">
                        <Button onClick={handleClick}  type="text" icon={<PlusCircleOutlined />} />
                    </Tooltip>
                    
                </div>
            </div> */}
            <div className={"flex justify-between h-14  items-center py-2 px-2"} >
                <div className={"header_collapse " } onClick={()=>{reload()}}>
                    <Tooltip title="Đóng sidebar">
                        <Button  className="icon"  type="text" icon={<MenuUnfoldOutlined  />} />
                    </Tooltip>
                
                </div>
                <div className="header_add">
                    <Tooltip title="Thêm đoạn chat">
                        <Button onClick={handleClick}  type="text" icon={<PlusCircleOutlined />} />
                    </Tooltip>
                    
                </div>
            </div>
            <Menu 
                className="MenuSider"
                
                mode="inline"
                items={items} 
            >

             </Menu>
        
        </>
     
    );
}

export default MenuSider;