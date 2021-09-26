
import logo from '../carre.jpg';
import ReactPlayer from 'react-player';
const Code=()=>{
    return(
        
    <div style= {{border:"solid",color:"black" ,margin: "40px 40px 40px 40px"}} >
    <h1 class="title red">Your name here</h1>
    <br />
    <img src="/logo192.png"  alt="image-public"/>
    <br/>
    <img src={logo}   alt="image-src" />
    <br/>
    
    <ReactPlayer  
    width="320px"
    height="240px"
    url="https://youtu.be/0riHps91AzE" />
    
     </div>
   );
}
export default Code