import React, {useState, useEffect} from 'react'
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from 'react-player'

const MainSlider = () => {

    const [playV, setPlayV] = useState(false);

    const itemHeight = 370;

    const images = [
        { url: "https://i.pinimg.com/originals/01/99/aa/0199aa5fec54f75d82de6db08ad5b677.jpg" },
        { url: "https://i.pinimg.com/originals/0b/1d/b2/0b1db21d1fe2529d696a5668c56caac1.jpg" },
        { url: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Katrina_Kaif_promoting_Bharat_in_2019.jpg" },
        { url: "https://cdn.telanganatoday.com/wp-content/uploads/2020/02/KATRINA.jpg" },
       
    ];
    
    useEffect(() => {
        // effect
        return () => {
            // setPlayV(false)
        }
    }, [playV])

    return (
        <div>
         <Carousel 
         onChange={()=>{ setPlayV(false); console.log(`changed P : ${playV} `); }}
         thumbWidth={50} useKeyboardArrows={true} 
         showThumbs={true} autoPlay={false}>
            
            {
                images.map((item,i)=>{
                    
                    const view = (
                        <div style={{height:itemHeight}}>
                            <img  alt=""  src={item.url}/>
                        </div>
                    );

                    return view
                })
            }
            <div>
            <ReactPlayer 
                light="https://cdn.telanganatoday.com/wp-content/uploads/2020/02/KATRINA.jpg"
                width='100%'
                playing={playV}
                onPlay={()=>{ setPlayV(true); console.log(`Playing ....${playV}`); }}
                height={itemHeight}
                url='https://www.youtube.com/watch?v=K-jEJ5g9XZ0' 
            />
            </div>
        </Carousel>
        </div>
    )
}

export default MainSlider
