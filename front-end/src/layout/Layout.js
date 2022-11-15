import React from "react";
import Menu from "./Menu";
import Routes from "./Routes";

import "./Layout.css";

/**
 * Defines the main layout of the application.
 *
 *
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div className="container-fluid">
      <div className="row h-100">
        <div className="col-md-2 side-bar">
          <Menu />
        </div>
        <div className="col" style={{ padding: "0px" }}>
          <img
            src="https://images.pexels.com/photos/299348/pexels-photo-299348.jpeg?cs=srgb&dl=pexels-terje-sollie-299348.jpg&fm=jpg&_gl=1*1tyxedn*_ga*MTI3NDg1Nzk3Mi4xNjY4NTQ1NTAx*_ga_8JE65Q40S6*MTY2ODU0NTUxMi4xLjEuMTY2ODU0ODE0OC4wLjAuMA.."
            className="img-fluid"
            alt="Dashboard banner"
          ></img>
        <div className="col">
          <main>
            <Routes />
          </main>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Layout;
