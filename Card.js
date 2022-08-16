import React from "react"

export default function Card(props) {
    
    return (
        
        <div className = "complete-card">
            <div className = "card-element">
            
                <div className = "location-img-div">
                
                    <img className = "location-img" src = {props.entry.imageUrl}/>
                
                </div> 
                <div className = "info-div">
                
                    <div className = "element-header">
                
                        <img src = "./location-image.png"/>
                        <h2 className = "country">{props.entry.location}</h2>
                        <a className = "maps-link" href = {props.entry.googleMapsUrl}>View on Google Maps</a>
                        
                    </div>
                    
                    <h1 className = "place">{props.entry.title}</h1>
                    <h3 className = "date">{props.entry.startDate} - {props.entry.endDate}</h3>
                    <p className = "description">{props.entry.description}</p>
                    
                </div>
                
                
            </div>
            
            <hr/>
            
        </div>
    )
}

