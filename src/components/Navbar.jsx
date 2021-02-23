import React from "react";
//props = {totalCounters}
function Navbar({totalCounters}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-secondary m-2">
          {totalCounters}</span>
      </a>
    </nav>
  );
}

export default Navbar;
