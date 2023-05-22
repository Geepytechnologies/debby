import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div>
      <p>Portfolio</p>
      <div className="logos max-w-full flex justify-between overflow-hidden   ">
        <div className="logos-slide flex   gap-10 p-4 min-w-full">
          <img src="/cassava.jpeg" />
          <img src="/collector.jpeg" />
          <img src="/despace.jpg" />
          <img src="/dojima.jpg" />
          <img src="/zoa.jpeg" />
          <img src="/metavists.jfif" />
          <img src="/cyclers.jpeg" />
        </div>
        <div className="logos-slide flex min-w-full gap-10 p-4">
          <img src="/cassava.jpeg" />
          <img src="/collector.jpeg" />
          <img src="/despace.jpg" />
          <img src="/dojima.jpg" />
          <img src="/zoa.jpeg" />
          <img src="/metavists.jfif" />
          <img src="/cyclers.jpeg" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
