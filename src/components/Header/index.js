
import {MenuUnfoldOutlined,PlusCircleOutlined,DownOutlined} from "@ant-design/icons";
import { Dropdown,Button, Tooltip } from 'antd';
import {routes} from "../../routes/index"
import { useOutletContext } from "react-router-dom";
import Chat from "../pages/Chat";
import { createChat } from "../../utils/api";
const items = [
    {
      label: <a href="https://www.antgroup.com">Đăng nhập</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">Đăng ký</a>,
      key: '1',
    },
    
  ];

function Header(props) {
    const {message} = props
    const context = useOutletContext()
    const collapsed = context.collapsed;
    const handleClick = ()=>{
        context.reload();
    }
   

    const handleAdd = async()=>{
        console.log(message);
        const res = await createChat()
        
        message.push(res.data)
        routes.push({
            path:`/api/chat/${res.data._id}`,
            
            element:<Chat id={res.data._id}/>
            
        })
      
        window.location = `/api/chat/${res.data._id}`
        
    }
    return (
      <>
        <header className='header'>
            <div className="absolute"></div>
            <div className="flex items-center overflow-hidden">
                <div className={"flex items-center " +(collapsed==true?"":"d-none") }>
                    <div className={"pr-2 pl-2 " }>
                        <Tooltip title="Đóng sidebar">
                            <Button  className="icon" onClick={handleClick}  type="text" icon={<MenuUnfoldOutlined  />} />
                        </Tooltip>
                    
                    </div>
                    <div className="pr-2">
                        <Tooltip title="Thêm đoạn chat">
                            <Button onClick={handleAdd}  type="text" icon={<PlusCircleOutlined />} />
                        </Tooltip>
                        
                    </div>

                </div>
                <Dropdown
                    menu={{
                        items,
                    }}
                    trigger={['click']}
                >
                    
                    <Button type="text">
                
                            Niko Bot
                            <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <div className="flex gap-2 pr-1">
                <div className="avatar">
                    NB
                </div>
            </div>
        </header>
        
      </>
     
    );
  }
  
  export default Header;