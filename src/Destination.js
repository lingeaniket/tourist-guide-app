import React from 'react'
import Pic1 from './Pic1.jpg'
import Pic2 from './Pic2.jpg'
import Pic3 from './Pic3.jpg'
import Pic4 from './Pic4.jpg'
import Pic5 from './Pic5.jpg'
import Place1 from './place1.jpg'
import Place2 from './place2.jpg'
import Place3 from './place3.jpg'
import Place4 from './place4.jpg'
import Place5 from './place5.jpg'
import Place6 from './place6.jpg'
import Place7 from './place7.jpg'
import Place8 from './place8.jpg'

const Destination = () => {

    return (
        <div className='destinationDiv'>
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="4000">
                            <img src={Pic1} className="d-block w-100" alt="dh." />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src={Pic2} className="d-block w-100" alt="gg." />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src={Pic3} className="d-block w-100" alt="gg." />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src={Pic4} className="d-block w-100" alt=".hh" />
                        </div>
                        <div className="carousel-item" data-bs-interval="4000">
                            <img src={Pic5} className="d-block w-100" alt="kkd" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='headerDestination'>select your destination</div>
            <div className='cardDiv'>
                <div className='whereToGoDiv'>
                    <div className='whereDiv'>
                        {/* <img src={Where} alt='jjj' className='whereImg'/> */}
                        <div className='whereText'>Where do you want to go?</div>
                    </div>
                    <div className='whereDescript'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam delectus ipsum at voluptates sapiente earum vero, recusandae</div>
                </div>
                <div className='inputDiv'>
                    <div className='stateSelect'>
                        <label htmlFor="selectState">Select State </label>
                        <select id='seletState'>
                            <option value="Andhrapradesh">Andhra Pradesh</option>
                            <option value="Andhrapradesh">Arunachal Pradesh</option>
                        </select>
                    </div>
                    <div className='stateSelect'>
                        <input />
                        <button>Search</button>
                    </div>

                    <br />

                </div>
                <div className='imagePlaceHolder'>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place1} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place2} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place3} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place4} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place5} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place6} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place7} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                    <div className='containerHolder'>
                        <div className='holder1Image'>
                            <img src={Place8} alt="place1" />
                        </div>
                        <div className='holder1Info'>
                            <div className='hInfo'>Lorem ipsum, dolor sit amet. </div>
                            <div className='hInfo1'>Lorem ipsum dolor sit amet.</div>
                            <div className='hInfo2'>Lorem ipsum dolor sit amet.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination;