import LoadingGif from "../../../assets/images/Loadibg-gif.gif";
import React from "react";

let Preloader = (props) => {
    return (
        <div>
            <img src={LoadingGif}/>
        </div>
    )
}

export default Preloader;