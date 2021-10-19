import React, { useEffect } from 'react'
import './index.css'
import aisha from '../img/aisha.png'
import lady from '../img/lady.png'
import plack from '../img/plack.png';
import vow from '../img/vow.png';
import flag from '../img/flag.png'
import dakolo from '../music/dakolo.mp3'
const Homepage =()=>{
    useEffect(()=> {
        sound()
        
       },[])
   let sound =()=>{
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
   }

    return (
        <>



           


            <section className="header">
                {/* div to holder the obj */}
                <div className="inner padding">

                    <span><h2>#ENDPOLICE BRUTALITY</h2></span>

                    {/* main header */}
                    <div className="hero-main">
                        <div className="info">
                            <h1>#ENDPOLICE BRUTALITY</h1>
                           
                            <p className='labour'>The Labours of our heros past
                                shall never be invain 
                            </p>
                        </div>

                        {/* hero photo */}

                        <div className="hero-img">

                                <img src={aisha} alt=""/>

                        </div>
                    </div>
                </div>
            </section>

            {/* next section */}
            <section className="tribute padding">
                <center><h3 className='tributee'>Tribute</h3></center>

                <div className="tears">

                        <div className="img">
                            <img src={lady} alt="" />
                        </div>

                        <div className="rant">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequatur maiores fuga, quam sunt dignissimos sequi animi magni eos fugiat minima, at necessitatibus totam error sed molestiae quo labore rem!
                            </p>
                        </div>

                </div>
            </section>

            {/* in respect */}
            <section className="respect padding">

                    <center>
                         <span> <h2>in respect</h2></span>
                    </center>


            {/* images  */}

                <div className="gallery">

                    <div className="card">
                        <img src={vow} alt="" />
                    </div>

                    <div className="card">
                       <img src={flag}/>
                    </div>

                    <img src={plack}/>

                   
                </div>
            </section>

            {/* thoughts  */}
            <section className="thoughts">


                <div className="thought_1 padding">

                    <h3>Thoughts</h3>

                    <div className="split">

                       <p>
                             They once stood there reciting the national anthem 
                            “The labour of our heroes past shall... ” only to become the hero they sang of, now we shall recite it again in their remembrance “shall never be in vain”
                            #hope for Nigeria #
                       </p>

                    </div>

                </div>
                
                <div className="thought_2">

                <div className="thought_1 padding">

                    <h3>Thoughts</h3>

                    <div className="split">

                       <p>Should we relent and make those legend carnage go into futile, or did we forget the bloodbath and daemonic act of savaging that the noggin of this country did to its people. They murdered NIGERIA CHRIST
                        #the black christ#</p>

                    </div>

                    </div>

                </div>

            </section>

            <section className="footer padding">
                 <footer>
                    <div className="end">
                       <center> <h2>#EndPoliceBrutality</h2></center>
                    </div>
                   
                   <div className="row">

                       <marquee behavior="" direction="">

                       <ul>
                            <li> Kolade Johnson</li>
                            <li> Kazeem Tiamiyu </li>
                            <li> Tina Ezekwe </li>
                            <li> Ogah Jumbo </li>
                            <li> Mus'ab Sammani </li>
                            <li> Chibuike Daniel Ikeaguchi  </li>
                        </ul>    

                       </marquee>
                    
                    <center><h2>#20 October 2020</h2></center>
                   </div>
                </footer>
            </section>

            <audio className="audio-element" src={dakolo} >
         
         </audio>
         <button onClick={()=>sound()}>play</button>

        </>
    )
}
export default Homepage