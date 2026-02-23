import {useEffect, useRef} from "react";

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 3 ;
        }
    }, []);
    return (
       <section id="hero">
           <div className="">
               <h1>Mackbook Pro</h1>
               <img src="/title.png"/>
           </div>
            <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />\
           <button>Buy</button>
           <p>from $1599 to $133/mon for twelve months</p>
       </section>
    )
}
export default Hero
