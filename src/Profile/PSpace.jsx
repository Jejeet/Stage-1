import "./PSpace.css"
import slack from "../images/vector.svg"
import github from "../images/Icon.svg"
import vectom from "../images/vectom.png"
import footertext from "../images/Footer text.png"
import I4G from "../images/I4G.png"
import { useState } from "react";

import { FaEllipsisH, FaShare , FaCamera } from "react-icons/fa";

export default function PSpace() {
  const linksArray = [

    {
      link:"https//twitter.com/Bee_dPrrogrammer",
      content: "Twitter Link"
    },
    {
      link:"http://training.zuri.team/",
      content: "Zuri Team",
      id :" btn_zuri"
    },
    {
      link:"https//books.zuri.team",
      content: "Zuri Books",
      id:"books"
    },
    {
      link:"https//books.zuri.team/python-for-beginners?ref_id=<Adewumi>",
      content: "Python Books",
      id:"python_book"
    },
    {
      link:"https//background.zuri.team",
      content: "Background Check for Colors",
      id:"pitch"
    },

    {
     link:"https//books.zuri.team",
     content: "Design Books",
     id:"book_design"
  }
  ]
  const [toggles,setToggles] = useState(false);
   
  const handleClick =() => {
 setToggles( !toggles );
  }
  const [profile,setProfile] = useState(false);
  
  return ( 
    <div className="pSpace"> 
    <div className="header">

       <div className="toggle" onClick={handleClick}>
     {toggles? <FaEllipsisH/> : <FaShare/> }
      </div>
      
       <div className="person">
       <figure onClick={()=> setProfile(!profile)}>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Pretty lady"  id="profile_img"/>
      {profile && <div className="camera"> <FaCamera/></div>}
     <figcaption>
          <p id="twitter">Adewumi</p>
          <p id="slack" >Adewumi</p>
        </figcaption>
       </figure>

       </div>

       </div>

       <div className="links" >
        {linksArray.map((links,id)=>{
          return  <div className="training" key={id}>
          <button id="my_twitter"> <a href={links.link}>{links.content}</a></button>
        </div>
        })}
        </div>

       <div className="nav">
        

      <div className="icons" >
        <a href="https://app.slack.com" target="_blank"  rel="noreferrer"> <img src={slack} alt="" /> </a>
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
