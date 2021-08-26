import React, { useEffect } from 'react'
import { getOneCelebrity } from "../api/index";
import { useLocation } from 'react-router-dom';
import "./Style.css";

export default function Bio(props) {
const location = useLocation();
const path = location.pathname;
const celebName = path.slice(13);
console.log(celebName);

const {oneCeleb, setOneCeleb} = props;

useEffect(() => {
    getOneCelebrity(celebName)
    .then((oneCeleb) => {
        setOneCeleb([oneCeleb])
    })
    .catch(console.error)
}, [celebName, setOneCeleb])

console.log("FIRST :", oneCeleb)

    return (
        <div>
            {oneCeleb.map((celeb, index) => {
                console.log("SECOND :", celeb)
                return (
                    <div id="celebCard" key={index}>
                        <div className="celebCardName">{celeb.celebrity.name}</div>
                        <img className="bioImage" src={celeb.celebrity.imageurl} alt="celebrity"/>
                        <div className="celebOrigin"><strong>Films and TV shows: </strong>{celeb.celebrity.origin}</div>
                        <div className="celebDescription"><strong>Summary: </strong>{celeb.celebrity.description}</div>
                    </div>
                )
            })}
        </div>
    )
}
