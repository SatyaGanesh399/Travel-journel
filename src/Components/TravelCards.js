import React from "react";
import location from './location.svg'

export default function TravelCards(props) {
    console.log(props)
  return (
    <div className="travel-card" key={props.item.id}>
                <div className="travel-photo">
                    
                    <img src={props.item.src} alt="photo" className="travel-image"/>
                </div>
                <div className="travel-details">
                    <img src={location} alt="" className="location-sym" />
                    <span>{props.item.location}</span>
                    <a href="">view on Google Maps</a>
                    <h3>{props.item.title}</h3>
                    <p>{props.item.travelDate}</p>
                    <p>
                        {props.item.description}
                    </p>
                </div>
                <hr />
            </div>
  );
}
