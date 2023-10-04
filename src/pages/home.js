import React, { useEffect } from "react";
import Storyline from "../components/storyline";
import Trailer from "../components/trailer";
import useFetch from "../hooks/use-Fetch";
import Cast from "../components/cast";

const Home = (props) => {
  const data = useFetch();

  //console.log(data.Cast);
  return (
    <React.Fragment>
      <Storyline />
      <Trailer />
      <Cast />
    </React.Fragment>
  );
};

export default Home;
