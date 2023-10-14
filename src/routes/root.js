import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";

function Root() {
  return (
    <>
      <Nav showPoster={true} />
      <div className="container">
        <main>
          <Outlet end />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Root;
