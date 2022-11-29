import React from "react";
import "./Compt3.css";
import { HiMinus } from "react-icons/hi";

function Compt3() {
  return (
    <div id="compt3_div">
      <h3 id="compt3_h3"><HiMinus color="whitesmoke" /> BENEFITS <HiMinus color="whitesmoke" /></h3>
      <h2 id="compt3_h4">We Help You To Grow</h2>
      <div className="styling-example">
        <Carousel itemsToShow={2}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Compt3;
