import React, { useEffect, useState, useMemo } from "react";
import "../css/director.css";
import AwardItem from "./awardItem";

const Director = (props) => {
  const [directorData, setDirectorData] = useState([]);
  const [awardData, setAwardData] = useState([]);

  useEffect(() => {
    for (const item in props.directorData) {
      for (const property in props.directorData[item].awards) {
        setDirectorData(props.directorData[item]);
        let concatedString = "";

        switch (props.directorData[item].awards[property].category.length) {
          case 1:
            setAwardData((prevState) => [
              <AwardItem
                key={Math.random()}
                Award={property}
                Category={props.directorData[item].awards[property].category[0]}
                Year={props.directorData[item].awards[property].year}
              />,
              ...prevState,
            ]);
            break;
          case 2:
            props.directorData[item].awards[property].category.forEach(
              (element) => {
                if (concatedString.length === 0)
                  concatedString = concatedString.concat(element);
                else concatedString = concatedString.concat(", ", element);
              }
            );

            setAwardData((prevState) => [
              <AwardItem
                key={Math.random()}
                Award={property}
                Category={concatedString}
                Year={props.directorData[item].awards[property].year}
              />,
              ...prevState,
            ]);
            break;
          case 3:
            props.directorData[item].awards[property].category.forEach(
              (element) => {
                if (concatedString.length === 0)
                  concatedString = concatedString.concat(element);
                else concatedString = concatedString.concat(", ", element);
              }
            );
            console.log(props.directorData[item].awards);

            setAwardData((prevState) => [
              <AwardItem
                key={Math.random()}
                Award={property}
                Category={concatedString}
                Year={props.directorData[item].awards[property].year}
              />,
              ...prevState,
            ]);
            break;
          default:
            console.log("Empty Length");
            break;
        }
      }
    }
  }, [props.directorData]);

  return (
    <section className="director">
      <h2 className="section-title">
        Details <span className="period">.</span>
      </h2>
      <div className="director-flex">
        <div className="director-flex__intro">
          <h3>Director</h3>
          <p className="director-name">Bong Joon-Ho</p>
          <img
            src={directorData ? directorData.imageUrl : ".......Loading"}
            alt="Director"
            className="director-img"
          ></img>
        </div>
        <div className="director-flex__info">
          <ul>
            <li>
              <h3 className="info-head">Country</h3>
              <p className="info-text">
                {directorData ? directorData.country : ".......Loading"}
              </p>
            </li>
            <li>
              <h3 className="info-head">Budget</h3>
              <p className="info-text">
                {directorData ? directorData.budget : ".......Loading"}
              </p>
            </li>
            <li>
              <h3 className="info-head">Release Date</h3>
              <p className="info-text">
                {directorData ? directorData.date : ".......Loading"}
              </p>
            </li>
            <li>
              <h3 className="info-head">Release Date</h3>
              <p className="info-text">
                {directorData ? directorData.time : ".......Loading"}
              </p>
            </li>
            <li>
              <h3 className="info-head">Awards</h3>
              {awardData}
            </li>
            <li>
              <button> </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Director;
