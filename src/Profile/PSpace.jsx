import "./PSpace.css"
// import slack from "../images/vector.svg"
import github from "../images/Icon.svg"
import vectom from "../images/vectom.png"
import footertext from "../images/Footer text.png"
import I4G from "../images/I4G.png"
import slack from "../images/slack.png"
import Adewumi from "../images/Adewumi.jpg"
import share from "../images/share.png"
import escp from "../images/esclipsis.png"
import cam from "../images/cam.png"

import { useState } from "react";



export default function PSpace() {
  const linksArray = [

    {
      link:"https://twitter.com/Bee_dProgrammer",
      content: "Twitter Link",
      title:"This is the link to my twiter page"
    },
    {
      link:"https://training.zuri.team/",
      content: "Zuri Team",
      id :" btn__zuri",
      title:"The Zuri Team"
    },
    {
      link:"https://books.zuri.team",
      content: "Zuri Books",
      id:"books",
      title:"Learn more about design and coding from Zuri library."
    },
    {
      link:"https://books.zuri.team/python-for-beginners?ref_id=<Adewumi>",
      content: "Python Books",
      id:"python__book",
      title:"Beginner to expert Python guide . It is affordable."
    },
    {
      link:"https://background.zuri.team",
      content: "Background Check for Colors",
      id:"pitch",
      title:"The Zuri color theme is available and affordable"
    },

    {
     link:"https://books.zuri.team",
     content: "Design Books",
     id:"book__design",
     title:"This is a free Design books from Zuri. At Zuri, we care about good design and we are happy to help with your design"
  }
  ]
  
  const [profile,setProfile] = useState(false);
  
  return ( 
    <div className="pSpace"> 
    <div className="header">

       <div className="toggle">
        <div className="desktopIcon">
       <img src={share} alt="" /> 
       </div>
       <div className="mobileIcon">
       <img src={escp} alt="" /> 
       </div>
      </div>
      
       <div className="person">
       <figure onClick={()=> setProfile(!profile)}>
        <img src={Adewumi} alt="Pretty lady"  id="profile__img"/>
      {profile && <div className="camera"> <img src={cam} alt="" /></div>}
     <figcaption>
          <p id="twitter">Adewumi</p>
          <p id="slack" >Adewumi</p>
        </figcaption>
       </figure>

       </div>

       </div>

       <div className="links" >
        {linksArray.map((links,id)=>{
          return  <a href={links.link} target="_blank" rel="noreferrer" title={links.title} id={links.id} className="training" key={id}>{links.content}</a>
        
        })}
        </div>

       <div className="nav">
        

      <div className="icons" >
        <div className="slack"><a href="https://app.slack.com" target="_blank"  rel="noreferrer" > <img src={slack} alt="" /> </a></div>
        <a href="https://github.com/Jejeet" target="_blank"  rel="noreferrer"><img src={github} alt="" /></a>

        </div>


       </div>
       <hr />
       <div className="footer">
        <footer>
          <div><img src={vectom} alt="" /></div>
          <p><img src={footertext} alt="" /></p>
          <div><img src={I4G} alt="" /></div>
        </footer>

       </div>

    </div>
  )
}
