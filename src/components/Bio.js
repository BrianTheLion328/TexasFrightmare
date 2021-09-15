import React, { useEffect } from 'react'
import { getOneCelebrity } from "../api/index";
import { useLocation } from 'react-router-dom';
import "./Style.css";

export default function Bio(props) {
const location = useLocation();
const path = location.pathname;
const celebName = path.slice(13);
console.log("CELEB NAME: ", celebName);
console.log("Location: ", location)

const {oneCeleb, setOneCeleb} = props;

useEffect(() => {
    getOneCelebrity(celebName)
    .then((oneCeleb) => {
        setOneCeleb([oneCeleb])
    })
    .catch(console.error)
}, [celebName, setOneCeleb])

console.log("First :", oneCeleb)

    return (
        <div>
            {oneCeleb.map((celeb, index) => {
                console.log("Second :", celeb)
                return (
                    <div id="celebCard" key={index}>
                        <div className="celebCardName">{celeb.celebrity.name}</div>
                        <img className="bioImage" src={celeb.celebrity.imageurl} alt="celebrity"/>
                        <div className="celebOrigin"><strong>Film and TV: </strong>{celeb.celebrity.origin}</div>
                        <div className="celebDescription"><strong>Summary: </strong>{celeb.celebrity.description}</div>
                        <div className="photoOp">
                            <img className="celebPhotoOp" src={celeb.celebrity.photo} alt="Me With Celebrity" />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
