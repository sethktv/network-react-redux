import React from 'react';
import preloader from "../../../assets/images/preloader.svg";
import  './preloader.css'


let Preloader = (props) => {
    return <div>
        <img className='preloader' alt='' src={preloader}/>
    </div>
}

export default Preloader;