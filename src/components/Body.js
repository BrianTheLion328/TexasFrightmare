import React, {useEffect} from 'react';
import { getCelebrities } from '../api';
import "./Style.css";
import {useHistory} from 'react-router-dom';

export default function Body(props) {

    const {celebrities, setCelebrities} = props;
    const history = useHistory();

    useEffect(() => {
        getCelebrities()
        .then((celebrities) => {
            setCelebrities(celebrities)
        })
        .catch(console.error)
    }, [setCelebrities])

    return (
        <div id="body">
            {celebrities.map((celebrity, index) => {
                console.log(celebrity)
                return (
                    <button className="celebButton" key={index} onClick={
                        async (e) => {
                            e.preventDefault();
                            history.push(`/celebrities/${celebrity.id}`)
                        }
                    }>
                    <div className="celebName">{celebrity.name}</div>
                    <img id="celebImage" src={celebrity.imageurl} alt="celebrity"/>
                    </button>

                )
            })}
        </div>
    )
}
