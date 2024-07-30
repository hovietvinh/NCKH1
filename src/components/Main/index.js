import ChatArea from "../ChatArea";
import SideBar from "../SideBar";
import { Col, Row } from 'antd';

function Main() {
    return (
      <>
         <Row>
            <Col span={18} >
                <SideBar></SideBar>
            </Col>
            <Col span={6} >
                <ChatArea></ChatArea>
            </Col>
        </Row>
        
      </>
     
    );
  }
  
  export default Main;