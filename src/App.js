import React, { useState, useEffect, Fragment } from "react";
import "./styles.css";

export default function App() {
  const [clr, setClr] = useState("#ffffff");
  const [coord, setCoord] = useState({ x: -1, y: -1 });

  useEffect(() => {
    const myClrs = {
      NW: "#ffa500",
      NE: "#15ff00",
      SE: "#00ffff",
      SW: "#87cefa",
      WH: "#ffffff"
    };
    const wnh = window.innerHeight * 0.7;
    const wnw = window.innerWidth * 0.7;
    const update = (e) => {
      setCoord({ x: e.x, y: e.y });

      e.x < 20 && e.y < 20
        ? setClr(myClrs.NW)
        : e.x > wnw && e.y < 20
        ? setClr(myClrs.NE)
        : e.x > wnw && e.y > wnh
        ? setClr(myClrs.SE)
        : e.x < 20 && e.y > wnh
        ? setClr(myClrs.SW)
        : setClr(myClrs.WH);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    document.body.style.background = clr;
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
      document.body.style.background = myClrs.WH;
    };
  }, [clr, setClr]);

  return (
    <Fragment>
      <h4>
        color:{clr} (X,Y)=({coord.x},{coord.y})
      </h4>
    </Fragment>
  );
}
