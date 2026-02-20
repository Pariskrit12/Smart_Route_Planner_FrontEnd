import React from "react";
import LinkButton from "../components/common/LinkButton";
import Button from "../components/common/Button";
import InfoCard from "../components/Planner/InfoCard";
import InfoCardMap from "../components/Map/InfoCardMap";
import WaypointCard from "../components/Map/WaypointCard";
import { Icon } from "@iconify/react";
import WaypointMarker from "../components/Map/WaypointMarker";
import RouteConnector from "../components/Map/RouteConnector";
import MapFeatureIcon from "../components/Map/MapFeatureIcon";

const Map = () => {
  const buttons = [
    {
      name: "Shortest",
      icon: "boxicons:path-filled",
      className:
        "bg-black text-white flex items-center w-full justify-center  gap-2 rounded-lg p-1 ",
    },
    {
      name: "Cheapest",
      icon: "mynaui:dollar",
      className:
        " border flex items-center w-full justify-center  gap-2 rounded-lg p-1",
    },
  ];
  const infoCard = [
    {
      label: "Total Distance",
      value: "81 mil",
      bg_color: "eff6ff",
      text_color: "1447e6",
    },
    {
      label: "Fuel Cost",
      value: "$11.34",
      bg_color: "f0fdf4",
      text_color: "658236",
    },
    {
      label: "Est. Time",
      value: "1h 37m",
      bg_color: "faf5ff",
      text_color: "a500db",
    },
    {
      label: "Vehicle",
      value: "Car",
      bg_color: "fff7ed",
      text_color: "d63500",
    },
  ];
  const waypointsCard = [
    {
      label: "Destination 1",
      value: "12 mi from previous",
      bg_color: "155dfc",
      border_color: "8bc3ff",
    },
    {
      label: "Destination 2",
      value: "19 mi from previous",
      bg_color: "155dfc",
      border_color: "8bc3ff",
    },
  ];
  const waypoints = [
    { label: "A", color: "bg-green-600" },
    { label: "B", color: "bg-blue-600" },
    { label: "C", color: "bg-blue-600" },
  ];
  const mapFeatuerIcon = [
    { icon: "mdi-light:magnify-plus" },
    { icon: "mdi-light:magnify-minus" },
    { icon: "proicons:layers" },
  ];
  return (
    <main className="px-5   lg:grid lg:grid-cols-[30vw_1fr] gap-5  ">
      <div className="lg:w-[30vw]">
        <LinkButton
          pageLink="/planner"
          name="Back to Input"
          icon="tabler:arrow-left"
          className="flex-row-reverse max-w-fit p-2 mt-10  rounded-lg  bg-gray-200 mb-4  "
        />
        <section className="flex flex-col gap-2  rounded-xl items-center p-2 shadow-[0_0_5px_rgba(0,0,0,0.25)] mb-4">
          <h1 className="text-3xl font-bold">Route Overview</h1>
          <p>Drag waypoints to adjust route</p>
        </section>
        <section className="flex flex-col gap-2 mb-4">
          <h2 className="font-bold">Route Optimization</h2>
          <div className="flex gap-2 w-full ">
            {buttons.map((elem, index) => (
              <Button
                key={index}
                name={elem.name}
                icon={elem.icon}
                className={elem.className}
              />
            ))}
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4 mb-4">
          {infoCard.map((elem, index) => (
            <InfoCardMap key={index} {...elem} />
          ))}
        </section>

        <section className="flex flex-col gap-2 mb-5">
          <h2 className="font-bold">WayPoints</h2>
          <div className="grid grid-cols-1 gap-3 mb-3">
            <WaypointCard
              label="Starting Location"
              value="Starting Point"
              mainBg_color="ccfddb"
              bg_color="00a63e"
              border_color="8bf8b1"
            />
            {waypointsCard.map((elem, index) => (
              <WaypointCard key={index} {...elem} />
            ))}
          </div>
          <LinkButton
            name="View Detailed Results"
            icon="proicons:note"
            className="flex gap-2  bg-black text-white items-center p-2 justify-center rounded-xl"
            pageLink="/results"
          />
        </section>
      </div>
      <div className="lg:mt-23.5 ">
        <section className="flex ">
          <div className="flex flex-col p-5 justify-center h-100 gap-10 w-full bg-[#dbeff9] relative lg:rounded-xl lg:h-181">
            <div className="flex flex-col items-center   ">
              <Icon
                className="text-blue-700"
                icon="famicons:paper-plane-outline"
                width="50"
                height="50"
              />
              <div>Interactive View</div>
              <div>Route visualization with 3 waypoints</div>
            </div>
            <div className="flex items-center">
              {waypoints.map((elem, index) => (
                <React.Fragment key={index}>
                  <WaypointMarker {...elem} />
                  {index !== waypoints.length - 1 && <RouteConnector />}
                </React.Fragment>
              ))}
            </div>
            <div className="absolute h-10 max-w-fit top-3 z-50 right-2 grid grid-cols-1 gap-2 ">
              {mapFeatuerIcon.map((elem, index) => (
                <MapFeatureIcon key={index} icon={elem.icon} />
              ))}
            </div>
            <div className="bg-white absolute bottom-2 flex gap-1 left-2 rounded-xl py-2 px-2 ">
              <Icon icon="boxicons:path-filled" width={24} height={24} />
              <div>Shortest Route .</div>
              <div>Standard View</div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Map;
