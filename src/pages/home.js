import React from "react";
import Storyline from "../components/storyline";
import Trailer from "../components/trailer";
import useFetch from "../hooks/use-Fetch";
import Cast from "../components/cast";
import Director from "../components/director";

const Home = (props) => {
  const data = useFetch();

  return (
    <React.Fragment>
      <Storyline />
      <Trailer />
      <Cast castData={data.Cast} />
      <Director directorData={data.Director} />
    </React.Fragment>
  );
};

export default Home;
