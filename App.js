import React from "react"
import Navbar from "./Navbar"
import Card from "./Card"
import data from "./data"

export default function App() {
    
    const cards = data.map(entry => 
    
        <Card
        
            key = {entry.title}
            entry = {entry}
        />
    
    );
    
    return (
        
        <div>
        
            <Navbar />
            
            <div className = "journal-entries">
                {cards}
            </div>
        
        </div>
    )
}