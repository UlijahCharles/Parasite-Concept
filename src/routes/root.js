import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="container">
        <main>
          <Outlet end />
        </main>
      </div>
    </>
  );
}

export default Root;
