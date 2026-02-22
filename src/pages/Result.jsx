import React, { useState } from "react";
import LinkButton from "../components/common/LinkButton";
import Button from "../components/common/Button";
import ResultInfoCard from "../components/Result/ResultInfoCard";
import { resultInfoCardData } from "../Data/ResultData/ResultInfoCardData";
import RouteStartCard from "../components/Result/RouteStartCard";
import RouteStopCard from "../components/Result/RouteStopCard";
import TripDetailRow from "../components/Result/TripDetailRow";
import { Icon } from "@iconify/react";
import WaypointMarker from "../components/Map/WaypointMarker";
import Table from "../components/Result/Table";
import { tableData } from "../Data/ResultData/TableData";

const Result = () => {
  const routeStopCardInfo = [
    { destination: "Kathmandu", distance: "45 mi", price: "$45 " },
    { destination: "Pokahara", distance: "67 mi", price: "$47 " },
    { destination: "Lumbini", distance: "78 mi", price: "$55 " },
    { destination: "Dhangadhi", distance: "120 mi", price: "$90 " },
  ];

  const tripDetail = [
    { label: "Vehicle Type", value: "Car" },
    { label: "Fuel Price", value: "$45" },
    { label: "Total Stop", value: "5" },
    { label: "Avg. Distance/Stop", value: "79.7mi" },
  ];

  const totalStops = routeStopCardInfo.length + 1;

  const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <main className="px-5 lg:px-[5vw]">
      <LinkButton
        name="Back to Map"
        pageLink="/map"
        icon="tabler:arrow-left"
        className="flex-row-reverse  max-w-fit p-2  rounded-lg mt-10  bg-gray-200 mb-5"
      />
      <div className="sm:grid sm:grid-cols-[55vw_auto] gap-10 items-start justify-between">
        <section className="flex flex-col items-center shadow-[0_0_5px_rgba(0,0,0,0.25)] rounded-2xl p-2 text-center mb-2">
          <h1 className="text-3xl font-bold">Route Summary</h1>
          <div>Complete breakdown of your optimized route</div>
        </section>
        <Button
          name="Export PDF"
          icon="material-symbols-light:download-rounded"
          className="flex items-center  bg-black text-white w-full justify-center gap-2 font-bold p-2 rounded-lg sm:w-40  "
        />
      </div>
      <div className="lg:grid grid-cols-[60vw_auto] gap-10">

      <div>
        <section className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {resultInfoCardData.map((elem, index) => (
            <ResultInfoCard key={index} {...elem} />
          ))}
        </section>
        <section className="mt-5 border-b border-l border-r border-gray-400 rounded-lg md:hidden  ">
          <div className="border-b p-2 border-gray-400 flex flex-col gap-2 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold ">Stop-by-Stop Breakdown</h2>
            <div className="text-gray-500">
              Detailed distance and fuel cost for each leg of your journey
            </div>
          </div>
          <RouteStartCard startLocation="Biratnagar" />
          <div>
            {routeStopCardInfo.map((elem, index) => (
              <RouteStopCard
                key={index}
                destination={elem.destination}
                label={letter[index + 1]}
                distance={elem.distance}
                price={elem.price}
                lastDestination={index === routeStopCardInfo.length - 1}
              />
            ))}
          </div>
          <div className="flex p-5 justify-between items-center bg-gray-200">
            <div className="text-2xl font-semibold">Total</div>
            <div className="font-semibold">
              <div className="text-blue-600">239 mi</div>
              <div className="text-green-600">$33.46</div>
            </div>
          </div>
        </section>
        <section className=" hidden md:block mt-5">
          <div className="border-b p-2 border-gray-400 flex flex-col gap-2 bg-gray-200 rounded-lg">
            <h2 className="text-xl font-bold ">Stop-by-Stop Breakdown</h2>
            <div className="text-gray-500">
              Detailed distance and fuel cost for each leg of your journey
            </div>
            <Table tableData={tableData} />
          </div>
        </section>
      </div>

      <div>
        <section className="mt-5">
          <div className="text-xl font-bold  border p-5 rounded-t-lg border-gray-400">
            Route Preview
          </div>
          <div className="bg-[#cfe5e7] h-110 border border-gray-400 p-5">
            <div className="flex flex-col  items-center justify-between gap-2">
              <Icon
                className="text-blue-700"
                icon="famicons:paper-plane-outline"
                height={50}
                width={50}
              />
              <span>Interactive Map</span>
              <div className="flex flex-col items-center gap-1">
                {Array.from({ length: totalStops }).map((_, index) => (
                  <React.Fragment key={index}>
                    <WaypointMarker
                      label={letter[index]}
                      color={`${index === 0 ? "bg-green-700" : "bg-blue-700"}`}
                    />
                    {index !== totalStops - 1 && (
                      <div className="flex text-blue-700 border h-5 w-0"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="my-5">
          <div className="border p-5 rounded-lg border-gray-400">
            <h2 className="text-xl font-bold">Trip Details</h2>
            {tripDetail.map((elem, index) => (
              <React.Fragment key={index}>
                <TripDetailRow label={elem.label} value={elem.value} />
                {index !== tripDetail.length - 1 && (
                  <div className="border border-gray-400 "></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </section>
        <section className="mb-5">
          <div className="border rounded-lg border-gray-400 flex flex-col gap-5 p-5">
            <Button
              name="Plan new Route"
              className="w-full flex justify-center bg-gray-600 text-white py-2 rounded-lg"
            />
            <Button
              name="Route Settings"
              className="w-full flex justify-center bg-gray-600 text-white py-2 rounded-lg"
            />
          </div>
        </section>
      </div>
      </div>
    </main>
  );
};

export default Result;
