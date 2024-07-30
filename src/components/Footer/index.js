import { Input,Button, Form, Flex} from 'antd';
const { TextArea } = Input;
import {CopyOutlined,SendOutlined} from '@ant-design/icons'
import { addMessage, createChat } from '../../utils/api';
function FooterElement(props) {
    const {id,setReloadAll} = props;
    const [form] = Form.useForm();
    const handleSubmit = async (e)=>{
        if(e.chat!=""){  
            if(id){
                const rs = await addMessage(id,e.chatUser) 
                form.resetFields();
                setReloadAll();
            }    
            else{
                const rs = await createChat(e.chatUser);
                form.resetFields();
                setReloadAll();
            } 
           
            
        }
        // console.log(e);
        
    }


    return (
        <>
            <div className='px-2 m-auto mb-5'>
                <div className='mx-auto flex flex-1 gap-4'>
                    <Form layout='inline' onFinish={handleSubmit} form={form} className='w-full footer_input'> 
                        
                        <Form.Item className='d-block'>
                            <Button  className='p-t-2' type="text">
                                <CopyOutlined className='footer_icon' />
                            </Button>
                        </Form.Item>
                        <Flex className='d-block' flex="1">
                            <Form.Item name="chatUser">
                                <TextArea  autoSize={{
                                minRows: 1,
                                maxRows: 6,
                            }} className='mt-1 footer_text' placeholder="Tin nhắn NikeBot"   />
                            </Form.Item>
                        </Flex >
                        
                        <Form.Item className='d-block'>
                            <Button htmlType="submit" className='p-t-2' type="text">
                                <SendOutlined   className='footer_icon'/>  
                            </Button>
                        </Form.Item>
                    
                    </Form>
                </div>
                <div className='relative px-2 py-2  text-center text-secondary'>
                        <span className='fs-14'>NikeBox có thể mắc lỗi. Hãy kiểm tra các thông tin quan trọng.</span>
                </div>
            </div>

           
        </>
     
    );
}

export default FooterElement;