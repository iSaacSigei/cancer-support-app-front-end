

import React from 'react';
import Pic from "../images/cancerpatient.webp";


function Home(){
    return (
        <>
            <div className="about_text">
              <div>
                <p>
                We Value<br></br> Your Health
                </p>
              </div>
              <div>
                <img src={Pic} alt="cancer patient" />
              </div>
          </div>
        </>
      );
    }
export default Home;