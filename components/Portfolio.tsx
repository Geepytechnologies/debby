import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div>
      <h2 className="text-gray-500 font-[500] py-6 uppercase tracking-wider text-center text-[25px]">
        Portfolio
      </h2>
      <div className="logos bg-gray-50 max-w-full flex justify-between overflow-hidden   ">
        <div className="logos-slide flex  gap-10 p-4 ">
          <div className="flex flex-col gap-2">
            <img src="/cassava.jpeg" />
            <p className="text-center">Cassava Network</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/collector.jpeg" />
            <p className="text-center">Collector</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/despace.jpg" />
            <p className="text-center">Despace Protocol</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/dojima.jpg" />
            <p className="text-center">Dojima Network</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/zoa.jpeg" />
            <p className="text-center">Zone of Avoidance</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/metavists.jfif" />
            <p className="text-center">Metavists NFT</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/cyclers.jpeg" />
            <p className="text-center">Cyclers Studio</p>
          </div>
        </div>
        <div className="logos-slide flex  gap-10 p-4 ">
          <div className="flex flex-col gap-2">
            <img src="/cassava.jpeg" />
            <p className="text-center">Cassava Network</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/collector.jpeg" />
            <p className="text-center">Collector</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/despace.jpg" />
            <p className="text-center">Despace Protocol</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/dojima.jpg" />
            <p className="text-center">Dojima Network</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/zoa.jpeg" />
            <p className="text-center">Zone of Avoidance</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/metavists.jfif" />
            <p className="text-center">Metavists NFT</p>
          </div>
          <div className="flex flex-col gap-2">
            <img src="/cyclers.jpeg" />
            <p className="text-center">Cyclers Studio</p>
          </div>
        </div>
        {/* <div className="logos-slide flex min-w-full gap-10 p-4">
          <img src="/cassava.jpeg" />
          <img src="/collector.jpeg" />
          <img src="/despace.jpg" />
          <img src="/dojima.jpg" />
          <img src="/zoa.jpeg" />
          <img src="/metavists.jfif" />
          <img src="/cyclers.jpeg" />
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
