
import { Col, Layout, Row,ConfigProvider } from 'antd';
import { useEffect, useState } from 'react';
import Header from '../Header';
import ShowMessage from '../ShowMessage';
const {  Footer, Sider, Content } = Layout;
import FooterElement from '../Footer';
import "./layoutDefault.scss"
import MenuSider from '../MenuSider';
import { Outlet } from 'react-router-dom';
import ContentElement from '../ContentElement';
import { getAllMessage } from '../../utils/api';


function LayoutDefault() {


    const [collapsed,setCollapsed] = useState(false);
    const [load,setLoad] = useState(true);
    const reload =()=>{
        setCollapsed(!collapsed);
    }
    const reLoadAll=()=>{
        setLoad(!load);
    }
    const [message,setMessage] = useState([]);
  
    const setMess = (mess)=>{
        setMessage(mess);
        reLoadAll();
    }
    useEffect(()=>{
        const fetchApi = async()=>{
            const res = await getAllMessage()
          
            setMessage(res);
        }
        fetchApi();
    },[load]);

    const context={
        collapsed:collapsed,
        reload:reload
    }
    
    return (
      <>
        {/* <Layout className='layout-default h-full'>
            <Header setMess={setMess} message={message} reload={reload} collapsed={collapsed}></Header>
            <Layout className='h-full'>
                <Sider collapsedWidth="0" style={{backgroundColor:"#f9f9f9"}} collapsed={collapsed}  className='sider'>
                    <MenuSider reLoadAll={reLoadAll} setMess={setMess} message={message} ></MenuSider>
                </Sider>
                <Layout className='white relative flex flex-col h-full'>
                    <Outlet />

                </Layout>
            </Layout>
            
        </Layout> */}
            <Layout className='flex z-0 h-full w-full'>
                <Sider collapsedWidth="0" style={{backgroundColor:"#f9f9f9"}} collapsed={collapsed}  className='h-full flex-shrink-0 sider'>
                    <MenuSider reload={reload}  reLoadAll={reLoadAll} setMess={setMess} message={message} />
                </Sider>
                <div className='bg-white flex max-w-full flex-1 flex-col '>
                    <Outlet context={context}/>
                    
                </div>
            </Layout>

    
        
      </>
     
    );
  }
  
  export default LayoutDefault;