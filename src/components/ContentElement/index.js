import {  Layout } from 'antd';
import { useState,useEffect } from 'react';
import { getAllMessage } from '../../utils/api';
const {  Footer, Content } = Layout;
import FooterElement from '../Footer';
import ShowMessage from '../ShowMessage';
function ContentElement(props){
    const {id} = props;
    
    const [message,setMessage] = useState([]);
    const [reload,setReload] = useState(true);
    const setReloadAll=()=>{
        setReload(!reload);
    }
    useEffect(()=>{
        const fetchApi = async()=>{
            const res = await getAllMessage()
            setMessage(res);
        }
        fetchApi();
    },[reload]);

    return(
        <>

           <div className={ "flex-1 overflow-hidden"}>
                <ShowMessage  setReloadAll={setReloadAll}  id={id} message={message}/>
            </div>
            <div className='w-full footer'>
                <FooterElement  setReloadAll={setReloadAll}  id={id} />
            </div>

          
        </>
    )
}
export default ContentElement;