import React from 'react'

const Weather = ({ temperature }) => {
    let tempText = "";
    if( temperature < 15) {
        tempText = "It is Cold outside";
    } else if(temperature < 15 && temperature > 25) {
         tempText = "It is NICE outside";
    } else {
        tempText = "It is hot outside";
    }
     return (
    

    <div>
       {tempText}
    </div>
  )
}

export default Weather
