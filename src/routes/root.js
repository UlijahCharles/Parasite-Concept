import { Outlet } from "react-router-dom";
import Nav from "../components/nav";

function Root() {
  return (
    <>
      <Nav />
      <div className="container">
        <main>
          <Outlet end />
        </main>
      </div>
    </>
  );
}

export default Root;
