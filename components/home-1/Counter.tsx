import React, { useState } from "react";
import CounterElement from "../Counter";

const Counter = () => {
  const [active, setActive] = useState(2);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleMouseMove = (e: any) => {
    setX(e.nativeEvent.offsetX);
    setY(e.nativeEvent.offsetY);
  };

  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
  } as React.CSSProperties;

  // Data array for the counters
  const countersData = [
    {
      id: 1,
      end: 652,
      label: "Unique Daily Users.",
      symbol: "+",
    },
    {
      id: 2,
      end: 50,
      label: "Downloads",
      symbol: "M",
    },
    {
      id: 3,
      end: 200,
      label: "Games Launched",
      symbol: "+",
    },
    {
      id: 4,
      end: 350,
      label: "Gaming Projects Delivered",

      symbol: "k",
    },
  ];

  return (
      <div className="counter-section pt-120">
        <div className="container">
          <div className="row cus-mar">
            {countersData.map((counter) => (
                <div key={counter.id} className="col-sm-6 col-xl-3">
                  <div
                      onMouseOver={() => setActive(counter.id)}
                      onMouseMove={handleMouseMove}
                      style={style}
                      className={`single-box py-6 box-style box-first d-center position-relative ${
                          active === counter.id && "active-area"
                      }`}
                  >
                    <div className="counters d-flex align-items-center">
                      <CounterElement end={counter.end}       className={"display-one text-primary"}/>
                      <span className="display-one text-primary">{counter.symbol}</span>
                    </div>
                    <p className="name-area fs-five position-absolute">
                      {counter.label}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};
 "display-one"
export default Counter;
