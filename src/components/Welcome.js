import React from "react";
import "./Style.css";

export default function Welcome() {
  return (
    <div className="welcomePage">
        <img id="homeImage" alt="graphic" src="https://www.texasfrightmareweekend.com/wp-content/uploads/2021/07/2021-Header-New4.png"></img>
      <h1 className="welcomeHeader">Texas Frightmare Checklist</h1>

      <div id="list">
        <ul className="listOne">
          <li>
            <strong className="bold">Kane Hodder</strong>
          </li>
          <li>
            <strong className="bold">Tony Todd</strong>
          </li>
          <li>Malcolm McDowell</li>
          <li>Dylan McDermott</li>
          <li>Damien Leone</li>
          <li>C.J. Graham</li>
        </ul>
        <ul className="listTwo">
          <li>Ken Foree</li>
          <li>
            <strong className="bold">David Howard Thornton</strong>
          </li>
          <li>Lar Park Lincoln</li>
          <li>R.A. Mihailoff</li>
          <li>Tom Savini</li>
          <li>Nancy Loomis</li>
        </ul>
        <ul className="listThree">
          <li>Freddie Prinze Jr.</li>
          <li>Harvey Guillen</li>
          <li>Danny Trejo</li>
          <li>Ed Neal</li>
          <li>Charles Cyphers</li>
          <li>Jonathan Breck</li>
        </ul>
      </div>
      <div>
        <p className="note">
          * the celebrity names that are <strong>SHADOWED</strong> are the ones who I have
          already booked professional photo-ops with! The rest are first-come,
          first-served!{" "}
        </p>
      </div>
      <p className="welcomeMessage">
        Welcome to my horror checklist website. I created this page for 2
        reasons:
        <br></br>
        <br></br>
        1- To sharpen my skills with fullstack web development and to better
        understand the relationship between the back-end and front-end of any
        website. Throughout my coding bootcamp, I felt like I did not fully
        grasp the React lessons, so this website is created using only React for
        everything front-end.
        <br></br>
        <br></br>
        2- Every year in the city of Dallas, Texas, there is a major horror
        convention called Texas Frightmare where dozens of celebrities from
        horror films and TV shows meet fans, sign autographs, hold Q&A's, and
        take photos with fans dressed up as their horror characters! I am going
        this year with a mission to meet everyone on my personal checklist here.
        Above is the list of names, but the "Celebrities" button on the top left
        will take you to each person's information, filmography, and picture.
      </p>
    </div>
  );
}
