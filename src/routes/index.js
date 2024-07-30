import Home from "../components/pages/Home";
import LayoutDefault from "../components/LayoutDefault";

import Chat from "../components/pages/Chat";
import { getAllMessage } from "../utils/api";




const Routes=[
    {
        path:"/",
        element:<LayoutDefault></LayoutDefault> ,
        children:[
            {
                path:"/",
                element: <Home ></Home>
            }
        ]
    }
]
const mess = await getAllMessage();

for(let i =0;i<mess.length;i++){
    Routes[0].children.push({
        path:`/api/chat/${mess[i]._id}`,
        element:<Chat id={mess[i]._id}/>
    })
}
export const routes = Routes;
